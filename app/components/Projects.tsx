import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../../public/projects/property.jpg'
import cryptoImg from '../../public/projects/crypto.jpg'
import netflixImg from '../../public/projects/netflix.jpg'
import twitchImg from '../../public/projects/twitch.jpg'

export default function Projects() {
    return (
        <div id="projects" className="">
            <div className="m-5">
                <div className="">
                    <h3 className="text-5xl font-semibold  text-blue-600 ">
                        My Projects
                    </h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 m-20">
                <ProjectItem
                    title="Property Finder"
                    backgroundImg={propertyImg}
                    projectUrl="/property"
                    tech="Next JS"
                />
                <ProjectItem
                    title="Crypto App"
                    backgroundImg={cryptoImg}
                    projectUrl="/crypto"
                    tech="Next JS"
                />
                <ProjectItem
                    title="Netflix App"
                    backgroundImg={netflixImg}
                    projectUrl="/netflix"
                    tech="Next JS"
                />
                <ProjectItem
                    title="Twitch UI"
                    backgroundImg={twitchImg}
                    projectUrl="/twitch"
                    tech="Next JS"
                />
            </div>
        </div>
    )
}
