import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-fit pb-10">
            <div className="  ">
                <div className="">
                    <h3 className="text-5xl font-semibold ml-10 text-blue-600 ">
                        Be in Touch
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] m-auto px-2 w-full ">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full ">
                            <div>
                                <h2 className="py-2">Nathan Watkins</h2>
                                <p>Front-End Developer</p>
                                <div className="flex md:flex-col ">
                                    <div>
                                        <div className="contactInfo  animate-fade-right animate-delay-[1500ms]">
                                            🏄 Los Angeles, CA
                                        </div>
                                        <div className="contactInfo animate-fade-right animate-delay-[1700ms]">
                                            💼 Pursuing Full-Time
                                        </div>
                                        <div className="contactInfo animate-fade-right animate-delay-[1900ms]">
                                            🖥️ Remote Freelance
                                        </div>
                                        <div className="contactInfo animate-fade-right animate-delay-[2100ms]">
                                            🚚 Relocation Ready
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-between py-4">
                                    <a
                                        href="https://www.linkedin.com/in/clint-briley-50056920a/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/fireclint"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                    </a>

                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <Link href="/resume">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <p className="py-4">
                                Contact me and let&apos;s talk
                            </p>
                            <form
                                action="https://getform.io/f/07e71c09-cb3a-440c-8e68-64941ce02959"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows={6}
                                        name="message"
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    <ScrollLink
                        to="home"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </div>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Contact
