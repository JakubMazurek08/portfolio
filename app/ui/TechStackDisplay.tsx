'use client'

import {Text} from "./Text";
import {Icon} from "./SvgIcons";
import {useEffect, useState} from "react";

const iconsList = [
    "react",
    "typescript",
    "tailwind",
    "firebase",
    "html",
    "css",
    "figma",
    "node",
    "mysql",
    "python",
    "git",
    "illustrator"
]

export const TechStackDisplay= () => {
    const [icons, setIcons] = useState<string[]>([]);

    useEffect(()=>{
        setIcons([...iconsList, ...iconsList]);
    }, [iconsList]);

    return (
        <div className="flex flex-col sm:flex-row-reverse sm:gap-4">
            <Text variant="special">Tech Stack</Text>
            <div className="group flex flex-row sm:flex-col p-2 bg-darkGray w-full max-w-[calc(100vw-40px)] h-[48px] sm:w-[64px] sm:h-[450px]  overflow-hidden rounded-[10px] gap-2">
                {icons.map((icon, index) => (<div key={index} className="scrollUp"><Icon name={icon}/></div>))}
            </div>
        </div>
    )
}