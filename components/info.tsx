"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { ShoppingBasketIcon } from "lucide-react";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

type InfoProps = {
	data: Product;
};

export default function Info({ data }: InfoProps) {
	const cart = useCart();

	const onAddToCart = () => {
		cart.addItem(data);
	};
	return (
		<div>
			<h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
			<div className="mt-3 flex items-end justify-between">
				<p className="text-2xl text-gray-900">
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">Size:</h3>
					<div>{data?.size?.name}</div>
				</div>
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">Color:</h3>
					<div
						className="h-5 w-5 rounded-md border border-gray-600"
						style={{ backgroundColor: data?.color?.value }}
					></div>
				</div>
			</div>
			<div className="mt-10 flex items-center gap-x-3">
				<Button
					onClick={onAddToCart}
					className="flex items-center gap-x-2 bg-blue-700"
				>
					Add To Cart
					<ShoppingBasketIcon />
				</Button>
			</div>
		</div>
	);
}
