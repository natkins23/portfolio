'use client'
import React from 'react'
import react, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import { AiFillGithub, AiFillLinkedin, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Skills',
    page: 'skills',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <header className="fixed w-full h-20 shadow-lg  z-50  bg-indigo-100">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="p-4  text-3xl font-bold cursor-pointer ">&lt;NathanWatkins/&gt;</h1>
        <div className="hidden md:flex border-transparent items-center">
          {NAV_ITEMS.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.page}
                className="navItem hover:border-b-2"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                {item.label}
              </Link>
            )
          })}
          <Link
            to={'contact'}
            className="navItem hover:border-b-2"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <button className="callToActionDark">Hire Me!</button>
          </Link>
        </div>
        <div className="flex md:hidden">
          <GiHamburgerMenu size={25} onClick={handleNavbar} />
        </div>
      </div>
      <div
        className={navbar ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
        onClick={handleNavbar}>
        <div
          className={
            navbar
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[200vh] bg-[#ecf0f3] p-10 east-out duration-500'
              : 'fixed left-[-100%] h-200vh top-0 p-10 east-in  duration-500'
          }
          onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-end items-center py-3">
            <div
              className="flex md:hidden justify-center cursor-pointer  hover:bg-indigo-200   rounded-full items-center shadow-lg w-10 h-10 "
              onClick={handleNavbar}>
              <AiOutlineClose size={25} className="text-navy-700 " />
            </div>
          </div>
          <div className="flex justify-center items-center py-3">
            <div>
              <h2 className="p-4 text-3xl sm:2xl font-bold cursor-pointer  text-navy-700">
                &lt;Nathan Watkins/&gt;
              </h2>
            </div>
          </div>

          <div className={`flex justify-center`}>
            <div className=" border-t-2 border-indigo-300 w-[75%]"></div>
          </div>

          <div className="  border-transparent items-center ">
            {NAV_ITEMS.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.page}
                  className="flex navItem hover:border-l-2  p-5 font-semibold"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNavbar}>
                  {item.label}
                </Link>
              )
            })}
            <Link
              to={'contact'}
              className="flex navItem hover:border-l-2  p-5 font-semibold"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              <button className="callToActionDark" onClick={handleNavbar}>
                Hire Me!
              </button>
            </Link>
          </div>

          <div className={` space-y-5 pl-5 pt-10    `}>
            <p className="uppercase tracking-wide  text-xl sm:text-2xl font-bold  specialText ">
              Let&apos;s connect
            </p>
            <div className="flex items-center justify-between space-x-10 ">
              <div className="socialIcons hoverUp">
                <a href="https://github.com/natkins23" target="_blank" rel="noreferrer">
                  <AiFillGithub size={50} className=" text-sky-700" />
                </a>
              </div>
              <div className="socialIcons hoverUp">
                <a
                  href="https://www.linkedin.com/in/nathancwatkins/"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillLinkedin size={50} className=" text-sky-700" />
                </a>
              </div>

              <div className="socialIcons hoverUp">
                <a
                  href="https://docs.google.com/document/d/1nFtRmMs4p0AH695l_hgRAA5BBc1_e-y3L3M5gxyghog/edit#heading=h.rfgvkg2ifhfd"
                  target="_blank"
                  rel="noreferrer">
                  <BsFillPersonLinesFill size={50} className=" text-sky-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
