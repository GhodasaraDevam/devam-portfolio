import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Layers, Cpu, Zap } from 'lucide-react'
import './Work.css'

const GithubIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'InsightFlow',
    category: 'AI · Document Intelligence',
    description: 'An AI-powered document intelligence platform that enables users to upload documents, search their content, and ask natural-language questions with source references.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Hugging Face'],
    features: ['Semantic Search', 'Document Upload', 'Q&A with References', 'Vector Database'],
    contribution: 'Full-stack development, AI integration, and UI/UX design',
    architecture: 'Microservices architecture with separate AI processing service',
    frontend: 'React with TypeScript, real-time document processing UI',
    backend: 'Node.js/Express with Hugging Face API integration',
    database: 'MongoDB for document metadata, Vector database for embeddings',
    challenges: 'Optimizing large document processing and ensuring accurate semantic search',
    github: 'https://github.com/GhodasaraDevam',
    demo: null,
    icon: Layers,
  },
  {
    id: 2,
    title: 'DevPulse',
    category: 'Collaboration · Real-Time',
    description: 'A team collaboration platform designed to organize workspaces, projects, issues and sprints, with real-time communication and activity updates.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    features: ['Real-time Updates', 'Workspace Management', 'Issue Tracking', 'Activity Feed'],
    contribution: 'Real-time architecture, WebSocket implementation, and responsive design',
    architecture: 'Event-driven architecture with WebSocket real-time communication',
    frontend: 'React with TypeScript, Socket.IO client for real-time updates',
    backend: 'Node.js/Express with Socket.IO server, event emitters',
    database: 'MongoDB with change streams for real-time data sync',
    challenges: 'Managing concurrent users and ensuring consistent state across clients',
    github: 'https://github.com/GhodasaraDevam',
    demo: null,
    icon: Zap,
  },
  {
    id: 3,
    title: 'APIForge',
    category: 'Backend · Observability',
    description: 'An API monitoring and observability platform focused on scheduled health checks, response-time tracking, request logs and failure alerts.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ'],
    features: ['Health Checks', 'Response Tracking', 'Request Logging', 'Failure Alerts'],
    contribution: 'Queue system, monitoring dashboard, and alert mechanisms',
    architecture: 'Queue-based system with BullMQ for background job processing',
    frontend: 'React dashboard with real-time monitoring charts',
    backend: 'Node.js with BullMQ queues, Redis for caching',
    database: 'MongoDB for logs and metrics, Redis for queue state',
    challenges: 'Handling high-frequency API checks and preventing queue congestion',
    github: 'https://github.com/GhodasaraDevam',
    demo: null,
    icon: Cpu,
  },
]

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="work" id="work">
      <div className="work-container">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="work-number">02</span>
          <h2 className="work-title">SELECTED WORK</h2>
        </motion.div>

        {!selectedProject ? (
          <div className="projects-asymmetric">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -8 }}
                >
                  <div className="project-number">0{project.id}</div>
                  <div className="project-icon">
                    <Icon size={48} />
                  </div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                      <GithubIcon size={20} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <div className="project-overlay">
                    <ArrowUpRight size={32} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <motion.div
            className="project-detail"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button className="back-button" onClick={() => setSelectedProject(null)}>
              ← BACK TO PROJECTS
            </button>
            <span className="detail-category">{selectedProject.category}</span>
            <h2 className="detail-title">{selectedProject.title}</h2>
            <p className="detail-description">{selectedProject.description}</p>

            <div className="detail-section">
              <h4>KEY FEATURES</h4>
              <div className="feature-list">
                {selectedProject.features.map((feature) => (
                  <span key={feature} className="feature-item">{feature}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4>MY CONTRIBUTION</h4>
              <p className="contribution-text">{selectedProject.contribution}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-block">
                <h4>ARCHITECTURE</h4>
                <p>{selectedProject.architecture}</p>
              </div>
              <div className="detail-block">
                <h4>FRONTEND</h4>
                <p>{selectedProject.frontend}</p>
              </div>
              <div className="detail-block">
                <h4>BACKEND</h4>
                <p>{selectedProject.backend}</p>
              </div>
              <div className="detail-block">
                <h4>DATABASE</h4>
                <p>{selectedProject.database}</p>
              </div>
            </div>

            <div className="detail-section">
              <h4>TECHNICAL CHALLENGES</h4>
              <p className="challenges-text">{selectedProject.challenges}</p>
            </div>

            <div className="detail-technologies">
              <h4>TECHNOLOGIES</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="detail-links">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="detail-link">
                <GithubIcon size={20} />
                View on GitHub
              </a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="detail-link">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
