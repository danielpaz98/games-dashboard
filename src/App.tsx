// PLUGINS
import clsx from "clsx";
// LAYOUTS
import DarkLayout from "~/layouts/MainLayout";
// COMPONENTS
import { Swiper, Call2ActionBtn, GamesOnSaleCard } from "~/components";
// ICONS
import { ReactComponent as ArrowLeftCircle } from "~/assets/icons/arrow-left-circle.svg";
import { ReactComponent as ArrowRightCircle } from "~/assets/icons/arrow-right-circle.svg";
import { ReactComponent as ArrowRightIcon } from "~/assets/icons/arrow-right.svg";

const items = [
	{ img: new URL("assets/images/png/image1.png", import.meta.url).href, text: "Fortnite" },
	{ img: new URL("assets/images/png/image2.png", import.meta.url).href, text: "Rocket League®" },
	{ img: new URL("assets/images/png/image3.png", import.meta.url).href, text: "The Escapists 2" },
	{ img: new URL("assets/images/png/image4.png", import.meta.url).href, text: "The Long Dark" },
	{ img: new URL("assets/images/png/image5.png", import.meta.url).href, text: "Yakuza: Like a Dragon" },
	{ img: new URL("assets/images/png/image6.png", import.meta.url).href, text: "Warhammer: Vermintide 2" },
];

const sliderItems = [
	{
		img: new URL("assets/images/webp/slider-img1.webp", import.meta.url).href,
		title: "Valheim",
		genre: "Action Games",
		price: 8.15,
	},
	{
		img: new URL("assets/images/webp/slider-img2.webp", import.meta.url).href,
		title: "BIOSHOCK: THE COLLECTION",
		genre: "Action, RPG",
		discount: 80,
		oldPrice: 50,
		price: 8.67,
	},
	{
		img: new URL("assets/images/webp/slider-img3.webp", import.meta.url).href,
		title: "Unravel Two",
		genre: "Adventure Games",
		price: 20.38,
	},
	{
		img: new URL("assets/images/webp/slider-img4.webp", import.meta.url).href,
		title: "Tick Tock: A Tale for Two",
		genre: "Indie Games",
		discount: 60,
		oldPrice: 3.47,
		price: 1.39,
	},
	{
		img: new URL("assets/images/webp/slider-img5.webp", import.meta.url).href,
		title: "HITMAN 3",
		genre: "Action Games",
		price: 23.99,
	},
	// ----------
	{
		img: new URL("assets/images/webp/slider-img1.webp", import.meta.url).href,
		title: "Valheim",
		genre: "Action Games",
		price: 8.15,
	},
	{
		img: new URL("assets/images/webp/slider-img2.webp", import.meta.url).href,
		title: "BIOSHOCK: THE COLLECTION",
		genre: "Action, RPG",
		discount: 80,
		oldPrice: 50,
		price: 8.67,
	},
	{
		img: new URL("assets/images/webp/slider-img3.webp", import.meta.url).href,
		title: "Unravel Two",
		genre: "Adventure Games",
		price: 20.38,
	},
	{
		img: new URL("assets/images/webp/slider-img4.webp", import.meta.url).href,
		title: "Tick Tock: A Tale for Two",
		genre: "Indie Games",
		discount: 60,
		oldPrice: 3.47,
		price: 1.39,
	},
	{
		img: new URL("assets/images/webp/slider-img5.webp", import.meta.url).href,
		title: "HITMAN 3",
		genre: "Action Games",
		price: 23.99,
	},
	{
		img: new URL("assets/images/webp/slider-img1.webp", import.meta.url).href,
		title: "Valheim",
		genre: "Action Games",
		price: 8.15,
	},
];

function App() {
	return (
		<DarkLayout>
			<section className="flex flex-col gap-1 [@media(min-width:1220px)]:flex-row rounded-xl overflow-hidden">
				<figure className="relative flex text-[#fff]">
					<picture>
						<img
							alt="Main Banner"
							className="[@media(min-width:500px)]:h-full h-80 object-cover"
							src={new URL("assets/images/jpg/main-banner.jpg", import.meta.url).href}
						/>
					</picture>

					<section className="absolute flex flex-col justify-between w-full h-full">
						<h1 className="font-semibold text-[26px] drop-shadow ml-3 m mt-[18px] [@media(min-width:800px)]:ml-7">
							Fortnite
						</h1>

						<section className="p-3 [@media(min-width:800px)]:p-8 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]">
							<small className="text-sm text-[#ebebf5] drop-shadow mb-1">Update</small>

							<p className="font-semibold text-lg [@media(min-width:560px)]:text-[24px] [@media(min-width:560px)]:leading-[34px] mb-7 drop-shadow sm:max-w-md">
								The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.
							</p>

							<Call2ActionBtn className="text-sm [@media(min-width:900px)]:text-base group">
								<span>Play for free</span>
								<ArrowRightIcon
									className="transition-transform pointer-events-none group-hover:translate-x-1"
									height={24}
									width={24}
								/>
							</Call2ActionBtn>
						</section>
					</section>
				</figure>

				<section className="bg-[#eef0fd] dark:bg-[#2f2f2f] min-w-[210px] [@media(min-width:1220px)]:min-h-[456px] hover-scrollbar overflow-auto">
					<ul className="flex gap-2 [&>li:first-child]:relative [@media(min-width:1220px)]:block [@media(min-width:1220px)]:[&>li:first-child]:divider">
						{items.map(({ img, text }, index) => (
							<li key={index} className="min-w-[100px]">
								<a
									className="text-[#6d6f7b] dark:text-[#fff] block items-center gap-2 px-3 h-full py-2 hover:bg-[#e4e7fc] dark:hover:bg-white/10 transition-colors [@media(min-width:1220px)]:flex [@media(min-width:1220px)]:gap-[18px]"
									href="#"
									tabIndex={-1}
								>
									<img alt={text} className="rounded-sm w-12 h-[60px] mx-auto" src={img} />
									<p
										className="text-sm text-center [@media(min-width:1220px)]:text-start line-clamp-2 flex-grow"
										title={text}
									>
										{text}
									</p>
								</a>
							</li>
						))}
					</ul>
				</section>
			</section>

			<div className="mt-[50px]">
				<h1 className="text-base mb-[30px] font-semibold text-[#505264] dark:text-[#fff]">Games On Sale</h1>

				<Swiper
					breakpoints={{
						500: {
							slidesPerView: 3,
							slidesPerGroup: 3,
							spaceBetween: 16,
						},
						1000: {
							slidesPerView: 4,
							slidesPerGroup: 4,
							spaceBetween: 24,
						},
						1200: {
							slidesPerView: 5,
							slidesPerGroup: 5,
							spaceBetween: 24,
						},
					}}
					navigation={{
						nextEl: ({ slideNext, swiper }) => (
							<button
								className={clsx(
									"w-7 text-[#bbbbc5] dark:text-[#fff] absolute -translate-y-1/2 bottom-[102%] right-0",
									swiper?.isEnd && "pointer-events-none opacity-[.35] cursor-auto"
								)}
								type="button"
								onClick={() => slideNext()}
							>
								<ArrowRightCircle className="pointer-events-none" fill="currentColor" />
							</button>
						),
						prevEl: ({ slidePrev, swiper }) => (
							<button
								className={clsx(
									"w-7 text-[#bbbbc5] dark:text-[#fff] absolute -translate-y-1/2 bottom-[102%] right-[64px]",
									swiper?.isBeginning && "pointer-events-none opacity-[.35] cursor-auto"
								)}
								type="button"
								onClick={() => slidePrev()}
							>
								<ArrowLeftCircle className="pointer-events-none" fill="currentColor" />
							</button>
						),
					}}
					slidesPerGroup={2}
					slidesPerView={2}
					spaceBetween={16}
					speed={400}
				>
					{sliderItems.map((item, index) => (
						<Swiper.Slide key={index}>
							<a href="#" tabIndex={-1}>
								<GamesOnSaleCard
									discount={item.discount}
									genre={item.genre}
									img={item.img}
									oldPrice={item.oldPrice}
									price={item.price}
									title={item.title}
								/>
							</a>

							<div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
						</Swiper.Slide>
					))}
				</Swiper>
			</div>
		</DarkLayout>
	);
}

export default App;
