'use client'
import { Text } from "@/app/ui/Text";
import { ProjectCard } from "@/app/ui/ProjectCard";
import { useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: 'Samson Wiki',
            text: 'A web application designed to explore exercises for different muscle groups, calculate calories, track and create workouts, and utilize tools like the One Rep Max calculator. The project supports user login, enabling a personalized experience.',
            img: 'samson_wiki.png',
            icons: ['react', 'typescript', 'tailwind', 'firebase'],
            url: 'https://samsonwiki.netlify.app/'
        },
        {
            title: 'Ryujin',
            text: 'Ryujin is a stylish landing page for a website development company, inspired by the Japanese dragon. It features sleek design, smooth animations, and dynamic effects, showcasing modern web aesthetics and interactivity.',
            img: 'ryujin.png',
            icons: ['html', 'css', 'javascript'],
            url: 'https://ryujin-eji0.onrender.com/'
        },
        {
            title: 'Scoopaholic',
            text: "Scoopaholic is a sleek, vibrant landing page for an ice cream shop. Its main feature is an interactive drag-and-drop builder where users create custom cones by combining flavors. It includes full CRUD admin panels and sends a confirmation email when an order is placed.",
            img: 'scoopaholic.png',
            icons: ['react', 'typescript', 'python', 'tailwind'],
            url: 'https://github.com/technischools-lublin/Scoopaholic'
        },
        {
            title: 'IntervYou',
            text: "Built in just 24 hours at TechniCodeCamp Hackathon, our winning project - IntervYou is an AI-powered interview preparation platform that helps job seekers practice interviews, get instant feedback, and improve their skills through personalized flashcards and learning roadmaps..",
            img: 'intervyou.png',
            icons: ['react', 'typescript', 'python', 'tailwind','firebase'],
            url: 'https://github.com/JakubMazurek08/IntervYou'
        }
    ];

    const next = () => setCurrentIndex(prev => prev + 1);
    const prev = () => setCurrentIndex(prev => prev - 1);

    const getVisibleProjects = () => {
        const visibleRange = 3; // Show center + 1 on each side, plus buffer for smooth transitions
        const visibleProjects = [];

        for (let i = -visibleRange; i <= visibleRange; i++) {
            const projectIndex = ((currentIndex + i) % projects.length + projects.length) % projects.length;
            visibleProjects.push({
                ...projects[projectIndex],
                offset: i,
                key: `${currentIndex + i}-${projectIndex}`
            });
        }

        return visibleProjects;
    };

    return (
        <div id='projects' className="lg:mt-[60vh] pt-8 sm:pt-16 mb-[20vh] relative overflow-visible">
            <Text variant='header'>My Projects</Text>

            <div className="relative h-[700px] sm:h-[900px] mt-4 sm:mt-8">
                {getVisibleProjects().map((project) => {
                    const { offset } = project;

                    return (
                        <div id={'cards'}
                            key={project.key}
                            className={clsx(
                                "absolute top-0 left-1/2 -translate-x-1/2 transition-all",
                                "duration-500 ease-in-out",
                                "w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]",
                                {
                                    "z-30": offset === 0,
                                    "z-20 opacity-10": Math.abs(offset) === 1,
                                    "z-10 opacity-0": Math.abs(offset) > 1,
                                    "scale-[0.95] hidden sm:block": offset !== 0,
                                }
                            )}
                            style={{
                                transform: `translateX(${offset * 100}%) translateX(-50%)`
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                text={project.text}
                                img={project.img}
                                icons={project.icons}
                                url={project.url}
                            />
                        </div>
                    );
                })}

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 z-40 w-full max-w-[100%] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[850px] flex justify-between pointer-events-none">
                    <a href={'#cards'}>
                        <button
                            onClick={prev}
                            className="bg-white text-black rounded-full p-1 sm:p-2 shadow pointer-events-auto"
                        >
                            <ChevronLeft className="sm:size-10 size-6"/>
                        </button>
                    </a>
                    <a href={'#cards'}>
                        <button
                            onClick={next}
                            className="bg-white text-black rounded-full p-1 sm:p-2 shadow pointer-events-auto"
                        >
                            <ChevronRight className="sm:size-10 size-6"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};