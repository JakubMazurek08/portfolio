import {Text} from "./ui/Text"
import {Button} from "./ui/Button"
import {TechStackDisplay} from "@/app/ui/TechStackDisplay";
import {AnimatedText} from "@/app/ui/AnimatedText";
import {ProjectCard} from "@/app/ui/ProjectCard";

export default function Home() {
    return (
        <main className="mx-[20px] sm:max-w-[820px]">
            <div className="w-full h-screen pt-[100px] sm:pt-[25vh]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-[30px]">
                    <div className="bg-darkGray rounded-[15px] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                    </div>
                    <div className="flex flex-col flex-1 sm:w-[75%]">
                        <Text>👋 Hello, I am</Text>
                        <Text variant="h1">Jakub Mazurek</Text>
                        <Text> Creative frontend developer from Lublin, Poland, specializing in <span
                            className="text-accent">React</span> and <span className="text-accent">TypeScript</span>.
                            Passionate about building sleek, interactive, and user-friendly digital experiences. </Text>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 sm:mt-8">
                            <Button>View My Work</Button>
                            <Button>Email Me</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-[10vh] sm:my-[20vh]">
                <div className="w-full sm:w-1/2">
                    <Text variant="header">About Me</Text>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-16 relative">
                    <div>
                        <div className="flex flex-col gap-4 my-8">
                            <Text>My journey into coding started when I was 12, experimenting with game development in
                                Unity. What began as a curiosity quickly turned into a passion, and over time, I found
                                myself drawn to the world of web development. </Text>
                            <Text>Now, as a frontend developer specializing in React and TypeScript, I focus on building
                                interactive, high-performance applications that deliver great user experiences.</Text>
                            <Text>By day, I write clean, efficient code and collaborate on exciting projects. By night,
                                I’m either working on personal builds, exploring new technologies, or hitting the gym to
                                clear my mind.</Text>
                            <Text>I’m always open to new opportunities, challenges, and connections—let’s build
                                something amazing together!</Text>
                        </div>
                    </div>
                    <TechStackDisplay/>
                </div>
            </div>

            <div className=" absolute w-screen left-0 flex-col items-center gap-[30px] hidden lg:flex overflow-hidden">
                <AnimatedText to='right'>I May Not Be The Best At Everything</AnimatedText>
                <AnimatedText to='left'><span className="text-accent">But I Love Learning New Things</span></AnimatedText>
                <AnimatedText to='right'>To Create Fun Stuff Like This</AnimatedText>
            </div>

            <div className="lg:mt-[600px]">
                <Text variant='header'>My Projects</Text>
                <ProjectCard title='Samson Wiki' text={'A web application designed to explore exercises for different muscle  groups, calculate calories, track and create workouts, and utilize tools like the  One Rep Max calculator. The project supports user login, enabling a  personalized experience.'} img='ryujin.png' icons={['react','typescript','tailwind','firebase']}/>
            </div>
        </main>
    );
}
