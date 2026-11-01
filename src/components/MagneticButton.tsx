
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function MagneticButton({ children, className = '', onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const mouseX = event.clientX - rect.left - rect.width / 2
    const mouseY = event.clientY - rect.top - rect.height / 2

    x.set(mouseX * 0.3)
    y.set(mouseY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(springY, [-50, 50], [5, -5])
  const rotateY = useTransform(springX, [-50, 50], [-5, 5])

  const ButtonWrapper = motion[href ? 'a' : 'button'] as any

  return (
    <ButtonWrapper
      ref={ref}
      href={href}
      onClick={onClick}
      className={className}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </ButtonWrapper>
  )
}
