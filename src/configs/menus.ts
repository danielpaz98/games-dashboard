// TOP MENU ICONS
import { ReactComponent as HomeIcon } from "~/assets/icons/home.svg";
import { ReactComponent as FireIcon } from "~/assets/icons/fire.svg";
import { ReactComponent as GridIcon } from "~/assets/icons/grid.svg";
import { ReactComponent as UsersIcon } from "~/assets/icons/users.svg";
import { ReactComponent as SignalIcon } from "~/assets/icons/signal.svg";
// BOTTOM MENU ICONS
import { ReactComponent as DownloadIcon } from "~/assets/icons/download.svg";
import { ReactComponent as SettingsIcon } from "~/assets/icons/settings.svg";

export const topMenu = [
	{ href: "#", icon: HomeIcon, text: "Home" },
	{ href: "#", icon: FireIcon, text: "Store" },
	{ href: "#", icon: GridIcon, text: "Library" },
	{ href: "#", icon: UsersIcon, text: "Friends" },
	{ href: "#", icon: SignalIcon, text: "Live" },
];

export const bottomMenu = [
	{ href: "#", icon: DownloadIcon, text: "Downloads" },
	{ href: "#", icon: SettingsIcon, text: "Settings" },
];
