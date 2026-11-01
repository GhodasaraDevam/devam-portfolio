
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Achievements />

        <Contact />
      </main>


      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              DEVAM<span>.</span>
            </a>
            <p>
              Building thoughtful digital experiences
              through code, creativity and curiosity.
            </p>
          </div>

          <div className="footer-socials">
            <span className="footer-label">CONNECT WITH ME</span>

            <div className="footer-links">
              <a
                href="https://github.com/GhodasaraDevam"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devam-ghodasara-86a676284"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>

              <a href="mailto:devamghodasara20@gmail.com">
                Email <span>↗</span>
              </a>
            </div>
          </div>

          <a className="back-to-top" href="#home">
            Back to top <span>↑</span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Devam Ghodasara. All rights reserved.
          </span>

          <span>Designed & built with passion.</span>
        </div>
      </footer>

    </>
  )
}

export default App
