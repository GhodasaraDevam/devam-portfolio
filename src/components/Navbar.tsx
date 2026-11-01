
import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        DEVAM<span>.</span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="nav-resume"
          href="/resume.pdf"
          download="Devam_Ghodasara_Resume.pdf"
          onClick={() => setMenuOpen(false)}
        >
          <Download size={14} />
          Resume
        </a>
      </nav>

      <a className="nav-contact" href="#contact">
        Let's Talk <span>↗</span>
      </a>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
