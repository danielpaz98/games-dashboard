import { useState } from "react";
// PLUGINS
import clsx from "clsx";
// CONFIG
import { topMenu, bottomMenu } from "~/configs/menus";
// COMPONENTS
import { UserProfile, ColorModeSwitch } from "~/components";
// HOOKS
import { useColorMode } from "~/hooks";
// TYPES
import { ColorModes } from "~/hooks/useColorMode/types";
// IMAGES
import { ReactComponent as DarkLogo } from "~/assets/images/svg/dark-logo.svg";
import { ReactComponent as LightLogo } from "~/assets/images/svg/light-logo.svg";
// ICONS
import { ReactComponent as MenuIcon } from "~/assets/icons/menu.svg";
import { ReactComponent as OpenMenuIcon } from "~/assets/icons/menu-open.svg";

type Props = {
	className?: string;
};

const Sidebar = ({ className }: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { colorMode, changeColorMode } = useColorMode();

	const classNames = clsx(
		className,
		"h-screen min-w-[var(--sidebar-width)] fixed top-0 left-0 z-50 flex flex-col justify-between pl-3 bg-[var(--light-color)] dark:bg-[var(--dark-color)] text-[#ebebf599] transition-transform md:sticky md:translate-x-0 md:transition-none",
		isMenuOpen ? "-translate-x-full" : "translate-x-0"
	);

	return (
		<>
			<nav className={classNames}>
				<div className="flex items-center mb-14 mt-10 px-3">
					<a className="flex-grow" href="/" tabIndex={-1}>
						{colorMode === ColorModes.dark ? (
							<DarkLogo height={32} width={164} />
						) : (
							<LightLogo height={32} width={164} />
						)}
					</a>

					<ColorModeSwitch checked={colorMode === "dark"} onChange={() => changeColorMode()} />
				</div>

				<section className="flex flex-col justify-between pr-3 overflow-y-auto hover-scrollbar">
					<ul className="text-[#bbbbc5] dark:text-[#ebebf599] space-y-4">
						{topMenu.map(({ text, href, icon: Icon }, index) => (
							<li key={index}>
								<a
									className="flex items-center gap-3 hover:bg-[#eef0fd] dark:hover:bg-[#2f2f2f] hover:text-[#0061FD] dark:hover:text-[#fff] transition-colors p-3 rounded-2xl"
									href={href}
									tabIndex={-1}
								>
									<Icon className="shrink-0" fill="currentColor" height={24} width={24} />
									<span>{text}</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="text-[#bbbbc5] dark:text-[#ebebf599] space-y-4 mt-[400px]">
						{bottomMenu.map(({ text, href, icon: Icon }, index) => (
							<li key={index}>
								<a
									className="flex items-center gap-3 hover:bg-[#eef0fd] dark:hover:bg-[#2F2F2F] hover:text-[#0061fd] dark:hover:text-[#FFFFFF] transition-colors p-3 rounded-2xl outline-none"
									href={href}
								>
									<Icon className="shrink-0" fill="currentColor" height={24} width={24} />
									<span>{text}</span>
								</a>
							</li>
						))}
						<li className="p-3">
							<UserProfile
								img="https://api.dicebear.com/5.x/avataaars/svg?seed=Angel&backgroundColor=b6e3f4"
								name="Tung Tran"
							/>
						</li>
					</ul>
				</section>
			</nav>

			<button
				className="fixed z-10 bottom-4 right-6 p-1 bg-[#0061fd] text-[#fff] rounded-full md:hidden"
				type="button"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? <OpenMenuIcon height={24} width={24} /> : <MenuIcon height={24} width={24} />}
			</button>
		</>
	);
};

export default Sidebar;
