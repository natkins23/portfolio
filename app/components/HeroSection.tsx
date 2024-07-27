import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'app/components/ui/tooltip'
import { LuExternalLink } from 'react-icons/lu'
import { Link } from 'react-scroll'

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
    <section id="home" className="pt-20 md:pt-40 w-full">
      <div className="flex flex-col md:flex-row-reverse items-center animate-fade md:items-start justify-center gap-5 md:gap-24 mt-10">
        <div className="flex ">
          <div className="relative h-[20rem] w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[25rem] lg:w-[25rem] ">
            <Image
              src="/portrait.jpg"
              alt="headshot"
              fill
              className="rounded-full shadow-xl"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className="heroText text-center text-6xl md:text-left md:pt-32 animate-fade ">
              Hi, I&apos;m Nathan
            </h1>
          </div>
          <div>
            <h3 className="py-3 text-center lg:text-left animate-fade-up animate-delay-1000 text-3xl md:text-left m-auto">
              Front End Developer
            </h3>
            <div className="contactInfo animate-fade-right text-center p-0 md:text-left md:text-2xl animate-delay-[1500ms]">
              Code. Create. Innovate.
            </div>
          </div>

          <div className="flex md:flex-col">
            <div className="flex flex-row pt-5 gap-5 w-full items-center justify-center">
              <div className="animate-fade-down animate-delay-[2000ms]">
                <Link
                  to={`portfolio`}
                  className="hover:border-b-2"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <button className="text-2xl md:text-3xl lg:text-4xl p-3 font-bold callToAction ">
                    Portfolio
                  </button>
                </Link>
              </div>
              <div className="animate-fade-down animate-delay-[2000ms] md:pl-5">
                <Link
                  to={`contact`}
                  className="hover:border-b-2"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  <button className="text-2xl md:text-3xl lg:text-4xl p-3 font-bold callToActionSwap  whitespace-nowrap">
                    Reach Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between m-auto py-12 md:py-14 w-[80%] xl:w-[50%] lg:w-[70%] animate-fade animate-delay-[3000ms]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIconContainer hoverUp">
                <a href="https://github.com/natkins23" target="_blank" rel="noreferrer">
                  <AiFillGithub className="iconSize" />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-700 text-white text-sm rounded py-1 px-2 border-none -translate-y-3">
              <div className="flex gap-1 items-center justify-center">
                Github
                <LuExternalLink />
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIconContainer hoverUp">
                <a
                  href="https://www.linkedin.com/in/nathancwatkins/"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillLinkedin className="iconSize" />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-700 text-white text-sm rounded py-1 px-2 border-none -translate-y-3">
              <div className="flex gap-1 items-center justify-center ">
                <div>LinkedIn</div>
                <LuExternalLink />
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIconContainer hoverUp pointer">
                <a
                  href="https://drive.google.com/file/d/16FFjyX8zjzu-D8XQbqeQK6PFpXCm6t_s/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  <BsFillPersonLinesFill className="iconSize" />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-700 text-white text-sm rounded py-1 px-2 border-none -translate-y-3">
              <div>Resume PDF</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="socialIconContainer hoverUp" onClick={copyEmail}>
                <AiOutlineMail className="iconSize" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-700 text-white text-sm rounded py-1 px-2 border-none -translate-y-3">
              <div>Copy Email</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="fixed top-20 w-full pointer-events-none ">
        <div className="flex justify-center ">
          <div
            className={`bg-white  opacity-0 p-4 text-2xl rounded-xl  ${
              isCopied ? ' animate-fadeInOut' : ''
            }`}>
            ✔️ Email Copied!
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center"
        style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
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
