
interface TitleProps {
    title: string;
    subTitle: string;
}

const Header = ({ title, subTitle }: TitleProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-white text-3xl font-semibold text-center">{title}</h3>
            <div className="mt-2">
                <p className="text-center text-gray-400">{subTitle}</p>
            </div>
        </div>
    )
}

export default Header;