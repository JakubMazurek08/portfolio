import {Text} from "./ui/Text"
import {TechStackDisplay} from "@/app/ui/TechStackDisplay";
import {AnimatedText} from "@/app/ui/AnimatedText";
import {ProjectCard} from "@/app/ui/ProjectCard";
import {Hero} from "@/app/ui/Hero";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen absolute -z-50 mainGradient"></div>
            <main className="mx-[20px] sm:max-w-[820px]">

                <Hero/>
                <div className="my-[10vh] sm:my-[20vh]">
                    <Text variant="header">About Me</Text>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-16 relative">
                        <div>
                            <div className="flex flex-col gap-4 my-8">
                                <Text>My journey into coding started when I was 12, experimenting with game development
                                    in
                                    Unity. What began as a curiosity quickly turned into a passion, and over time, I
                                    found
                                    myself drawn to the world of web development. </Text>
                                <Text>Now, as a frontend developer specializing in React and TypeScript, I focus on
                                    building
                                    interactive, high-performance applications that deliver great user
                                    experiences.</Text>
                                <Text>By day, I write clean, efficient code and collaborate on exciting projects. By
                                    night,
                                    I’m either working on personal builds, exploring new technologies, or hitting the
                                    gym to
                                    clear my mind.</Text>
                                <Text>I’m always open to new opportunities, challenges, and connections—let’s build
                                    something amazing together!</Text>
                            </div>
                        </div>
                        <TechStackDisplay/>
                    </div>
                </div>

                <div
                    className=" absolute w-screen left-0 flex-col items-center gap-[30px] hidden lg:flex overflow-hidden">
                    <AnimatedText to='right'>I May Not Be The Best At Everything</AnimatedText>
                    <AnimatedText to='left'><span
                        className="text-accent">But I Love Learning New Things</span></AnimatedText>
                    <AnimatedText to='right'>To Create Fun Stuff Like This</AnimatedText>
                </div>

                <div className="lg:mt-[600px]">
                    <Text variant='header'>My Projects</Text>
                    <ProjectCard title='Samson Wiki'
                                 text={'A web application designed to explore exercises for different muscle  groups,' +
                                     ' calculate calories, track and create workouts, and utilize tools like the  One Rep Max calculator.' +
                                     ' The project supports user login, enabling a  personalized experience.'}
                                 img='samson_wiki.png' icons={['react', 'typescript', 'tailwind', 'firebase']}/>
                    <ProjectCard title='Ryujin'
                                 text='Ryujin is a stylish landing page for a website development company, inspired by the Japanese dragon.
                              It features sleek design, smooth animations, and dynamic effects, showcasing modern web aesthetics and interactivity.'
                                 img='ryujin.png' icons={['html', 'css', 'javascript']}/>
                    <ProjectCard title='Szogun'
                                 text="Szogun is a sleek and modern landing page for a polypropylene bag supplier. Inspired by precision and reliability,
                              it combines clean design, smooth animations, and dynamic elements to reflect the company's strength and efficiency in the packaging industry."
                                 img="szogun.png"
                                 icons={['html', 'css', 'javascript']}/>
                </div>
            </main>
        </>
    );
}
