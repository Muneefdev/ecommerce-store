import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import Container from "./ui/container";
import NavbarActions from "./navbar-actions";

export default async function Navbar() {
	const categories = await getCategories();

	return (
		<div className=" border-b">
			<Container>
				<div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
					<Link href="/" className="flex  ml-4 lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">ShopEase</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
}
