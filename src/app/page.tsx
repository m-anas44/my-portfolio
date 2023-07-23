import Hero from './components/hero'
import Contact from './components/contact'
import Project from './components/projects'
import About from './components/about'

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <About />
      <Contact />  
    </div>
  )
}
