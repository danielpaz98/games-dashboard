// PLUGINS
import clsx from "clsx";
// COMPONENTS
import Searcher from "./Searcher";
// ICONS
import { ReactComponent as NotificationIcon } from "~/assets/icons/notification.svg";

type Props = {
	className?: string;
};

const Navbar = ({ className }: Props) => {
	const classNames = clsx(
		"text-[#4c4b5d] dark:text-[#ebebf5] bg-[var(--light-color)] dark:bg-[var(--dark-color)]",
		className
	);

	return (
		<header className={classNames}>
			<nav className="flex flex-wrap gap-4 items-center [@media(min-width:900px)]:justify-between justify-center">
				<ul className="flex items-center gap-5">
					<li>
						<a className="bg-[#0061FD] inline-block text-[#fff] rounded-full p-2" href="#">
							Discover
						</a>
					</li>

					<li>
						<a href="#">Browse</a>
					</li>

					<li>
						<a href="#">Wishlist</a>
					</li>
				</ul>

				<ul className="flex items-center gap-4 lg:gap-8 [@media(min-width:900px)]:w-auto w-full">
					<li>
						<button className="block text-[#bbbbc5] dark:text-[#ebebf599]" type="button">
							<NotificationIcon fill="currentColor" height={24} width={24} />
						</button>
					</li>

					<li className="flex-grow">
						<Searcher className="[@media(min-width:880px)]:min-w-[318px]" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
