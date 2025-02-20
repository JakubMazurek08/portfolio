'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Text } from "@/app/ui/Text";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
    children: React.ReactNode;
    to: 'left' | 'right';
}

export const AnimatedText = ({ children, to }: AnimatedTextProps) => {
    const textRef = useRef<HTMLDivElement>(null); // Create a ref

    useEffect(() => {
        if (!textRef.current) return;

        gsap.from(
            textRef.current,
            {
                x: to === 'left' ? '50vw' : '-50vw',
                opacity: 0,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                    end: 'top 30%',
                    scrub: true,
                }
            }
        );
    }, [to]);

    return (
        <div ref={textRef}>
            <Text variant='h1'>{children}</Text>
        </div>
    );
};
