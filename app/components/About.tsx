import React, { useEffect, useState, useRef } from 'react'
import evolve from '../../public/evolve.png'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div id="aboutContainer" className="flex flex-col justify-center m-10 pb-5">
      <div className="about">
        <div className="">
          <h2 className="  p-2 text-4xl font-bold">My Start</h2>
        </div>
      </div>
      <div>
        <div className="  ">
          <div className="flex flex-col md:flex-row  items-center ">
            <Image src={evolve} alt="code image" width={600} height={600} />
            <div className="m-4">
              <p className="p-4 leading-loose">
                After graduating UCSB in Political Science, I discovered my passion for technology
                and design. During COVID, I completed an AA in Computer Science, but found mandatory
                courses unsuitable for online learning. To address this, I developed a{' '}
                <Link
                  href="https://github.com/natkins23/Ez-Meet-"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline">
                  Chrome extension
                </Link>{' '}
                to attend my meetings automatically. This experience boosted my confidence and set
                me on a path of self-study in tech.
              </p>
            </div>
          </div>
          <h2 className="m-4 text-4xl font-bold">An Intuitive, Emotional Experience</h2>
          <div className="m-10">
            <p className="p-4 leading-loose ">
              As the &quot;techie&quot; in the family, I&apos;ve witnessed how new technology can be
              a challenge older users. This drives my focus on intuitive design. I balance this with
              an ideal for a web that prioritizes retention through delivering a compeling
              experience over bland pragmatisim.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
