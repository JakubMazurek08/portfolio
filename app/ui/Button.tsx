import { Text } from "./Text";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "submit";
    onClick?: () => void;
}

export const Button = ({ children, variant, onClick}: ButtonProps) => {
    const baseClasses =
        "w-[150px] sm:w-[230px] h-[32px] sm:h-[48px] bg-darkGray rounded-[5px] sm:rounded-[10px] transition-all duration-300 hover:scale-105";

    if (variant === "secondary") {
        return (
            <button onClick={onClick} className={`${baseClasses} border border-accent`}>
                <Text variant="button"><span className={'text-white'}>{children}</span></Text>
            </button>
        );
    } else if (variant === "submit") {
        return (
            <button onClick={onClick} type="submit" className={baseClasses}>
                <Text variant="button">{children}</Text>
            </button>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            <Text variant="button">{children}</Text>
        </button>
    );
};
