import clsx from "clsx";
// ICONS
import { ReactComponent as SearchIcon } from "~/assets/icons/search.svg";

type Props = {
	className?: string;
};

const Searcher = ({ className }: Props) => {
	const classNames = clsx(
		"flex bg-[#eef0fd] dark:bg-[#2f2f2f] text-[#bbbbc5] dark:text-[#ebebf599] rounded-3xl p-[10px] focus-within:bg-[#eef0fd]/[0.6] dark:focus-within:bg-[#3c3c3c]",
		className
	);

	return (
		<form className={classNames}>
			<button className="text-[currentColor]" tabIndex={-1} type="button">
				<SearchIcon fill="currentColor" height={16} width={16} />
			</button>

			<input
				className="bg-[inherit] placeholder:text-[currentColor] leading-none rounded-r-[inherit] px-2 outline-none flex-grow"
				placeholder="Search"
				type="text"
			/>
		</form>
	);
};

export default Searcher;
