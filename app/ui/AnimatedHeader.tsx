'use client'

import { spaceGrotestBold } from "@/app/ui/fonts";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export const AnimatedHeader = ({ children }: { children: React.ReactNode }) => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headerRef.current || !borderRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current, // The animation will be triggered when this element is in view
                start: "top 80%", // Animation starts when the element enters 80% of the viewport
                toggleActions: "play none none none", // Play once when in view
            },
        });

        tl.from(headerRef.current, {
            duration: 1,
            text: "",
            ease: "none",
        });

        tl.from(borderRef.current, {
            duration: 1,
            width: 0,
        });

        return () => {
            ScrollTrigger.refresh(); // Refresh to handle dynamic content changes
        };
    }, []);

    return (
        <div className="sm:w-1/2 h-[50px] sm:h-[75px]">
            <h1
                ref={headerRef}
                className={`${spaceGrotestBold.className} text-[32px] sm:text-[48px] text-white`}
            >
                {children}
            </h1>
            <div
                ref={borderRef}
                className="border-b-[2px] sm:border-b-[3px] border-accent"
            />
        </div>
    );
};
