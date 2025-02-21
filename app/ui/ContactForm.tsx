'use client';

import { useForm } from "react-hook-form";
import { spaceGrotest } from "@/app/ui/fonts";
import { Button } from "@/app/ui/Button";

type FormData = {
    fullName: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const submit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="mb-20 sm:mb-40 items-center">
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

                <Button variant="submit">Send</Button>
            </form>
        </div>
    );
};
