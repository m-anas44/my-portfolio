import Hero from './components/hero'
import Contact from './components/contact'
import Project from './components/projects'
import About from './components/about'
import Skills from './components/skills'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />  
    </div>
  )
}
