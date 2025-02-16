import {Text} from "./Text";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export const Button = ({children, variant}: ButtonProps) => {
    if (variant === 'secondary') {
        return <button
            className="w-[150px] sm:w-[230px] h-[32px] sm:h-[48px] border border-accent bg-darkGray rounded-[5px] sm:rounded-[10px] transition-all duration-300 hover:scale-105">
            <Text variant={
                'button'
            }>{children}</Text>
        </button>
    }
    return <button
        className="w-[150px] sm:w-[230px] h-[32px] sm:h-[48px] bg-darkGray rounded-[5px] sm:rounded-[10px] transition-all duration-300 hover:scale-105">
        <Text>{children}</Text>
    </button>
}