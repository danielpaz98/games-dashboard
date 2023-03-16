import { useState, useEffect, useCallback } from "react";
// TYPES
import { ColorModes, HookReturnType, ColorModeType, ChangeColorModeType } from "./types";

const getPreferredColorScheme = () => {
	if (!window.matchMedia) return ColorModes.dark;

	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return ColorModes.dark;
	} else {
		return ColorModes.light;
	}
};

const useColorMode = (): HookReturnType => {
	const initialColorMode = (window.localStorage.getItem("color-theme") as ColorModeType) || getPreferredColorScheme();
	const [colorMode, setColorMode] = useState<ColorModeType>(initialColorMode);

	const changeColorMode = useCallback<ChangeColorModeType>(
		(mode) => {
			const updatedColorMode = mode || (colorMode === ColorModes.dark ? ColorModes.light : ColorModes.dark);

			if (updatedColorMode) {
				window.localStorage.setItem("color-theme", updatedColorMode);
				setColorMode(updatedColorMode);
			}
		},
		[colorMode]
	);

	useEffect(() => {
		if (colorMode === ColorModes.dark) {
			document.body.classList.add(colorMode);
		} else {
			document.body.removeAttribute("class");
		}
	}, [colorMode]);

	return { colorMode, changeColorMode };
};

export default useColorMode;
