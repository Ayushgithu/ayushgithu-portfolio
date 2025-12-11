import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '👨🏻‍💻 CodeArena MultiPlayer Coding Battle & Interview Platform',
    desc: 'Built a real-time coding and MCQ battle platform using Spring Boot, WebSockets, and Piston API Implemented synchronized code editor, automated code evaluation, timer rounds, and scoring logic Added video calling, screen sharing, chat, and shared whiteboard for interactive interviews. Developed room matchmaking, interviewer controls, and secure JWT-based session flow',
    ss: '/codeArena.jpg',
    tech: ['SpringBoot', 'Java', 'React js', 'HTML', 'Css', 'TailwindCss', 'JavaScript', 'MySql', 'Spring Email', 'WebSocket', 'WebRTC', 'PistonApi'],
    live: '#',
    code: 'https://github.com/Anshul1913/Real-Time-Collaborative-Coding-and-Communication-Platform.git'
  },
  {
  title: '🛒 Ecom Store',
  desc: ' Developed a comprehensive Full Stack E-commerce Platform using Java, Spring Boot, and Spring Security for a robust backend. Implemented core e-commerce functionalities, including product catalog management (CRUD), a dynamic shopping cart, and a secure user management system with separate Admin and Customer roles. Integrated the Razorpay API for real-time payment processing, ensuring a complete, end-to-end order fulfillment and tracking system',
  ss: '/.jpg',
  tech: ['SpringBoot', 'Java', 'Html', 'Css', 'Javascript', 'BootStrap', 'ThymeLeaf', 'MySql', 'Spring Email', 'RazorPay API'],
  live: '#',
  code: 'https://github.com/Ayushgithu/E-commerce-Website.git'
  },
  {
    title: '👨‍🍳 Medi-Food canteen Automation System ',
    desc: 'Created an online food ordering system with secure login, order tracking, and payment gateway integration Users can browse digital menus, place orders, and get token numbers for collection.',
    ss: '/medifood.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql', 'Razorpay API'],
    live: '#',
    code: 'https://github.com/Ayushgithu/Medi-Food-canteen-Automation-system.git'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.png',
  tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Framer Motion', 'Tailwind CSS', ' EmailJS'],
  live: '#',
  code: 'https://github.com/Ayushgithu/Portfolio.git'
  }
  
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
