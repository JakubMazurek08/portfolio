import type { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={"w-full flex flex-col items-center"}
      >
      <div className="hidden fixed bottom-[10px] right-[10px] z-10 sm:flex flex-col gap-4">
          <Link href="https://github.com">
              <Icon name={"github"}/>
          </Link>
          <Link href="https://linkedin.com">
              <Icon name={"linkedin"}/>
          </Link>
      </div>

      {children}
      </body>
    </html>
  );
}
