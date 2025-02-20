import {Text} from "./Text"
import {Button} from "./Button"
import {Icon} from "./SvgIcons"
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    text: string;
    img: string;
    icons: string[];
}

export const ProjectCard = ({title, text, img, icons} : ProjectCardProps) => {
    return (
        <div className="flex flex-col p-4 sm:p-8 rounded-[10px] sm:rounded-[15px] my-10 bg-darkGray gap-4">
            <Text variant={"h1"}>{title}<span className="text-accent">.</span></Text>
            <Text>{text}</Text>
            <Image className={"rounded-[10px] my-4 sm:w-auto sm:h-auto sm:object-fill object-cover h-[200px] w-[320px]"} width={1000} height={0} src={`/${img}`} alt={"project image"}/>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {icons.map((icon, index) => (<Icon key={index} name={icon}/>))}
                </div>
                <Button variant="secondary">Visit</Button>
            </div>
        </div>
    )
}