import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Html from '../../public/skills/html.png'
import Css from '../../public/skills/css.png'
import Javascript from '../../public/skills/javascript.png'
import TypeScript from '../../public/skills/ts-logo-256.png'
import ReactImg from '../../public/skills/react.png'
import Tailwind from '../../public/skills/tailwind.png'
import Firebase from '../../public/skills/firebase.png'
import NextJS from '../../public/skills/nextjs.png'

export default function Skills() {
  const skills = [
    { src: Html, name: 'HTML' },
    { src: Css, name: 'CSS' },
    { src: Javascript, name: 'JavaScript' },
    { src: TypeScript, name: 'TypeScript' },
    { src: ReactImg, name: 'React' },
    { src: Tailwind, name: 'Tailwind' },
    { src: NextJS, name: 'Next.js' },
    { src: Firebase, name: 'Firebase' },
  ]
  return (
    <div id="skills" className="flex flex-col  w-full items-center  justify-center pt-20">
      <div className=" lg:w-[70%] xl:w-[50%] ">
        <h3 className=" sectionHeader  pb-10 ">Skills</h3>
      </div>
      <div className="grid grid-cols-2 gap-10  lg:w-[70%] xl:w-[50%] ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 stackBg hover:stackBg ">
            <div className="m-auto  sm:w-52 lg:w-72 xl:w-44 ">
              <div className="flex justify-start items-center gap-2 w-full">
                <Image src={skill.src} width={45} height={45} alt="/" />
                <div className="text-lg md:text-3xl  font-bold">{skill.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
