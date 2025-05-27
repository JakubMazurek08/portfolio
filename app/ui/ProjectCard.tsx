import {Text} from "./Text";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/app/ui/Button";
import {Icon} from "./SvgIcons";

interface ProjectCardProps {
    title: string;
    text: string;
    img: string;
    icons: string[];
    url: string;
    textHeight?: number;
    textRef?: any;
}

export const ProjectCard = ({ title, text, img, icons, url, textHeight, textRef }: ProjectCardProps) => {
    return (
        <div className="absolute p-4 sm:p-8 rounded-[10px] sm:rounded-[15px] sm:bg-darkGray gap-4 w-full h-auto">
            <Text variant={"h1"}>
                {title}<span className="text-accent">.</span>
            </Text>

            <div
                ref={textRef}
                style={{ height: textHeight ? `${textHeight}px` : 'auto' }}
                className="transition-all mb-8 duration-300"
            >
                <Text>{text}</Text>
            </div>

            <div className="flex flex-col items-center">
                <Image
                    className="rounded-[10px] my-4 sm:w-auto sm:h-auto sm:object-fill object-cover h-[200px] w-[320px]"
                    width={1000}
                    height={0}
                    src={`/${img}`}
                    alt="project image"
                />
            </div>

            <div className="flex justify-between flex-col sm:flex-row gap-6 sm:mt-4">
                <div className="flex gap-2">
                    {icons.map((icon, index) => (<Icon key={index} name={icon} />))}
                </div>
                <Link href={url} passHref legacyBehavior>
                    <a target="_blank">
                        <Button variant="secondary">Visit</Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};
