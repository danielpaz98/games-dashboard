type Props = {
	img: string;
	title: string;
	genre: string;
	price: number;
	discount?: number;
	oldPrice?: number;
};

const GamesOnSaleCard = ({ img, title, genre, price, discount, oldPrice }: Props) => {
	return (
		<div className="flex flex-col">
			<img alt={title} loading="lazy" src={img} />

			<div className="py-[18px] [&>*]:mb-[6px] text-[#3f4359] dark:text-[#fff]">
				<h3 className="font-semibold truncate">{title}</h3>
				<p className="text-[#bbbbc5] dark:text-[#ebebf599] truncate">{genre}</p>

				<div className="flex items-center gap-3">
					{discount && (
						<div className="bg-[#b1dd8b] font-semibold min-w-12 h-6 p-1 flex items-center rounded-md">
							<span className="text-base text-[#38571a]">-{discount}%</span>
						</div>
					)}
					{oldPrice && <span className="line-through mr-1 text-[#bbbbc5] dark:text-[#fff]">${oldPrice}</span>}
					<span className="font-semibold">${price}</span>
				</div>
			</div>
		</div>
	);
};

export default GamesOnSaleCard;
