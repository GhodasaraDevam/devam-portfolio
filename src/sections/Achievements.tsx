
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Users,
  Award,
  Sparkles,
} from 'lucide-react'

const achievements = [
  {
    number: '01',
    category: 'CODING & PROBLEM SOLVING',
    title: '300+ Problems Solved',
    description:
      'Consistently strengthening problem-solving skills through data structures and algorithms across competitive coding platforms.',
    highlight: '300+',
    highlightLabel: 'Problems solved',
    icon: Code2,
    tags: ['LeetCode', 'CodeChef', 'Codeforces'],
    accent: 'purple',
  },
  {
    number: '02',
    category: 'LEADERSHIP & COMMUNITY',
    title: 'ULSC Member',
    description:
      'Part of the University Central Student Council at CHARUSAT, contributing to student representation and university activities.',
    highlight: 'ULSC',
    highlightLabel: 'Student Council',
    icon: Users,
    tags: ['CHARUSAT', 'Student Leadership'],
    accent: 'blue',
  },
  {
    number: '03',
    category: 'RECOGNITION & RESPONSIBILITY',
    title: "SPOC — CognizanceX'26",
    description:
      'Served as a Single Point of Contact for CognizanceX’26 and received a Letter of Appreciation for the contribution.',
    highlight: '2026',
    highlightLabel: 'Letter of Appreciation',
    icon: Award,
    tags: ['SPOC', 'CognizanceX’26', 'Recognition'],
    accent: 'green',
  },
]

export default function Achievements() {
  return (
    <section
      className="achievements-section section-container"
      id="achievements"
    >
      <motion.div
        className="achievements-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow">
            05 / ACHIEVEMENTS
          </span>

          <h2>
            Beyond the
            <span> code.</span>
          </h2>

          <p>
            Milestones that reflect my consistency, involvement
            and commitment to growing as an engineer.
          </p>
        </div>

        <span className="achievements-side-label">
          GROWTH · INITIATIVE · IMPACT
        </span>
      </motion.div>

      <div className="achievements-grid">
        {achievements.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.article
              className={`achievement-card ${item.accent}`}
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="achievement-card-top">
                <span className="achievement-number">
                  {item.number} / 03
                </span>

                <span className="achievement-icon">
                  <Icon size={21} strokeWidth={1.6} />
                </span>
              </div>

              <span className="achievement-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p className="achievement-description">
                {item.description}
              </p>

              <div className="achievement-highlight">
                <strong>{item.highlight}</strong>
                <span>{item.highlightLabel}</span>
              </div>

              <div className="achievement-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="achievement-card-footer">
                <span>PERSONAL MILESTONE</span>
                <ArrowUpRight size={17} />
              </div>
            </motion.article>
          )
        })}
      </div>

      <motion.div
        className="achievement-bottom-note"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles size={17} />
        <p>
          Every milestone is another reason to keep learning,
          building and moving forward.
        </p>
      </motion.div>
    </section>
  )
}
