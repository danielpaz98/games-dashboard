import { useCallback, useState, useRef, useEffect } from "react";
// PLUGINS
import * as SwiperAPI from "swiper";
import { NavigationOptions as NavigationOptionsType } from "swiper/types";
import { Swiper as SwiperReact, SwiperRef, SwiperProps } from "swiper/react";
// STYLES
import "swiper/css/bundle";

type SlideActionParams = (speed?: number, runCallbacks?: boolean) => void;
type NextElParams = { slideNext: SlideActionParams; swiper: SwiperAPI.Swiper | undefined };
type PrevElParams = { slidePrev: SlideActionParams; swiper: SwiperAPI.Swiper | undefined };

type NavigationOptions = Omit<NavigationOptionsType, "nextEl" | "prevEl"> & {
	nextEl?: NavigationOptionsType["nextEl"] | (({ slideNext, swiper }: NextElParams) => React.ReactNode);
	prevEl?: NavigationOptionsType["prevEl"] | (({ slidePrev, swiper }: PrevElParams) => React.ReactNode);
};

export type Props = Omit<SwiperProps, "navigation"> & {
	children?: React.ReactNode;
	navigation?: NavigationOptions | boolean;
};

const Swiper = (props: Props) => {
	const { children, navigation, ...otherProps } = props;

	const swiperRef = useRef<SwiperRef>(null);

	const [swiper, setSwiper] = useState<SwiperAPI.Swiper>();

	const navigationProp =
		typeof navigation === "boolean" ||
		typeof navigation?.nextEl !== "function" ||
		typeof navigation?.prevEl !== "function"
			? navigation
			: undefined;

	const slideNext = useCallback<SlideActionParams>(
		(speed, runCallbacks) => swiperRef.current?.swiper?.slideNext(speed, runCallbacks),
		[]
	);
	const slidePrev = useCallback<SlideActionParams>(
		(speed, runCallbacks) => swiperRef.current?.swiper?.slidePrev(speed, runCallbacks),
		[]
	);

	useEffect(() => {
		const swiper = swiperRef?.current?.swiper;

		if (swiper) {
			setSwiper({ ...swiper });
			swiper.on("slideChange", (swiper) => setSwiper({ ...swiper }));
		}
	}, [swiperRef]);

	return (
		<div className="swiper-container" style={{ position: "relative" }}>
			<SwiperReact ref={swiperRef} navigation={navigationProp as NavigationOptionsType} {...otherProps}>
				{children}
			</SwiperReact>

			{typeof navigation !== "boolean" && (
				<>
					{typeof navigation?.prevEl === "function" && navigation?.prevEl({ slidePrev, swiper })}
					{typeof navigation?.nextEl === "function" && navigation?.nextEl({ slideNext, swiper })}
				</>
			)}
		</div>
	);
};

export default Swiper;
