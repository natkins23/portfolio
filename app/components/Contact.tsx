import Link from 'next/link'

import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'app/components/ui/tooltip'
import { LuExternalLink } from 'react-icons/lu'

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false)

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

  return (
    <div id="details" className="w-full lg:h-fit pt-32 pb-10">
      <div className="fixed top-20 w-full pointer-events-none ">
        <div className="flex justify-center ">
          <div
            className={`bg-white  opacity-0 z-60 p-4 text-2xl rounded-xl  ${
              isCopied ? ' animate-fadeInOut' : ''
            }`}>
            ✔️ Email Copied!
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div className="md:p">
                <h2 className="py-2 font-bold text-center md:text-left text-4xl">Nathan Watkins</h2>
                <p className="text-3xl text-center md:text-left ">Front-End Developer</p>
                <div className="flex md:flex-col items-center justify-center md:items-start">
                  <div className=" w-42  md:text-left  py-6">
                    <div className="contactInfo  animate-fade-right animate-delay-[1500ms]">
                      🏄 Los Angeles, CA
                    </div>
                    <div className=" contactInfo animate-fade-right animate-delay-[1700ms]">
                      🚚 Relocation Ready
                    </div>
                    <div className="contactInfo animate-fade-right animate-delay-[1900ms]">
                      💼 Pursuing Full-Time
                    </div>
                    <div className="contactInfo animate-fade-right animate-delay-[2100ms]">
                      🖥️ Remote Freelance
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center m-auto py-14  w-[80%]  xl:w-[60%]  lg:w-[90%] gap-12  animate-fade animate-delay-[3000ms]">
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
            </div>
          </div>

          {/* right */}
          <div
            id="contact"
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <p className="py-4">Looking forward to working with you!</p>
              <form
                action="https://getform.io/f/07e71c09-cb3a-440c-8e68-64941ce02959"
                method="POST"
                encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="text-xl text-black border-2 rounded-lg p-3 flex border-navy-500 bg-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-600  "
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      className="text-xl text-black border-2 rounded-lg p-3 flex border-navy-500 bg-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-600 tracking-wide"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="text-xl text-black border-2 rounded-lg p-3 flex border-navy-500 bg-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-600 "
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="text-xl font-semibold border-2 rounded-lg p-3 flex border-navy-600 bg-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="text-xl text-black border-2 rounded-lg p-3 flex border-navy-500 bg-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-600  "
                    rows={6}
                    name="message"></textarea>
                </div>
                <div className="flex justify-center items-center  w-full p-4 ">
                  <button className="rounded-lg py-4 m-auto px-10 text-2xl bg-navy-600 text-gray-100  ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
