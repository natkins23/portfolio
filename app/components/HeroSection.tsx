import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

export default function HeroSection() {
    const [isCopied, setIsCopied] = useState(false)

    const copyEmailMessage = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 4000)
    }
    const copyEmail = () => {
        navigator.clipboard.writeText('nathancwatkins23@gmail.com')
        copyEmailMessage()
    }

    return (
        <section id="home" className=" h-[100vh] pt-32">
            <div className="flex flex-col md:flex-row-reverse items-center  animate-fade md:items-start lg:items-center justify-center gap-24    ">
                <div className="flex  ">
                    <div className="relative h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem]  lg:m-auto xl:h-[30rem] xl:w-[30rem]   ">
                        <Image
                            src="/portrait.jpg"
                            alt="headshot"
                            fill
                            className="rounded-full shadow-xl"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
                <div className="pt-10 ">
                    <div className=" ">
                        <h1 className="py-3 text-center animate-fade md:text-left m-auto ">
                            Hi, I&apos;m{' '}
                            <span className=" specialText   ">Nathan</span>
                        </h1>
                    </div>
                    <div className=" ">
                        <h2 className="py-3 text-center animate-fade-up animate-delay-1000 md:text-left m-auto">
                            Front End Developer
                        </h2>
                    </div>
                    <div className="flex flex-row ">
                        <div className="flex md:flex-col ">
                            <div className="contactInfo  animate-fade-right animate-delay-[1500ms]">
                                Code. Create. Innovate.
                            </div>
                        </div>
                        <div className="m-auto animate-fade-down animate-delay-[2000ms]">
                            <Link
                                to={`projects`}
                                className=" hover:border-b-2 "
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                <button className="text-4xl p-3 ">
                                    My Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-evenly m-auto py-10 flex-wrap w-[50%] lg:w-[80%] xl:w-[70%] animate-fade animate-delay-[3000ms] ">
                <div className="socialIcons hoverUp">
                    <a
                        href="https://github.com/natkins23"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub size={50} className=" text-blue-500" />
                    </a>
                </div>
                <div className="socialIcons hoverUp">
                    <a
                        href="https://www.linkedin.com/in/nathancwatkins/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin size={50} className=" text-blue-500" />
                    </a>
                </div>

                <div className="socialIcons hoverUp">
                    <a
                        href="https://docs.google.com/document/d/1nFtRmMs4p0AH695l_hgRAA5BBc1_e-y3L3M5gxyghog/edit#heading=h.rfgvkg2ifhfd"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsFillPersonLinesFill
                            size={50}
                            className=" text-blue-500"
                        />
                    </a>
                </div>
                <div className="socialIcons hoverUp" onClick={copyEmail}>
                    <AiOutlineMail size={50} className=" text-blue-500" />
                </div>
            </div>

            <div className="absolute bottom-40 w-full">
                <div className="flex justify-center">
                    <div
                        className={`bg-white opacity-0 p-4 text-2xl rounded-xl ${
                            isCopied && ` animate-fadeInOut `
                        }`}
                    >
                        ✔️ Email Copied!
                    </div>
                </div>
            </div>
            <div className="absolute bottom-20 w-full">
                <div className="flex justify-center items-start animate-fade  animate-delay-[5000ms]">
                    <div className="scroll-downs ">
                        <div className=" mousey ">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
