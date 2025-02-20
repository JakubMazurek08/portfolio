'use client'

import {Text} from "@/app/ui/Text";
import {Button} from "@/app/ui/Button";
import {gsap} from "gsap"
import {Bounce} from "gsap/gsap-core";
import {useEffect} from "react";
import {TextPlugin} from "gsap/TextPlugin"
import {spaceGrotestBold} from "@/app/ui/fonts";

gsap.registerPlugin(TextPlugin);

export const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.from('.mainText',{
            duration: 1.5,
            text: "",
            ease: "none",
        })

        tl.from('.main',{
            duration: 3,
            opacity: 0,
        })


    }, []);
    return (
        <>
            <div className="w-full h-screen pt-[100px] sm:pt-[25vh]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-[30px]">
                    <div className="main bg-darkGray rounded-[15px] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"/>
                    <div className="flex flex-col flex-1 sm:w-[75%]">
                        <div className="main"><Text>👋 Hello, I am</Text></div>
                        <div className={`${spaceGrotestBold.className} mainText text-[32px]/[55px] sm:text-[48px] text-white`}>Jakub Mazurek</div>
                        <div className="main"><Text> Creative frontend developer from Lublin, Poland, specializing in <span
                            className="text-accent">React</span> and <span className="text-accent">TypeScript</span>.
                            Passionate about building sleek, interactive, and user-friendly digital experiences. </Text></div>
                        <div className="main flex flex-wrap justify-center sm:justify-start gap-4 mt-4 sm:mt-8">
                            <Button>View My Work</Button>
                            <Button>Email Me</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}