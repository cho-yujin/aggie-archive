'use client';
import React from "react";
import {Class} from "@/utils/types";
import Image from "next/image";

/* initialize props for classes */
type ClassCardProps = {
	course: Class;
	onToggleClass: (course: Class) => void;
	onToggleArchive: (course: Class) => void;
	isArchived: (courseNum: string) => boolean;
};


export default function ClassCard({course, onToggleClass, onToggleArchive, isArchived}: ClassCardProps) {

	return (
		<div
			className="bg-purpleGray rounded-[10px] shadow-md p-3 gap-2.5 flex flex-col justify-start items-center md: min-h-[232px] md:min-h-[260px] lg:min-h-[295px] w-full cursor-pointer"
			onClick={() => {
				window.location.href = `/discussion/${course.id}`
			}}>
			<Image
				src={"class-image.svg"}
				alt={"Default class card image"}
				width={500}
				height={160}
			/>
			<div className="flex flex-col px-2 pt-1 lg:pt-1.5 gap-1 w-full">
				{/* class name + archive button */}
				<div className="flex flex-row justify-between items-center">
					<h2 className="text-lg lg:text-[20px] font-bold text-darkPurple whitespace-nowrap">{course.course_code}</h2>
					{/* if a current class, have archive button. if an unarchived class, have an unarchive button. */}
					<div className="">
						{!isArchived(course.course_code) ? (
							<div className="flex gap-1">
								<button className="pointer-cursor" onClick={(e) => {
									e.stopPropagation();
									onToggleArchive(course);
									onToggleClass(course)
								}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M6.24902 3.5H17.75C17.9208 3.5 18.0855 3.52643 18.2461 3.58008L18.4062 3.64355C18.5593 3.71329 18.6902 3.80329 18.8018 3.91504L18.9062 4.03418L18.9131 4.04199L20.1631 5.56738V5.56641C20.2772 5.70584 20.3606 5.85521 20.416 6.01465C20.4583 6.13632 20.4847 6.26163 20.4951 6.3916L20.5 6.52344V19C20.5 19.4163 20.3579 19.7606 20.0596 20.0596C19.7988 20.3208 19.5025 20.4622 19.1533 20.4932L19.001 20.5H5C4.58354 20.5 4.23963 20.3578 3.94141 20.0596C3.68039 19.7986 3.53854 19.5021 3.50684 19.1523L3.5 18.999V6.52539C3.5 6.3916 3.51591 6.26244 3.54785 6.1377L3.58496 6.01465C3.64039 5.85522 3.72278 5.7056 3.83594 5.56641L3.83691 5.56738L5.08691 4.04199L5.09277 4.03418C5.1926 3.90713 5.31084 3.80234 5.44922 3.71875L5.59473 3.6416C5.75183 3.56995 5.91301 3.52619 6.08008 3.50879L6.24902 3.5ZM4.5 19.5H19.5V7.5H4.5V19.5ZM12.5 10.5V15.4072L13.3535 14.5537L14.5996 13.3066L15.293 14L12 17.293L8.70703 14L9.39941 13.3066L11.5 15.4072V10.5H12.5ZM5.86914 4.67578L5.01855 5.67578L4.31836 6.5H19.6816L18.9814 5.67578L18.1309 4.67578L17.9814 4.5H6.01855L5.86914 4.67578Z"
											fill="black" stroke="#483183"/>
									</svg>
								</button>
								<button className="pointer-cursor" onClick={(e) => {
									e.stopPropagation();
									onToggleClass(course)
								}}>
									<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
													d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
													fill="#483183"/>
									</svg>
								</button>
							</div>
						) : (
							<div className="flex gap-1">
								<button className="pointer-cursor" onClick={(e) => {
									e.stopPropagation();
									onToggleArchive(course);
									onToggleClass(course)
								}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
													d="M12.5939 23.258L12.5819 23.26L12.5109 23.295L12.4909 23.299L12.4769 23.295L12.4059 23.259C12.3953 23.2563 12.3873 23.2583 12.3819 23.265L12.3779 23.275L12.3609 23.703L12.3659 23.723L12.3759 23.736L12.4799 23.81L12.4949 23.814L12.5069 23.81L12.6109 23.736L12.6229 23.72L12.6269 23.703L12.6099 23.276C12.6073 23.2653 12.6019 23.2593 12.5939 23.258ZM12.8579 23.145L12.8439 23.147L12.6599 23.24L12.6499 23.25L12.6469 23.261L12.6649 23.691L12.6699 23.703L12.6779 23.711L12.8789 23.803C12.8916 23.8063 12.9013 23.8037 12.9079 23.795L12.9119 23.781L12.8779 23.167C12.8746 23.1543 12.8679 23.147 12.8579 23.145ZM12.1429 23.147C12.1385 23.1443 12.1333 23.1435 12.1282 23.1446C12.1232 23.1457 12.1188 23.1487 12.1159 23.153L12.1099 23.167L12.0759 23.781C12.0766 23.793 12.0823 23.801 12.0929 23.805L12.1079 23.803L12.3089 23.71L12.3189 23.702L12.3219 23.691L12.3399 23.261L12.3369 23.249L12.3269 23.239L12.1429 23.147Z"
													fill="#483183"/>
										<path fillRule="evenodd" clipRule="evenodd"
													d="M16.586 3C17.0556 3.00011 17.5101 3.16543 17.87 3.467L18 3.586L20.414 6C20.746 6.33202 20.9506 6.77028 20.992 7.238L21 7.414V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V7.414C3.00011 6.94445 3.16543 6.48991 3.467 6.13L3.586 6L6 3.586C6.33202 3.25398 6.77028 3.04937 7.238 3.008L7.414 3H16.586ZM19 9H5V19H19V9ZM12 10.4C12.2198 10.4 12.4335 10.4724 12.608 10.606L12.708 10.693L14.828 12.814C15.0093 12.9935 15.115 13.2356 15.1237 13.4905C15.1323 13.7455 15.0432 13.9942 14.8745 14.1856C14.7059 14.377 14.4704 14.4967 14.2164 14.5202C13.9623 14.5437 13.7089 14.4692 13.508 14.312L13.414 14.228L13 13.814V17C12.9997 17.2549 12.9021 17.5 12.7272 17.6854C12.5522 17.8707 12.313 17.9822 12.0586 17.9972C11.8042 18.0121 11.5536 17.9293 11.3582 17.7657C11.1627 17.6021 11.0371 17.3701 11.007 17.117L11 17V13.814L10.586 14.228C10.4065 14.4093 10.1644 14.515 9.90945 14.5237C9.65448 14.5323 9.40583 14.4432 9.21442 14.2745C9.02301 14.1059 8.9033 13.8704 8.8798 13.6164C8.85629 13.3623 8.93078 13.1089 9.088 12.908L9.172 12.814L11.292 10.693C11.385 10.6 11.4953 10.5263 11.6168 10.476C11.7383 10.4257 11.8685 10.3999 12 10.4ZM16.586 5H7.414L5.414 7H18.586L16.586 5Z"
													fill="#483183"/>
									</svg>
								</button>
								<button className="pointer-cursor" onClick={(e) => {
									e.stopPropagation();
									onToggleArchive(course)
								}}>
									<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
													d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
													fill="#483183"/>
									</svg>
								</button>
							</div>
						)}
					</div>
				</div>

				<p className="text-[10px] lg:text-[12px] font-normal text-darkPurple"><strong>UC Davis</strong> | {course.title}
				</p>
			</div>
		</div>
	);
}