type Props = {
	img: string;
	name: string;
};

const UserProfile = ({ img, name }: Props) => {
	return (
		<div className="flex items-center gap-3">
			<picture className="relative before:absolute before:bg-[#32d74b] before:w-[6px] before:h-[6px] before:right-0 before:bottom-0 before:rounded-full">
				<img alt="User profile" className="w-6 rounded-full" src={img} />
			</picture>

			<span>{name}</span>
		</div>
	);
};

export default UserProfile;
