'use client'
import React from 'react'
import react, { useState } from 'react'
import { useTheme } from 'next-themes'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import { AiFillGithub, AiFillLinkedin, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { Separator } from '../components/ui/separator'
import { Link } from 'react-scroll'

interface NavItem {
  label: string
  page: string
  offset: number
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    page: 'about',
    offset: -100,
  },
  {
    label: 'Skills',
    page: 'skills',
    offset: -150,
  },
  {
    label: 'Portfolio',
    page: 'portfolio',
    offset: -50,
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  const sideNavToggle = () => {
    setNavbar(!navbar)
  }

  return (
    <header className="fixed top-0 w-full h-16 shadow-lg  z-50  bg-indigo-100  ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link
          to={'home'}
          className=" "
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={sideNavToggle}>
          <h1 className="md:p-4 text-lg md:text-2xl font-bold cursor-pointer">
            &lt;Nathan Watkins/&gt;
          </h1>
        </Link>
        <div>
          <div>
            <div className="hidden lg:flex border-transparent items-center gap-5 xl:gap-10 pr-28">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.page}
                    className=" navItem hover:border-b-2"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}>
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <Link
          to={'contact'}
          className=" navItem hover:border-b-2 hidden lg:flex"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <button className="callToActionDark">Hired Me!</button>
        </Link>
        <div className="flex lg:hidden cursor-pointer items-center justify-center whitespace-nowrap gap-3 md:gap-4 pr-3">
          <div className="lg:hidden ">
            <Link
              to={'contact'}
              className=" flex navItem hover:border-l-2  p-5 font-semibold"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
              <button className="callToActionDark p-2 md:p-3 text-sm  md:text-xl">Hire Me!</button>
            </Link>
          </div>
          <div
            className="flex items-center justify-center bg-indigo-300 hover:bg-indigo-200 rounded-full text-navy-600 hover:text-navy-700 w-10 h-10 "
            onClick={sideNavToggle}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      {/*sidenav*/}
      <div
        className={navbar ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
        onClick={sideNavToggle}>
        <div
          className={
            navbar
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[55%] h-[100vh] bg-[#ecf0f3] ease-out duration-500'
              : 'fixed left-[-120%] h-[100vh] top-0 ease-in  duration-500'
          }
          onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-center items-center px-4 pt-6">
            <Link
              to={'home'}
              className=" "
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={sideNavToggle}>
              <h1 className="text-2xl sm:2xl font-bold cursor-pointer whitespace-nowrap text-navy-700">
                &lt;Nathan Watkins/&gt;
              </h1>
            </Link>
          </div>
          <Separator className="mt-7 mx-auto 10 w-[70%] bg-navy-600 " />
          <div className="  border-transparent items-center ">
            {NAV_ITEMS.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.page}
                  className=" flex navItem hover:border-l-2  p-5 font-semibold"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  onClick={sideNavToggle}
                  duration={500}>
                  {item.label}
                </Link>
              )
            })}
            <Link
              to={'contact'}
              className=" flex navItem hover:border-l-2  p-5 font-semibold"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={sideNavToggle}>
              <button className="callToActionDark">Hire Me!</button>
            </Link>
          </div>

          <div className={` space-y-5 pl-5 pt-10    `}>
            <p className="uppercase tracking-wide  text-xl sm:text-2xl font-bold  specialText ">
              Let&apos;s connect
            </p>
            <div className="flex items-center justify-between space-x-10 ">
              <div className="socialIcons hoverUp">
                <a href="https://github.com/natkins23" target="_blank" rel="noreferrer">
                  <AiFillGithub className=" text-sky-700" />
                </a>
              </div>
              <div className="socialIcons hoverUp">
                <a
                  href="https://www.linkedin.com/in/nathancwatkins/"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillLinkedin className=" text-sky-700" />
                </a>
              </div>

              <div className="socialIcons hoverUp">
                <a
                  href="https://docs.google.com/document/d/1nFtRmMs4p0AH695l_hgRAA5BBc1_e-y3L3M5gxyghog/edit#heading=h.rfgvkg2ifhfd"
                  target="_blank"
                  rel="noreferrer">
                  <BsFillPersonLinesFill className=" text-sky-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
