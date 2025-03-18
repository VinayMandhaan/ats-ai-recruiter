
interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
    return (
        <button onClick={onClick} className={'bg-transparent border-white border-2 hover:bg-white hover:text-black transition-all duration-300 text-white px-16 py-2 rounded-lg mt-8 font-semibold cursor-pointer'} disabled={disabled}>{children}</button>
    )
}

export default Button;