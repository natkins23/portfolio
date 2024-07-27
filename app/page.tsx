'use client'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Stack from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className=" overflow-x-hidden overflow-y-hidden   ">
      <section className="min-h-screen">
        <HeroSection />
      </section>
      <section className="min-h-screen">
        <About />
      </section>
      <section className="min-h-screen">
        <Stack />
      </section>
      <section className="min-h-screen">
        <Portfolio />
      </section>
      <section className="min-h-screen">
        <Contact />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  )
}
