
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.cta-button') ||
        target.closest('.contact-cta')
      ) {
        setHovered(true)
      }
    }

    const handleMouseOut = () => {
      setHovered(false)
    }

    const handleMouseDown = () => {
      setClicking(true)
    }

    const handleMouseUp = () => {
      setClicking(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.15,
      }))
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  if (isTouchDevice) return null

  const scale = hovered ? 2.5 : clicking ? 0.8 : 1

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${clicking ? 0.5 : 1})`,
        }}
      />
      <div
        ref={outerRef}
        className="custom-cursor-outer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${scale})`,
          borderColor: hovered ? '#315BFF' : '#171717',
        }}
      />
    </>
  )
}
