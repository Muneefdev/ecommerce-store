import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				disabled={disabled}
				ref={ref}
				className={cn(
					`
				w-auto
				rounded-full
				bg-black
				border-transparent
				px-5
				py-3
				disabled:cursor-not-allowed
				disabled:opacity-50
				text-white
				font-semibold
				hover:opacity-75
				transition

				`,
					className
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
