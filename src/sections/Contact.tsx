
import { motion } from 'framer-motion'
import {
    ArrowUpRight,
    Mail,
    Copy,
    Check,
    Download,
} from 'lucide-react'
import { useState } from 'react'

const email = 'devamghodasara20@gmail.com'

export default function Contact() {
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${email}`
        }
    }

    return (
        <section
            className="contact-section section-container"
            id="contact"
        >
            <motion.div
                className="contact-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75 }}
            >
                <div className="contact-orb contact-orb-one" />
                <div className="contact-orb contact-orb-two" />

                <div className="contact-content">
                    <span className="section-eyebrow">
                        06 / GET IN TOUCH
                    </span>

                    <h2>
                        Have an idea?
                        <span> Let's build something meaningful.</span>
                    </h2>

                    <p className="contact-description">
                        I'm always open to discussing interesting projects,
                        software engineering opportunities and ideas worth
                        building. Feel free to reach out.
                    </p>

                    <div className="contact-actions">
                        <a
                            href={`mailto:${email}?subject=${encodeURIComponent(
                                'Hello Devam!'
                            )}`}
                            className="button-primary contact-email-button"
                        >
                            <Mail size={17} />
                            Say hello
                            <ArrowUpRight size={18} />
                        </a>

                        <button
                            type="button"
                            className="button-secondary contact-copy-button"
                            onClick={copyEmail}
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? 'Email copied' : 'Copy email'}
                        </button>
                        <a
                            href="/resume.pdf"
                            download="Devam_Ghodasara_Resume.pdf"
                            className="button-secondary contact-resume-button"
                        >
                            <Download size={17} />
                            Download Resume
                        </a>
                    </div>

                    <div className="contact-email-address">
                        <span>DIRECT EMAIL</span>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    <div className="contact-social-links">
                        <a
                            href="https://www.linkedin.com/in/devam-ghodasara-86a676284"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="social-brand-mark linkedin-mark">in</span>
                            LinkedIn
                            <ArrowUpRight size={14} />
                        </a>

                        <a
                            href="https://github.com/GhodasaraDevam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="social-brand-mark github-mark">GH</span>
                            GitHub
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                <div className="contact-card-footer">
                    <span>
                        <span className="availability-dot" />
                        OPEN TO OPPORTUNITIES
                    </span>

                    <span>AHMEDABAD, INDIA</span>
                </div>
            </motion.div>
        </section>
    )
}
