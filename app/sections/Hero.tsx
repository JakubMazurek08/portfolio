'use client';

import {Text} from "@/app/ui/Text";
import {Button} from "@/app/ui/Button";
import {gsap} from "gsap"
import {useEffect} from "react";
import {TextPlugin} from "gsap/TextPlugin"
import {spaceGrotestBold} from "@/app/ui/fonts";
import Image from "next/image";

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
            <div className="w-full sm:min-h-screen pt-[50px] sm:pt-[25vh]">
                <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                    <Image className="main bg-darkGray rounded-[15px] h-[300px] sm:size-[300px] object-cover grayscale-[50%] " width={1000} height={1000} src={`/photo.png`} alt="My Photo" />
                    <div className="flex flex-col flex-1 sm:w-[75%]">
                        <div className="main"><Text>👋 Hello, I am</Text></div>
                        <div className={`${spaceGrotestBold.className} mainText text-[32px]/[55px] sm:text-[48px] text-white`}>Jakub Mazurek</div>
                        <div className="main"><Text> Creative frontend developer from Lublin, Poland, specializing in <span
                            className="text-accent">React</span> and <span className="text-accent">TypeScript</span>.
                            Passionate about building sleek, interactive, and user-friendly digital experiences. </Text></div>
                        <div className="main flex flex-wrap justify-center sm:justify-start gap-4 mt-4 sm:mt-8">
                            <a href={'#projects'}><Button>View My Work</Button></a>
                            <a href={'#contact'}><Button>Contact Me</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}