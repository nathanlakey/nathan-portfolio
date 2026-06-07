'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add('visible'),
              i * 90
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
