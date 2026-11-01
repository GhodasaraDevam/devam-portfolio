
import { motion } from 'framer-motion'
import {
  Code2,
  Monitor,
  Server,
  Database,
  GitBranch,
  Wrench,
  Layers,
  Cpu,
} from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive and engaging user interfaces.',
    icon: Monitor,
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Developing APIs and application-side logic.',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'API Integration',
    ],
  },
  {
    number: '03',
    title: 'Databases',
    description: 'Working with structured and document-based data.',
    icon: Database,
    skills: [
      'MongoDB',
      'MySQL',
      'Mongoose',
    ],
  },
  {
    number: '04',
    title: 'Tools & Core Concepts',
    description: 'The tools and fundamentals behind reliable software.',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
    ],
  },
]

const principles = [
  { icon: Code2, label: 'Clean code' },
  { icon: Layers, label: 'Component-driven UI' },
  { icon: GitBranch, label: 'Version control' },
  { icon: Cpu, label: 'Problem solving' },
]

export default function Skills() {
  return (
    <section className="skills-section section-container" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">02 / TECHNOLOGY</span>

        <div className="skills-title-row">
          <div>
            <h2>My technical toolkit.</h2>
            <p>
              Technologies and tools I use to turn ideas
              into working software.
            </p>
          </div>

          <span className="skills-side-note">
            LEARN · BUILD · IMPROVE
          </span>
        </div>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon

          return (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <h3>{group.title}</h3>
              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-bottom">
                <span>TECH STACK</span>
                <span className="skill-card-arrow">↗</span>
              </div>
            </motion.article>
          )
        })}
      </div>

      <motion.div
        className="skills-principles"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="principles-heading">
          HOW I APPROACH DEVELOPMENT
        </span>

        <div className="principles-list">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <div className="principle-item" key={principle.label}>
                <Icon size={16} strokeWidth={1.6} />
                <span>{principle.label}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

    </section>
  )
}
