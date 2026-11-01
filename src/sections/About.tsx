import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-number">01</span>
          <h2 className="about-title">ABOUT</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-lead">
              I'm a <span className="highlight">Computer Engineering student</span> with a passion for building
              exceptional digital experiences through clean code and thoughtful design.
            </p>
            <p className="about-text">
              My journey in software engineering has taken me from learning the fundamentals
              of programming to building full-stack applications with React, TypeScript,
              Node.js, and modern databases. I believe in writing maintainable code,
              solving real problems, and continuously learning new technologies.
            </p>
            <p className="about-text">
              During my internship as a React Developer at AMCODR, I gained hands-on
              experience with industry best practices and collaborative development.
              Currently, I'm focused on expanding my expertise in software architecture,
              database design, and creating scalable applications.
            </p>
          </motion.div>

          <motion.div
            className="about-sidebar"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stat-box">
              <span className="stat-number">8.62</span>
              <span className="stat-label">CGPA</span>
              <span className="stat-detail">Computer Engineering</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">300+</span>
              <span className="stat-label">Problems</span>
              <span className="stat-detail">DSA Practice</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects</span>
              <span className="stat-detail">Full-Stack Apps</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="quote-text">
            "Writing code is easy. Writing <span className="quote-accent">clean, maintainable code</span> that scales is an art."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
