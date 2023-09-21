"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MainNavProps = {
	data: Category[];
};

export default function MainNav({ data }: MainNavProps) {
	const path = usePathname();

	const routes = data.map((route) => ({
		label: route.name,
		href: `/category/${route.id}`,
		isActive: path === `/category/${route.id}`,
	}));

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routes.map((route) => (
				<Link
					href={route.href}
					key={route.label}
					className={cn(
						"text-sm font-medium transition-colors hover:text-black",
						route.isActive ? "text-black" : "text-neutral-500"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
}
