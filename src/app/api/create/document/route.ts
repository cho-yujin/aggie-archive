import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { supabase } from '@/supabase/client';

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-west-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_KEY!
    }
});

export const POST = withApiAuthRequired(async function handler(
    req: NextRequest
) {
    try {
        const { fileName, fileType, class_id, user_email } = await req.json();

        if (!fileName || !fileType || !class_id || !user_email) {
            return NextResponse.json(
                { error: 'fileName, fileType, class_id, and user_email are required' },
                { status: 400 }
            );
        }

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: `uploads/${fileName}`,
            ContentType: fileType,
        });

        const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        
        // Create document record in Supabase
        const { data: document, error: documentError } = await supabase
            .from('Document')
            .insert({
                name: fileName,
                aws_url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`,
                user_email: user_email,
                class_id: class_id,
                created_at: new Date().toISOString()
            })
            .select('*')
            .single();

        if (documentError) {
            console.error('Error creating document record:', documentError);
            return NextResponse.json(
                { error: 'Failed to create document record' },
                { status: 500 }
            );
        }

        return NextResponse.json({ presignedUrl, document });
    } catch (error) {
        console.error('Error generating presigned URL:', error);
        return NextResponse.json(
            { error: 'Failed to generate presigned URL' },
            { status: 500 }
        );
    }
}); 