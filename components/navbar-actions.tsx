"use client";

import { ShoppingCart } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";

type Props = {};

export default function NavbarActions({}: Props) {
	const [isMounted, setIsMounted] = useState(false);

	// to avoid ssr mismatch
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button className="flex items-center rounded-full bg-blue-700 px-4 py-2">
				<ShoppingCart size={24} color="white" />
				<span className="ml-2 text-sm font-medium text-white">0</span>
			</Button>
		</div>
	);
}
