import React, { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Image from 'next/image'
import Html from '../../public/skills/html.png'
import Css from '../../public/skills/css.png'
import Javascript from '../../public/skills/javascript.png'
import Typscript from '../../public/skills/ts-logo-256.png'
import ReactImg from '../../public/skills/react.png'
import Tailwind from '../../public/skills/tailwind.png'
import Firebase from '../../public/skills/firebase.png'
import NextJS from '../../public/skills/nextjs.png'

export default function Skills() {
    return (
        <div id="skills" className="m-5">
            <div className="  ">
                <div className="">
                    <h3 className="text-5xl font-semibold  text-blue-600 ">
                        What I Can Do
                    </h3>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Html} width={64} height={64} alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Css} width={64} height={64} alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={Javascript}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={Typscript}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Typscript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={ReactImg}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={Tailwind}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={NextJS}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={Firebase}
                                width={64}
                                height={64}
                                alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
