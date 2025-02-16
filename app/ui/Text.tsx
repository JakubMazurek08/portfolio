import {spaceGrotest, spaceGrotestBold} from "@/app/ui/fonts";

interface TextProps {
    children: React.ReactNode;
    variant?: 'h1' | 'p' | 'button' | 'header' | 'special' | 'special2';
}

export const Text = ({children, variant}: TextProps) => {
    if (variant === 'h1') {
        return <h1 className={`${spaceGrotestBold.className} text-[32px]/[50px] sm:text-[48px] text-white`}>{children}</h1>;
    }else if (variant === 'button'){
        return <p className={`${spaceGrotest.className} text-[16px] sm:text-[20px] text-white`}>{children}</p>;
    }else if (variant === 'header'){
        return <h1 className={`${spaceGrotestBold.className} text-[32px]/[50px] sm:text-[48px] text-white border-b-[2px] sm:border-b-[3px] border-accent`}>{children}</h1>;
    }else if (variant === 'special'){
        return <h1 className={`${spaceGrotestBold.className} text-[32px]/[50px] sm:text-[48px] text-white sm:[writing-mode:vertical-rl]`}>{children}</h1>;
    }else if (variant === 'special2'){
        return <h1 className={`${spaceGrotest.className} text-[64px]/[50px] sm:text-[48px] text-white`}>{children}</h1>;
    }
    return <p className={`${spaceGrotest.className} text-[16px] sm:text-[20px] text-lightGray`}>{children}</p>;
}