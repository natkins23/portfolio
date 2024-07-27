import { Link } from 'react-scroll'

import React, { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20 gap-6">
        <div className="flex justify-center pt-12 ">
          <Link
            to={'home'}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <div className=" bg-inherit rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-100">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
        <div>Built with Next.js, Tailwind and Hosted on Vercel</div>
        <div className="flex flex-row py-10 gap-2">
          <span>Project Repo </span>
          <a href="https://github.com/natkins23/portfolio" target="_blank" rel="noreferrer">
            <AiFillGithub size={30} className=" text-sky-700" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
