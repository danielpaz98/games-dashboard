// PLUGINS
import clsx from "clsx";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const Call2ActionBtn = ({ children, className }: Props) => {
	const classNames = clsx(
		className,
		"flex items-center text-base py-[1em] px-[1.125em] gap-[10px] rounded-[0.875em] text-[#fff] bg-[#0061FD]"
	);

	return (
		<button className={classNames} type="button">
			{children}
		</button>
	);
};

export default Call2ActionBtn;
