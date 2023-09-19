import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type IconButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	className?: string;
	icon: React.ReactNode;
};

export default function IconButton({
	onClick,
	className,
	icon,
}: IconButtonProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 translate",
				className
			)}
		>
			{icon}
		</button>
	);
}
