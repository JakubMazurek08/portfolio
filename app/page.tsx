import {Text} from "./ui/Text"
import {AnimatedText} from "@/app/ui/AnimatedText";
import {ProjectCard} from "@/app/ui/ProjectCard";
import {Hero} from "@/app/sections/Hero";
import {ContactForm} from "@/app/sections/ContactForm";
import {AboutMe} from "@/app/sections/AboutMe";


export default function Home() {
    return (
        <>
            <div className="w-full h-screen absolute -z-50 mainGradient"></div>
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

                <div id='projects' className="lg:mt-[60vh] pt-16 mb-[20vh]">
                    <Text variant='header'>My Projects</Text>
                    <ProjectCard title='Samson Wiki'
                                 text={'A web application designed to explore exercises for different muscle  groups,' +
                                     ' calculate calories, track and create workouts, and utilize tools like the  One Rep Max calculator.' +
                                     ' The project supports user login, enabling a  personalized experience.'}
                                 img='samson_wiki.png' icons={['react', 'typescript', 'tailwind', 'firebase']}
                                url='https://samsonwiki.netlify.app/'/>
                    <ProjectCard title='Ryujin'
                                 text='Ryujin is a stylish landing page for a website development company, inspired by the Japanese dragon.
                              It features sleek design, smooth animations, and dynamic effects, showcasing modern web aesthetics and interactivity.'
                                 img='ryujin.png' icons={['html', 'css', 'javascript']}
                    url='https://ryujin-eji0.onrender.com/'/>
                    <ProjectCard title='Szogun'
                                 text="Szogun is a sleek and modern landing page for a polypropylene bag supplier. Inspired by precision and reliability,
                              it combines clean design, smooth animations, and dynamic elements to reflect the company's strength and efficiency in the packaging industry."
                                 img="szogun.png"
                                 icons={['html', 'css', 'javascript']}
                    url='https://szogun.onrender.com/'/>
                </div>
                <Text variant='header'>Get In Touch</Text>
                <div
                    className="p-4 sm:p-8 my-4 sm:my-8 rounded-[5px] sm:rounded-[20px] bg-darkGray flex flex-col gap-2">
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
