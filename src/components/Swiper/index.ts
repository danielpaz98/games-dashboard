// PLUGINS
import { SwiperSlide, SwiperSlideProps } from "swiper/react";
// COMPONENTS
import _Swiper, { Props as SwiperProps } from "./Swiper";

type SwiperComponent = {
	(props: SwiperProps): JSX.Element;
	Slide: React.FunctionComponent<SwiperSlideProps>;
};

export const Swiper: SwiperComponent = Object.assign(_Swiper, {
	Slide: SwiperSlide,
});

export default Swiper;
