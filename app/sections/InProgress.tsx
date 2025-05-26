import {Text} from "@/app/ui/Text";
import {Icon} from "@/app/ui/SvgIcons";
import {ProjectCard} from "@/app/ui/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/app/ui/Button";
import React from "react";

export const InProgress = () => {
    return <div className="my-[10vh] sm:my-[20vh]">
        <Text variant="header">Currently...</Text>
        <div className=" mt-10">
            <div className="flex items-center gap-3 mb-3 text-xl sm:text-2xl font-semibold text-white">
                <Icon name={'rust'}/>
                <Text variant={'h1'}>Learning Rust</Text>
            </div>
            <Text>
                I'm diving into <span className="text-accent">Rust</span> to deepen my understanding of systems
                programming and memory-safe concurrency.
                It’s a refreshing challenge compared to the JavaScript ecosystem I’m used to.
            </Text>
        </div>


        <div className="flex flex-col mt-10 gap-4 w-full">
            <Text variant={"h1"}>Building GradeSync<span className="text-accent">.</span></Text>
            <Text>A full-stack web app that simplifies grading for schools. Teachers can easily assign and manage grades
                on a 1–100 scale using a clean, responsive React frontend. The backend, powered by Express.js and
                Node.js, offers a RESTful API, with PostgreSQL handling data storage. Designed for usability and
                flexibility, GradeSync makes tracking student performance efficient and intuitive.</Text>
            <div className='flex flex-col items-center'><Image
                className={"rounded-[10px] my-4 sm:w-auto sm:h-auto sm:object-fill object-cover h-[200px] w-[320px]"}
                width={1000} height={0} src={`/gradesync.png`} alt={"project image"}/></div>

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Icon name={'react'}/>
                    <Icon name={'typescript'}/>
                    <Icon name={'mysql'}/>
                    <Icon name={'tailwind'}/>
                    <Icon name={'node'}/>
                </div>
                <Link href={'https://github.com/JakubMazurek08/gradesync'} passHref legacyBehavior>
                    <a target="_blank">
                        <Button>Visit Github Repo</Button>
                    </a>
                </Link>
            </div>
        </div>

    </div>;
}