'use client'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Projects from './components/Projects'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <About />
            <Stack />
            <Projects />
            <Contact />
        </main>
    )
}
