import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const PROJECTS = [
  {
    title: '👨🏻‍💻 CodeArena MultiPlayer Coding Battle & Quiz Platform',
    desc: 'Built a real-time coding and MCQ battle platform using Spring Boot, WebSockets, and Piston API. Implemented synchronized code editor, automated code evaluation, timer rounds, and scoring logic. Added video calling, screen sharing, chat, and shared whiteboard for interactive interviews. Developed room matchmaking, interviewer controls, and secure JWT-based session flow.',
    ss: '/codeArena.jpg',
    tech: [
      'SpringBoot',
      'Java',
      'React js',
      'HTML',
      'CSS',
      'TailwindCss',
      'JavaScript',
      'MySql',
      'Spring Email',
      'WebSocket',
      'Redis',
      'PistonApi'
    ],
    code: 'https://github.com/Anshul1913/Real-Time-Collaborative-Coding-and-Communication-Platform.git'
  },
  {
    title: '🛒 Ecom Store',
    desc: 'Developed a comprehensive Full Stack E-commerce Platform using Java, Spring Boot, and Spring Security for a robust backend. Implemented product catalog management (CRUD), shopping cart, and secure user authentication with Admin and Customer roles. Integrated Razorpay API for real-time payment processing and complete order management.',
    ss: '/ecom.jpg',
    tech: [
      'SpringBoot',
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Thymeleaf',
      'MySql',
      'Spring Email',
      'RazorPay API'
    ],
    code: 'https://github.com/Ayushgithu/E-commerce-Website.git'
  },
  {
    title: '👨‍🍳 Medi-Food Canteen Automation System',
    desc: 'Created an online food ordering system with secure login, order tracking, and payment gateway integration. Users can browse digital menus, place orders, and receive token numbers for collection.',
    ss: '/medifood.png',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySql',
      'Razorpay API'
    ],
    code: 'https://github.com/Ayushgithu/Medi-Food-canteen-Automation-system.git'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.png',
    tech: [
      'React',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Framer Motion',
      'Tailwind CSS',
      'EmailJS'
    ],
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
      style={{
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 24,
          padding: 35,
          border: '1px solid rgba(0,255,255,0.08)',
          boxShadow: '0 0 40px rgba(0,255,255,0.05)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: 'center', marginBottom: 50 }}
        >
          <h2
            className="text-4xl font-bold"
            style={{
              background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 10
            }}
          >
            🚀 Featured Projects
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: 16,
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            A collection of my full-stack, real-time, and modern web development projects
            showcasing problem-solving, scalable architecture, and beautiful UI design.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 28,
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{
                y: -10,
                boxShadow: '0 0 35px rgba(34,211,238,0.15)'
              }}
              viewport={{ once: true }}
              style={{
                background:
                  'linear-gradient(145deg, rgba(17,24,39,0.95), rgba(3,7,18,0.95))',
                border: '1px solid rgba(34,211,238,0.08)',
                borderRadius: 22,
                overflow: 'hidden',
                transition: '0.4s ease',
                position: 'relative'
              }}
            >
              {/* Image */}
              <div
                style={{
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <motion.img
                  src={p.ss}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 22 }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#22d3ee',
                    marginBottom: 12
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: '#cbd5e1',
                    lineHeight: 1.8,
                    marginBottom: 18
                  }}
                >
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 24
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(34,211,238,0.08)',
                        border: '1px solid rgba(34,211,238,0.12)',
                        color: '#67e8f9',
                        padding: '6px 12px',
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Attractive Button */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 10
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.06,
                      boxShadow: '0 0 30px rgba(34,211,238,0.45)'
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: 14,
                      background:
                        'linear-gradient(to right, #06b6d4, #2563eb)',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      textDecoration: 'none',
                      boxShadow: '0 0 20px rgba(34,211,238,0.25)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Github size={20} />
                    View Source Code
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