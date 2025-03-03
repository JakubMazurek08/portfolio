"use client";

import { useForm } from "react-hook-form";
import { spaceGrotest } from "@/app/ui/fonts";
import { Button } from "@/app/ui/Button";
import { sendMail } from "@/lib/mail";
import {Text} from "@/app/ui/Text";
import {useEffect, useState} from "react";
import {gsap} from "gsap";

type FormData = {
    fullName: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        if (emailSent) {
            gsap.from(".animatedText", {
                duration: 1.5,
                text: "",
                ease: "none",
            });
        }
    }, [emailSent]);

    const submit = async (data: FormData) => {
        const result = await sendMail({
            to: "jakubmazurek08@gmail.com",
            name: data.fullName,
            subject: "Contact Form Submission",
            body: `<h1>${data.fullName} (${data.email})</h1><p>${data.message}</p>`,
        });

        if (result.success) {
            setEmailSent(true);
            reset();
        } else {
            alert(`Error: ${result.error}`);
        }
    };

    return (
        <div id="contact" className="mb-20 sm:mb-40 items-center">
            <form className="w-full mt-20" onSubmit={handleSubmit(submit)}>
                <div className="flex flex-col sm:flex-row gap-8 mb-10">
                    <input
                        {...register("fullName", { required: true })}
                        placeholder="Full name*"
                        type="text"
                        className={`${spaceGrotest.className} border-b-2 px-2 py-1 w-full border-accent bg-background text-white text-[20px] focus:outline-none`}
                    />

                    <input
                        {...register("email", { required: true })}
                        placeholder="Email address*"
                        type="email"
                        className={`${spaceGrotest.className} border-b-2 px-2 py-1 w-full border-accent bg-background text-white text-[20px] focus:outline-none`}
                    />
                </div>
                <textarea
                    {...register("message")}
                    className={`mt-4 mb-8 sm:mb-16 bg-darkGray text-lightGray w-full h-40 rounded-[10px] p-4 focus:outline-none max-h-80 min-h-40 ${spaceGrotest.className}`}
                    placeholder="Write your message here..."
                />
                <div className='flex gap-10 items-end'>
                    <Button variant="submit">Send</Button>
                    {emailSent && (
                        <Text>
                            <span className="text-accent animatedText">Email has been sent, Thank You!</span>
                        </Text>
                    )}
                </div>
            </form>
        </div>
    );
};
