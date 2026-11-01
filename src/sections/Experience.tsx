
import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react'

const responsibilities = [
  'Developed reusable and maintainable React components.',
  'Integrated REST APIs to connect frontend interfaces with backend services.',
  'Worked with Git and GitHub for version control and collaborative development.',
  'Debugged application issues and improved component reliability and performance.',
]

const technologies = [
  'React.js',
  'JavaScript',
  'REST APIs',
  'Git',
  'GitHub',
]

export default function Experience() {
  return (
    <section className="experience-section section-container" id="experience">
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">04 / EXPERIENCE</span>

        <div className="experience-heading-row">
          <div>
            <h2>Where I've contributed.</h2>
            <p>
              Learning through collaboration, practical engineering
              and building software for real-world use.
            </p>
          </div>

          <span className="experience-count">01 EXPERIENCE</span>
        </div>
      </motion.div>

      <motion.article
        className="experience-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="experience-card-top">
          <div className="experience-company-icon">
            <BriefcaseBusiness size={23} strokeWidth={1.5} />
          </div>

          <div className="experience-period">
            <CalendarDays size={14} />
            MAY 2024 — JULY 2024
          </div>
        </div>

        <div className="experience-main">
          <div className="experience-role">
            <div>
              <span className="experience-type">INTERNSHIP · SOFTWARE DEVELOPMENT</span>
              <h3>React Developer Intern</h3>
              <h4>AMCODR</h4>
            </div>

            <span className="experience-duration">3 MONTHS</span>
          </div>

          <p className="experience-summary">
            Worked on frontend development with React, focusing on
            reusable components, API integration, debugging and
            collaborative software development.
          </p>

          <div className="experience-divider" />

          <span className="experience-subheading">
            KEY CONTRIBUTIONS
          </span>

          <div className="experience-responsibilities">
            {responsibilities.map((item, index) => (
              <div className="experience-responsibility" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>

          <div className="experience-tech">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div className="experience-card-footer">
          <span>PROFESSIONAL EXPERIENCE</span>
          <span className="experience-status">
            <i />
            COMPLETED
          </span>
        </div>
      </motion.article>
    </section>
  )
}
