import React, { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { BsArrowDownShort } from 'react-icons/bs'
import evolve from '../../public/evolve.png'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div id="about" className="flex flex-col justify-center m-10 pb-5">
            <div className="  ">
                <div className="">
                    <h3 className="text-5xl font-semibold  text-blue-600 ">
                        A little <span className="text-3xl"> about me</span>
                    </h3>
                </div>
            </div>
            <div>
                <div className="  ">
                    <div className="flex flex-col md:flex-row    items-center ">
                        <Image
                            src={evolve}
                            alt="code image"
                            width={600}
                            height={600}
                        />
                        <div className="m-10">
                            <h2 className="  p-5 text-4xl font-bold">
                                My Start
                            </h2>
                            <p className="p-4">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soon after
                                graduating UCSB in Political Science, I realized
                                my path was in technology and design. During
                                COVID, I completing an AA in CS in pursuit of a
                                Masters. Unexcited by manditory attendence in
                                courses not designed for online consumption, I
                                created a{' '}
                                <Link
                                    href="https://github.com/natkins23/Ez-Meet-"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-700 underline"
                                >
                                    chrome extension
                                </Link>{' '}
                                to log my attendence on zoom lectures. With the
                                confidence from developing my own application, I
                                pursued self study and never looked back!
                            </p>
                        </div>
                    </div>
                    <div className="m-10">
                        <h2 className="m-4 text-4xl font-bold">
                            An Intuitive, Emotional Experience
                        </h2>
                        <p className="p-4 ">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the
                            &quot;techie&quot; in the family, I have seen first
                            hand how difficult it is for many older people to
                            use newer technology. As such, my work is guided by
                            an intuitive first approach. On that note, as much
                            as Chat GPT and other AI remove needless interfaces,
                            I also believe that future of the web will be
                            delivering compelling emotional experiences not so
                            different from the mordern movie theater experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className=" flex items-center justify-end pr-20 animate-fade-left">
                <div className="relative flex w-20 h-40  ">
                    <div className="scroll-downs">
                    <div className=" mousey " onMouseEnter={toggleHovered}>
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 uppercase text-2xl ">
                        Skills
                    </div>
                </div>
            </div> */}
        </div>
    )
}
