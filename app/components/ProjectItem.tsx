import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImageData } from 'next/image'
import { subtle } from 'crypto'

interface ProjectItemProps {
  title: string
  backgroundImg: StaticImageData
  subTitle: string
  projectUrl: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  subTitle,
  backgroundImg,
  projectUrl,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <h3 className="text-4xl  font-bold text-white text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center ">{subTitle}</p>
        <Link className="hidden group-hover:flex  justify-center items-center" href={projectUrl}>
          <p className=" text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer w-[30%]">
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
