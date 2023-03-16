// COMPONENTS
import { Navbar, Sidebar } from "~/components";

type Props = {
	children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<div className="sm:flex">
			<Sidebar className="before:absolute before:bg-[#bbbbc5]/[0.35] before:dark:bg-[#2f2f2f] before:h-[95%] before:top-1/2 before:-translate-y-1/2 before:right-0 before:w-[1px] inline-block" />

			<div className="main-container">
				<Navbar className="py-4 mb-5 sticky top-0 z-10" />
				<main>{children}</main>
			</div>
		</div>
	);
}
