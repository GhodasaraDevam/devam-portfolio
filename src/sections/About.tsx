
import { motion } from 'framer-motion'

const highlights = [
  {
    number: '8.62',
    label: 'CGPA',
    detail: 'Computer Engineering',
  },
  {
    number: '300+',
    label: 'Problems solved',
    detail: 'DSA practice',
  },
  {
    number: '3',
    label: 'Featured projects',
    detail: 'Full-stack development',
  },
]

const focusAreas = [
  'Frontend Engineering',
  'Backend Development',
  'Database Design',
  'AI-powered Applications',
]

export default function About() {
  return (
    <section className="about-section section-container" id="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">01 / ABOUT ME</span>
        <h2>
          Curious by nature.
          <span> Engineer by passion.</span>
        </h2>
      </motion.div>

      <div className="about-layout">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-kicker">A LITTLE INTRODUCTION</span>

          <p className="about-lead">
            I'm Devam Ghodasara, a Computer Engineering student
            who enjoys turning complex ideas into practical,
            well-crafted software.
          </p>

          <p className="about-description">
            My work revolves around full-stack development,
            building applications with React, TypeScript,
            Node.js and modern databases. I enjoy understanding
            how systems work behind the interface, from designing
            APIs and data models to creating intuitive user
            experiences.
          </p>

          <p className="about-description">
            Through personal projects and my experience as a
            React Developer Intern at AMCODR, I've developed
            an interest in writing maintainable code, solving
            engineering problems and continuously learning
            new technologies.
          </p>

          <div className="about-focus">
            <span className="about-kicker">WHAT I ENJOY BUILDING</span>

            <div className="focus-list">
              {focusAreas.map((area, index) => (
                <span className="focus-item" key={area}>
                  <span className="focus-number">
                    0{index + 1}
                  </span>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="highlights-heading">
            <span className="about-kicker">A FEW HIGHLIGHTS</span>
            <span className="highlights-line" />
          </div>

          {highlights.map((item, index) => (
            <div className="highlight-item" key={item.label}>
              <span className="highlight-index">
                0{index + 1}
              </span>

              <div className="highlight-content">
                <span className="highlight-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>

              <span className="highlight-arrow">↗</span>
            </div>
          ))}

          <div className="about-note">
            <span className="note-symbol">✳</span>
            <p>
              Always exploring. Always building.
              Always getting better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
