
import { motion } from 'framer-motion'
import {
    ArrowUpRight,
    BrainCircuit,
    Activity,
    Workflow,
    FileText,
    Search,
    MessageSquare,
    ShieldCheck,
} from 'lucide-react'

const projects = [
    {
        number: '01',
        name: 'InsightFlow',
        category: 'AI · DOCUMENT INTELLIGENCE',
        title: 'Turn documents into knowledge.',
        description:
            'An AI-powered document intelligence platform that lets users upload documents, search their content, and ask natural-language questions with source references.',
        technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Hugging Face',
        ],
        icon: BrainCircuit,
        theme: 'insight',
        preview: 'document',
        features: [
            'Document upload and management',
            'Semantic search and AI Q&A',
            'Source references in responses',
        ],
    },
    {
        number: '02',
        name: 'DevPulse',
        category: 'COLLABORATION · REAL-TIME',
        title: 'Keep engineering teams in sync.',
        description:
            'A team collaboration platform designed to organize workspaces, projects, issues and sprints, with real-time communication and activity updates.',
        technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Socket.IO',
        ],
        icon: Workflow,
        theme: 'devpulse',
        preview: 'workspace',
        features: [
            'Workspace and project management',
            'Issue tracking and sprint planning',
            'Team activity and real-time updates',
        ],
    },
    {
        number: '03',
        name: 'APIForge',
        category: 'BACKEND · OBSERVABILITY',
        title: 'See what happens behind every API.',
        description:
            'An API monitoring and observability platform focused on scheduled health checks, response-time tracking, request logs and failure alerts.',
        technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Redis',
            'BullMQ',
        ],
        icon: Activity,
        theme: 'apiforge',
        preview: 'monitoring',
        features: [
            'Scheduled API health checks',
            'Response-time and availability tracking',
            'Background jobs and failure alerts',
        ],
    },
]

function DocumentPreview() {
    return (
        <div className="project-mockup insight-mockup">
            <div className="mockup-sidebar">
                <div className="mockup-brand">insight<span>.</span></div>
                <div className="mockup-nav active"><FileText size={12} /> Documents</div>
                <div className="mockup-nav"><Search size={12} /> Search</div>
                <div className="mockup-nav"><MessageSquare size={12} /> AI Assistant</div>
            </div>

            <div className="mockup-main">
                <div className="mockup-topbar">
                    <span>Document workspace</span>
                    <span className="mockup-avatar">D</span>
                </div>

                <div className="mockup-welcome">
                    <span>YOUR KNOWLEDGE SPACE</span>
                    <strong>Good afternoon, Devam.</strong>
                    <small>Explore your documents and discover insights.</small>
                </div>

                <div className="mockup-search">
                    <Search size={12} />
                    Ask something about your documents...
                </div>

                <div className="mockup-documents">
                    <div className="mockup-doc">
                        <FileText size={17} />
                        <span>Project Overview.pdf</span>
                        <small>PDF</small>
                    </div>
                    <div className="mockup-doc">
                        <FileText size={17} />
                        <span>Technical Notes.docx</span>
                        <small>DOCX</small>
                    </div>
                    <div className="mockup-doc">
                        <FileText size={17} />
                        <span>Research Document.pdf</span>
                        <small>PDF</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WorkspacePreview() {
    return (
        <div className="project-mockup devpulse-mockup">
            <div className="workspace-topbar">
                <div className="workspace-logo"><Workflow size={14} /> DevPulse</div>
                <span>Engineering workspace</span>
                <span className="workspace-avatar">D</span>
            </div>

            <div className="workspace-content">
                <div className="workspace-heading">
                    <div>
                        <small>PROJECT OVERVIEW</small>
                        <strong>Website Redesign</strong>
                    </div>
                    <span className="workspace-status">In progress</span>
                </div>

                <div className="workspace-stats">
                    <div><small>Open issues</small><strong>-</strong></div>
                    <div><small>In progress</small><strong>-</strong></div>
                    <div><small>Completed</small><strong>-</strong></div>
                </div>

                <div className="workspace-board">
                    <div className="board-column">
                        <span>TO DO <b>02</b></span>
                        <div className="board-task"><i /> Design system</div>
                        <div className="board-task"><i /> API integration</div>
                    </div>
                    <div className="board-column">
                        <span>IN PROGRESS <b>02</b></span>
                        <div className="board-task"><i /> Dashboard UI</div>
                        <div className="board-task"><i /> User settings</div>
                    </div>
                    <div className="board-column">
                        <span>DONE <b>02</b></span>
                        <div className="board-task"><i /> Authentication</div>
                        <div className="board-task"><i /> Navigation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MonitoringPreview() {
    return (
        <div className="project-mockup apiforge-mockup">
            <div className="monitor-topbar">
                <div className="monitor-logo"><Activity size={14} /> APIForge</div>
                <span className="monitor-live"><i /> MONITORING</span>
            </div>

            <div className="monitor-content">
                <div className="monitor-heading">
                    <div>
                        <small>OVERVIEW</small>
                        <strong>API health dashboard</strong>
                    </div>
                    <span>Last 24 hours</span>
                </div>

                <div className="monitor-stats">
                    <div><small>Availability</small><strong>—</strong></div>
                    <div><small>Avg. response</small><strong>—</strong></div>
                    <div><small>Endpoints</small><strong>Configured</strong></div>
                </div>

                <div className="monitor-chart">
                    <div className="chart-label">
                        <span>Response time</span>
                        <small>MS</small>
                    </div>
                    <svg viewBox="0 0 500 110" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="apiChartFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity=".3" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 78 L35 68 L70 73 L105 42 L140 55 L175 35 L210 48 L245 27 L280 42 L315 30 L350 52 L385 34 L420 43 L455 20 L500 29 L500 110 L0 110 Z"
                            fill="url(#apiChartFill)"
                        />
                        <path
                            d="M0 78 L35 68 L70 73 L105 42 L140 55 L175 35 L210 48 L245 27 L280 42 L315 30 L350 52 L385 34 L420 43 L455 20 L500 29"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                        />
                    </svg>
                </div>

                <div className="monitor-endpoint">
                    <span><i /> Your monitored endpoint</span>
                    <small>Sample UI</small>
                    <strong>—</strong>
                </div>
            </div>
        </div>
    )
}

function ProjectVisual({ type }: { type: string }) {
    if (type === 'document') return <DocumentPreview />
    if (type === 'workspace') return <WorkspacePreview />
    return <MonitoringPreview />
}

export default function Projects() {
    return (
        <section className="projects-section section-container" id="projects">
            <motion.div
                className="projects-heading"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
            >
                <span className="section-eyebrow">03 / SELECTED WORK</span>

                <div className="projects-heading-row">
                    <div>
                        <h2>Things I've built.</h2>
                        <p>
                            A selection of projects exploring full-stack engineering,
                            intelligent systems and practical problem solving.
                        </p>
                    </div>

                    <span className="projects-count">03 PROJECTS</span>
                </div>
            </motion.div>

            <div className="projects-list">
                {projects.map((project, index) => {
                    const Icon = project.icon

                    return (
                        <motion.article
                            className={`project-card project-${project.theme}`}
                            key={project.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                        >
                            <div className="project-card-info">
                                <div className="project-meta">
                                    <span>{project.number} / 03</span>
                                    <span>{project.category}</span>
                                </div>

                                <div className="project-name">
                                    <Icon size={23} strokeWidth={1.5} />
                                    <h3>{project.name}</h3>
                                </div>

                                <h4>{project.title}</h4>
                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    {project.features.map((feature) => (
                                        <div key={feature}>
                                            <ShieldCheck size={14} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>

                                <div className="project-footer">
                                    <span>PERSONAL PROJECT</span>
                                    <span className="project-arrow" aria-hidden="true">
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>
                            </div>

                            <div className="project-card-visual">
                                <ProjectVisual type={project.preview} />
                                <span className="preview-disclaimer">
                                    CONCEPTUAL UI PREVIEW
                                </span>
                            </div>
                        </motion.article>
                    )
                })}
            </div>
        </section>
    )
}
