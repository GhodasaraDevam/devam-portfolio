import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'React Developer Intern',
    company: 'AMCODR',
    period: '2024',
    type: 'Internship',
    description: 'Developed and maintained React-based user interfaces, collaborated with the development team on feature implementation, participated in code reviews and agile development processes.',
  },
  {
    role: 'Computer Engineering Student',
    company: 'Charotar University of Science and Technology',
    period: '2022 - Present',
    type: 'Education',
    description: 'Studying core computer science concepts, building personal projects to apply theoretical knowledge, participating in coding competitions and hackathons. Maintaining strong academic performance (8.62 CGPA).',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="experience-number">03</span>
          <h2 className="experience-title">EXPERIENCE</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-period-box">
                <span className="timeline-year">{exp.period}</span>
              </div>
              <div className="timeline-content">
                <span className="timeline-type">{exp.type}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
