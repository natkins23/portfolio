import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../../public/projects/property.jpg'
import cryptoImg from '../../public/projects/crypto.jpg'
import netflixImg from '../../public/projects/netflix.jpg'
import twitchImg from '../../public/projects/twitch.jpg'

export default function Projects() {
  return (
    <div id="projects" className="my-20">
      <div className="m-5">
        <div className="">
          <h3 className="text-5xl font-bold  text-navy-700 ">My Projects</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 w-[55%] m-auto">
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
