import Image from 'next/image'
import Hero from './components/hero'
import Contact from './components/contact'
import Project from './components/projects'

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <Contact />  
    </div>
  )
}
