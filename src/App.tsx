import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
