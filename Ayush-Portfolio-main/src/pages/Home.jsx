import React from 'react'
import { motion } from 'framer-motion'

import photo from '../../public/Ayush.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png' 

export default function Home() {
  const professions = [
    'Java Backend Developer',
    'Software Engineer',
    'Spring Boot Developer',
    'DSA Enthusiast',
    'Developer',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Ayushgithu/' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/ayush-gupta-b986a0225' },
    { img: gmailLogo, title: 'Email', link: 'ayushguptajan22@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917415557442' },
  ]

  return (
    <section className="home-section">
      {/* --- Top Section: Photo + Info --- */}
      <div className="hero-container">
        
        {/* --- Left: Animated Glowing Photo --- */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-ring"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero-img-container"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.img
              src={photo}
              alt="Ayush Gupta"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </motion.div>

        {/* --- Right: Info Section --- */}
        <motion.div
          className="hero-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200%',
              }}
            >
              Ayush Gupta
            </motion.span>
          </h1>

          {/* --- Typing Animated Text --- */}
          <p className="typing-effect">
            Java FullStack | Backend Developer | Frontend
          </p>

          {/* --- Profession Tags --- */}
          <motion.div
            className="profession-tags"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
                }}
                style={{
                  border: '1px solid var(--accent)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.85)',
                  cursor: 'default',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* --- Info Cards --- */}
          <motion.div
            className="info-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[ 
              { label: '📍 Location', value: 'Pune, Maharashtra, India' },
              { label: '💡 Expertise', value: 'Java FullStack, Problem Solving' },
              { label: '✉️ Contact', value: 'ayushguptajan22@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card-item"
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              >
                <strong style={{ fontSize: '1.1rem', color: '#fff' }}>{info.label}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '5px' }}>
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* --- Bottom Quick Links --- */}
      <motion.div
        className="connect-area"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Connect</h2>
        <div className="social-links-grid">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'all 0.3s ease',
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}