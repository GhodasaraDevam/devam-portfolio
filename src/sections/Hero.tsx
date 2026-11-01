
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { lazy, Suspense } from 'react'

const ThreeDOrb = lazy(() => import('../components/ThreeDOrb'))

export default function Hero() {
  return (
    <section className="hero section-container" id="home">

      {/* LEFT COLUMN — HERO CONTENT */}
      <div className="hero-copy">

        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="availability-dot" />
          SOFTWARE ENGINEER · INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Engineering ideas into
          <span className="gradient-text">
            {' '}digital experiences.
          </span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          I'm Devam, a Software Engineer passionate about building
          scalable web applications, intelligent systems, and
          meaningful digital experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#projects" className="button-primary">
            Explore Projects <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="button-secondary">
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <span className="social-divider" />

          <span>React · TypeScript · Node.js</span>
        </motion.div>

      </div>

      {/* RIGHT COLUMN — 3D ORB AND PORTRAIT */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="visual-glow" />

        <Suspense
          fallback={
            <div className="orb-loading">
              <div className="orb-loading-ring" />
            </div>
          }
        >
          <ThreeDOrb />
        </Suspense>

        <div className="portrait-frame">
          <div className="portrait-placeholder">DG</div>

          <img
            src="/images/profile.png"
            alt="Portrait of Devam Ghodasara"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />

          <div className="portrait-caption">
            <span>DEVAM GHODASARA</span>
            <span>SOFTWARE ENGINEER</span>
          </div>
        </div>

        <div className="floating-tag tag-top">
          <span className="tag-icon">✳</span>
          Full Stack Development
        </div>

        <div className="floating-tag tag-bottom">
          <span className="availability-dot" />
          Building something meaningful
        </div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-indicator">
        <ArrowDown size={15} />
        SCROLL TO EXPLORE
      </a>

    </section>
  )
}
