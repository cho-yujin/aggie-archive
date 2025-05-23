
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Dashboard() {
    const { user, isLoading } = useUser()
    if(isLoading) {
        return (
          <div className="">
            Loading...  
          </div>
        );
      } else {
        return(
            <div>
                <h1>Hi, </h1>
                <div>
                    <h2>My Classes</h2>
                </div>
                <div>
                    <h2>Archived Classes</h2>
                </div>
            </div>
        );
    }
}