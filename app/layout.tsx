import type {Metadata} from "next";
import Link from "next/link";
import {Icon} from "./ui/SvgIcons";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Jakub Mazurek",
    description: "Hello, I am Jakub Mazurek. Creative frontend developer from Lublin, Poland, specializing in React and TypeScript.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body
            className={"w-full overflow-x-hidden flex flex-col items-center"}
        >
        <div className="hidden fixed bottom-[10px] right-[10px] z-10 sm:flex flex-col gap-4">
            <Link href="https://github.com/Dragon30312" passHref legacyBehavior>
                <a target="_blank">
                    <Icon name={"github"}/>
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jakub-mazurek-abb25834a/" passHref legacyBehavior>
                <a target="_blank">
                    <Icon name={"linkedin"}/>
                </a>
            </Link>
        </div>

        {children}
        </body>
        </html>
    );
}
