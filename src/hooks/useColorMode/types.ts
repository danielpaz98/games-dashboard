export enum ColorModes {
	light = "light",
	dark = "dark",
}

export type HookReturnType = {
	colorMode: keyof typeof ColorModes;
	changeColorMode: (mode?: keyof typeof ColorModes) => void;
};

export type ColorModeType = HookReturnType["colorMode"];

export type ChangeColorModeType = HookReturnType["changeColorMode"];
