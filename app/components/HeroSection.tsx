import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function HeroSection() {
  const [isCopied, setIsCopied] = useState(false)
  const [opacity, setOpacity] = useState(1)

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 100 // Adjust this value to make opacity change with slight scrolling
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll)

      console.log('Scroll Y:', scrollY)
      console.log('New Opacity:', newOpacity)

      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="h-[100vh] pt-32">
      <div className="flex flex-col md:flex-row-reverse items-center animate-fade md:items-start lg:items-center justify-center gap-24">
        <div className="flex">
          <div className="relative h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem] lg:m-auto xl:h-[30rem] xl:w-[30rem]">
            <Image
              src="/portrait.jpg"
              alt="headshot"
              fill
              className="rounded-full shadow-xl"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className="pt-10">
          <div>
            <h1 className="py-3 text-center animate-fade md:text-left m-auto">
              Hi, I&apos;m <span className="specialText">Nathan</span>
            </h1>
          </div>
          <div>
            <h2 className="py-3 text-center animate-fade-up animate-delay-1000 md:text-left m-auto">
              Front End Developer
            </h2>
          </div>
          <div className="flex md:flex-col">
            <div className="contactInfo animate-fade-right animate-delay-[1500ms]">
              Code. Create. Innovate.
            </div>
            <div className="flex flex-row  py-5">
              <div className=" animate-fade-down animate-delay-[2000ms]">
                <Link
                  to={`projects`}
                  className="hover:border-b-2"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  <button className="text-4xl p-3 font-bold callToAction">My Projects</button>
                </Link>
              </div>
              <div className=" animate-fade-down animate-delay-[2000ms] pl-20">
                <Link
                  to={`projects`}
                  className="hover:border-b-2"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  <button className="text-4xl p-3 font-bold callToActionSwap">Hire Me!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly m-auto py-14 flex-wrap w-[50%] lg:w-[80%] xl:w-[70%] animate-fade animate-delay-[3000ms]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIcons hoverUp">
                <a href="https://github.com/natkins23" target="_blank" rel="noreferrer">
                  <AiFillGithub size={50} />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="tooltip ">
              <div>Github</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIcons hoverUp">
                <a
                  href="https://www.linkedin.com/in/nathancwatkins/"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillLinkedin size={50} />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="tooltip ">
              <div>LinkedIn</div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className="socialIcons hoverUp pointer ">
                <a
                  href="https://docs.google.com/document/d/1nFtRmMs4p0AH695l_hgRAA5BBc1_e-y3L3M5gxyghog/edit#heading=h.rfgvkg2ifhfd"
                  target="_blank"
                  rel="noreferrer">
                  <BsFillPersonLinesFill size={50} />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="tooltip ">
              <div>Resume</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIcons hoverUp" onClick={copyEmail}>
                <AiOutlineMail size={50} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="tooltip ">
              <div>Copy Email</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="absolute top-28 w-full">
        <div className="flex justify-center">
          <div
            className={`bg-white opacity-0 p-4 text-2xl rounded-xl ${
              isCopied ? 'animate-fadeInOut' : ''
            }`}>
            ✔️ Email Copied!
          </div>
        </div>
      </div>

      <div className="justify-center]" style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
        <div className="flex animate-fade animate-delay-[5000ms]">
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
