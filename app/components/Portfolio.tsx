import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../../public/projects/property.jpg'
import cryptoImg from '../../public/projects/crypto.jpg'
import netflixImg from '../../public/projects/netflix.jpg'
import twitchImg from '../../public/projects/twitch.jpg'

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col pt-10 w-full items-center ">
      <div className="w-[80%] md:w-[80%] lg:w-[70%] xl:w-[60%]  2xl:w-[50%]">
        <h3 className="sectionHeader pb-10   ">Portfolio </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 w-[80%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] m-auto">
        <ProjectItem
          title="Online Store"
          subTitle="E-Commerce"
          backgroundImg={propertyImg}
          projectUrl="/ecommerce"
        />
        <ProjectItem
          title="Web Consulting"
          subTitle="Freelancing Services"
          backgroundImg={cryptoImg}
          projectUrl="/crypto"
        />
        <ProjectItem
          title="NetTrailers"
          subTitle="Netflix Clone"
          backgroundImg={netflixImg}
          projectUrl="/netflix"
        />
        <ProjectItem
          title="Quizmatic"
          subTitle="AI Generated Quizzes"
          backgroundImg={twitchImg}
          projectUrl="/twitch"
        />
      </div>
    </div>
  )
}
