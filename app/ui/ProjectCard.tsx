import {Text} from "./Text"
import {Button} from "./Button"
import {Icon} from "./SvgIcons"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    title: string;
    text: string;
    img: string;
    icons: string[];
    url: string;
}

export const ProjectCard = ({title, text, img, icons, url} : ProjectCardProps) => {
    return (
        <div className="flex flex-col p-4 sm:p-8 rounded-[10px] sm:rounded-[15px] my-16 bg-darkGray gap-4 w-full">
            <Text variant={"h1"}>{title}<span className="text-accent">.</span></Text>
            <div className={'min-h-[125px]'}><Text>{text}</Text></div>

            <div className='flex flex-col items-center'><Image className={"rounded-[10px] my-4 sm:w-auto sm:h-auto sm:object-fill object-cover h-[200px] w-[320px]"} width={1000} height={0} src={`/${img}`} alt={"project image"}/></div>
            <div className="flex justify-between flex-col sm:flex-row">
                <div className="flex gap-2">
                    {icons.map((icon, index) => (<Icon key={index} name={icon}/>))}
                </div>
                <Link href={url} passHref legacyBehavior>
                    <a target="_blank">
                        <Button variant="secondary">Visit</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}