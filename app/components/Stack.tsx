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

export default function Stack() {
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
    <div id="skills" className="my-20 mx-5">
      <div className="  ">
        <div className="">
          <h3 className="text-6xl font-semibold  text-navy-700 pb-7 ">Stack</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8  w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 stackBg hover:stackBg-hover  ">
            <div className="m-auto w-72 ">
              <div className="flex justify-start items-center gap-3 w-full">
                <Image src={skill.src} width={64} height={64} alt="/" />
                <div className="text-4xl">{skill.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
