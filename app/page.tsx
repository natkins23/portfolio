'use client'
import react, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'

import Contact from './components/Contact'
import Projects from './components/Projects'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}
