import {Text} from "./ui/Text"
import {AnimatedText} from "@/app/ui/AnimatedText";
import {Hero} from "@/app/sections/Hero";
import {ContactForm} from "@/app/sections/ContactForm";
import {AboutMe} from "@/app/sections/AboutMe";
import {Projects} from "@/app/sections/Projects";
import {InProgress} from "@/app/sections/InProgress";


export default function Home() {
    return (
        <>
            <div className="w-full h-screen hidden sm:block absolute -z-50 mainGradient"></div>
            <main className="mx-[20px] sm:max-w-[820px]">
                <Hero/>
                <AboutMe/>
                <div
                    className=" absolute w-screen left-0 flex-col items-center gap-[30px] hidden lg:flex overflow-hidden">
                    <AnimatedText to='right'>I May Not Be The Best At Everything</AnimatedText>
                    <AnimatedText to='left'><span
                        className="text-accent">But I Love Learning New Things</span></AnimatedText>
                    <AnimatedText to='right'>To Create Fun Stuff Like This</AnimatedText>
                </div>

                <Projects/>
                <InProgress/>
                <Text variant='header'>Get In Touch</Text>
                <div
                    className="sm:p-8 my-4 sm:my-8  flex flex-col gap-2">
                    <Text>Mail me at</Text>
                    <Text variant='special3'>jakubmazurek08@gmail.com</Text>
                    <Text>Feel free to contact me with any inquires or questions!</Text>
                </div>
                <ContactForm/>

                <footer className="w-full pl-10 py-4 border border-t-gray">
                    <Text>© 2025 Mazurek. All rights reserved.</Text>
                </footer>
            </main>
        </>
    );
}
