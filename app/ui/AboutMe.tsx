import {Text} from "@/app/ui/Text";
import {TechStackDisplay} from "@/app/ui/TechStackDisplay";

export const AboutMe = () => {
    return <div className="my-[10vh] sm:my-[20vh]">
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
    </div>;
}
