import { motion } from 'framer-motion'
import { Server, Database, Wrench, Code2, Layout, Cpu as Processor, Terminal } from 'lucide-react'
import './Skills.css'

const skillCategories = [
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'API Integration'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    icon: Code2,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    icon: Terminal,
    title: 'Core CS',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP'],
  },
]

const principles = [
  { icon: Code2, label: 'Clean Code' },
  { icon: Processor, label: 'Problem Solving' },
  { icon: Server, label: 'Scalability' },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="skills-number">04</span>
          <h2 className="skills-title">SKILLS & TECHNOLOGIES</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="skill-icon">
                  <Icon size={32} />
                </div>
                <h3 className="skill-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="principles"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="principles-title">CORE PRINCIPLES</h3>
          <div className="principles-list">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <div key={principle.label} className="principle-item">
                  <Icon size={24} />
                  <span>{principle.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
