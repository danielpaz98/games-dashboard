// PLUGINS
import clsx from "clsx";
// ICONS
import { ReactComponent as SunIcon } from "~/assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "~/assets/icons/moon.svg";

type Props = {
	className?: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ColorModeSwitch = ({ className, checked, onChange }: Props) => {
	const classNames = clsx(
		"cursor-pointer relative inline-block w-10 h-[22px] bg-[#313136] border border-[#525259ad] hover:border-[#8e8e93] rounded-xl transition-[border-color] duration-[250ms]",
		checked ? "bg-[#313136]" : "bg-[#f6f6f7]",
		className
	);

	return (
		<label className={classNames}>
			<input
				checked={checked}
				className="pointer-events-none appearance-none h-full w-full peer/draft"
				type="checkbox"
				onChange={onChange}
			/>

			<span
				className={clsx(
					"bg-[#fff] grid place-items-center w-[18px] h-[18px] rounded-[50%] absolute top-[1px] left-[1px] translate-x-0 peer-checked/draft:translate-x-[18px] opacity-100 peer-checked/draft:opacity-0 transition-transform duration-[250ms]"
				)}
			>
				<SunIcon className="pointer-events-none" fill="#3c3c43b3" height={12} width={12} />
			</span>

			<span
				className={clsx(
					"bg-[#000] grid place-items-center w-[18px] h-[18px] rounded-[50%] absolute top-[1px] left-[1px] translate-x-0 peer-checked/draft:translate-x-[18px] opacity-0 peer-checked/draft:opacity-100 transition-transform duration-[250ms]"
				)}
			>
				<MoonIcon className="pointer-events-none" fill="#fffff5db" height={12} width={12} />
			</span>
		</label>
	);
};

export default ColorModeSwitch;
