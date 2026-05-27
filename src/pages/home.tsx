import { Navbar, Footer } from '../components'

export function homePage() {
  const socialLinks = [
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@sanibuilds', label: 'YouTube', hoverColor: '#FF0000' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/sanibuilds', label: 'Instagram', hoverColor: '#E4405F' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/sanibuilds', label: 'Facebook', hoverColor: '#1877F2' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/sanibuilds', label: 'LinkedIn', hoverColor: '#0A66C2' },
    { icon: 'fab fa-x-twitter', href: 'https://twitter.com/sanibuilds', label: 'X / Twitter', hoverColor: '#1DA1F2' },
    { icon: 'fab fa-github', href: 'https://github.com/sanibuilds', label: 'GitHub', hoverColor: '#FFFFFF' },
    { icon: 'fas fa-envelope', href: 'mailto:hello@sanibuilds.com', label: 'Email', hoverColor: '#EA4335' },
    { icon: 'fab fa-whatsapp', href: 'https://whatsapp.com/channel/sanibuilds', label: 'WhatsApp', hoverColor: '#25D366' },
    { icon: 'fab fa-telegram', href: 'https://t.me/sanibuilds', label: 'Telegram', hoverColor: '#26A5E4' },
  ]

  const buildingItems = [
    { icon: 'fas fa-microchip', title: 'AI-Powered Workflows', desc: 'Automating repetitive creative tasks with intelligent pipelines.' },
    { icon: 'fas fa-bolt', title: 'Creator Automation Systems', desc: 'Streamlining content production from ideation to distribution.' },
    { icon: 'fas fa-rocket', title: 'Startup Experiments', desc: 'Validating ideas in weeks, not months. Speed is the strategy.' },
    { icon: 'fas fa-box-open', title: 'Real-World Product Building', desc: 'Taking concepts from napkin sketches to live deployments.' },
    { icon: 'fas fa-chart-line', title: 'Daily Progress Documentation', desc: 'Transparent journey logging so you see every iteration.' },
    { icon: 'fas fa-eye', title: 'Silent Execution Systems', desc: 'Building quietly, revealing only when the work is undeniable.' },
  ]

  const timeline = [
    { day: 'DAY 0', title: 'Before the chaos', desc: 'Idea phase. Notebooks full of sketches.' },
    { day: 'DAY 1', title: 'Building started', desc: 'First line of code. Domain purchased.' },
    { day: 'DAY 3', title: 'System responded', desc: 'First automation workflow tested.' },
    { day: 'DAY 7', title: 'First serious progress', desc: 'MVP structure defined.' },
    { day: 'DAY 15', title: 'Automation phase', desc: 'Connecting APIs, reducing manual work.' },
    { day: 'DAY 30', title: 'Bigger reveal coming', desc: 'Something unexpected is brewing.' },
  ]

  const videos = [
    { day: 'Day 1', title: 'The Beginning — First Line of Code', duration: '0:45' },
    { day: 'Day 2', title: 'Building My AI System', duration: '0:58' },
    { day: 'Day 3', title: 'Creator Automation Setup', duration: '0:57' },
    { day: 'Day 4', title: 'UI/UX Decisions', duration: '1:30' },
    { day: 'Day 5', title: 'API Integration Deep Dive', duration: '1:05' },
    { day: 'Day 6', title: 'Production Prep', duration: '0:52' },
  ]

  const tools = [
    { emoji: '🤖', name: 'ChatGPT' },
    { emoji: '✨', name: 'Gemini' },
    { emoji: '⌨️', name: 'Cursor' },
    { emoji: '💻', name: 'VS Code' },
    { emoji: '🐍', name: 'Django' },
    { emoji: '⚛️', name: 'React' },
    { emoji: '▲', name: 'Next.js' },
    { emoji: '🔥', name: 'Firebase' },
    { emoji: '🐙', name: 'GitHub' },
    { emoji: '▼', name: 'Vercel' },
  ]

  const collab = [
    { icon: 'fas fa-handshake', title: 'COLLABORATION', desc: "Let's build and grow together." },
    { icon: 'fas fa-star', title: 'SPONSORSHIP', desc: 'Partner with me for impact and reach.' },
    { icon: 'fas fa-paint-brush', title: 'BRAND WORK', desc: 'Create content that connects and converts.' },
    { icon: 'fas fa-users', title: 'STARTUP NETWORKING', desc: 'Open to meaningful startup conversations.' },
  ]

  const gradientColors = ['#ff6b6b20','#ffd70020','#26a5e420','#25d36620','#e4405f20','#ffd70030']

  return (
    <div class="page-wrapper">
      {/* 3D Canvas */}
      <canvas id="bg-canvas"></canvas>

      <Navbar active="home" />

      {/* ─── HERO SECTION ─── */}
      <section class="hero-section" id="hero">
        <div class="hero-content">
          <div class="hero-left" id="heroLeft">
            <div class="hero-badge animate-fade-scale" id="heroBadge">
              <span class="badge-dot">✦</span> BUILDING IN PUBLIC <span class="badge-dot">✦</span>
            </div>
            <h1 class="hero-headline" id="heroHeadline">
              <span class="hero-line animate-slide-up" style="animation-delay:0.35s">BUILDING IN</span>
              <span class="hero-line hero-line-gold animate-slide-up" style="animation-delay:0.50s">PUBLIC.</span>
              <span class="hero-line animate-slide-up" style="animation-delay:0.65s">CREATING IN</span>
              <span class="hero-line hero-line-yellow animate-slide-up" style="animation-delay:0.80s">SILENCE.</span>
            </h1>
            <p class="hero-sub animate-slide-up" style="animation-delay:0.95s">
              AI &bull; STARTUPS &bull; SYSTEMS &bull; CREATOR WORKFLOW
            </p>
            <p class="hero-quote animate-fade" style="animation-delay:1.1s">
              Documenting the process before the world notices.
            </p>
            <div class="hero-ctas animate-slide-up" style="animation-delay:1.25s">
              <a href="https://youtube.com/@sanibuilds" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <i class="fab fa-youtube"></i> Watch on YouTube
              </a>
              <a href="https://instagram.com/sanibuilds" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <i class="fab fa-instagram"></i> Follow on Instagram
              </a>
              <a href="/waitlist" class="btn btn-outline">
                Join Waitlist <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            <p class="hero-footer-text animate-fade" style="animation-delay:1.6s">
              DISCIPLINE ✦ FOCUS ✦ CONSISTENCY
            </p>
          </div>
          <div class="hero-right" id="heroRight">
            <div class="founder-image-wrap">
              <div class="founder-glow-ring"></div>
              <div class="founder-glow-ring-2"></div>
              <img
                src="https://www.genspark.ai/api/files/s/PoEmJz7i"
                alt="Sani – Founder of SANIBUILDS"
                class="founder-img"
              />
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="scroll-dot"></div>
        </div>
      </section>

      {/* ─── CONNECT WITH ME ─── */}
      <section class="social-section reveal-section" id="social">
        <div class="section-container">
          <p class="section-label">CONNECT WITH ME</p>
          <div class="social-grid">
            {socialLinks.map(s => (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                class="social-card"
                data-hover-color={s.hoverColor}
              >
                <i class={`${s.icon} social-icon`}></i>
                <span class="social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHAT IS SANIBUILDS ─── */}
      <section class="about-section reveal-section" id="about">
        <div class="section-container about-grid">
          <div class="about-image-col">
            <div class="about-img-wrap">
              <img
                src="https://www.genspark.ai/api/files/s/Vv6AZLsa"
                alt="Sani – Founder"
                class="about-founder-img"
              />
              <div class="about-img-badge">
                <span class="badge-code">&lt;/&gt;</span>
              </div>
              <div class="about-name-tag">Sani</div>
            </div>
          </div>
          <div class="about-text-col">
            <div class="about-yellow-bar"></div>
            <div class="about-content">
              <h2 class="about-title">
                WHAT IS <span class="text-gold">SANIBUILDS?</span>
              </h2>
              <p class="about-body">
                SANIBUILDS is a build-in-public journey where I document my process of building AI systems, startup ideas, creator workflows, and real digital products without revealing everything too early.
              </p>
              <p class="about-quote">
                "This is not just content.<br />It's the process behind future systems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT I'M BUILDING ─── */}
      <section class="building-section reveal-section" id="building">
        <div class="section-container">
          <div class="section-header centered">
            <h2 class="section-title">WHAT I'M BUILDING</h2>
            <p class="section-subtitle">(Not revealing the full idea yet. Follow to find out.)</p>
            <div class="gold-line"></div>
          </div>
          <div class="building-grid">
            {buildingItems.map((item, i) => (
              <div class="build-card" style={`animation-delay:${0.1 * i}s`}>
                <div class="build-icon">
                  <i class={item.icon}></i>
                </div>
                <h3 class="build-title">{item.title}</h3>
                <p class="build-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ─── */}
      <section class="timeline-section reveal-section" id="timeline">
        <div class="section-container">
          <div class="section-header centered">
            <h2 class="section-title">THE JOURNEY SO FAR</h2>
            <div class="gold-line"></div>
          </div>
          <div class="timeline-wrapper">
            <div class="timeline-line"></div>
            {timeline.map((item, i) => (
              <div class={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                  <div class="timeline-badge">{item.day}</div>
                  <h3 class="timeline-title">{item.title}</h3>
                  <p class="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED VIDEOS ─── */}
      <section class="videos-section reveal-section" id="videos">
        <div class="section-container">
          <div class="section-header space-between">
            <h2 class="section-title">FEATURED VIDEOS</h2>
            <a href="https://youtube.com/@sanibuilds" target="_blank" rel="noopener noreferrer" class="view-all-link">
              Watch all videos on YouTube <i class="fas fa-arrow-right"></i>
            </a>
          </div>
          <div class="videos-grid">
            {videos.map((v, i) => (
              <a href="https://youtube.com/@sanibuilds" target="_blank" rel="noopener noreferrer" class="video-card" style={`animation-delay:${0.1 * i}s`}>
                <div class="video-thumb" style={`background: linear-gradient(135deg, hsl(${i * 40},20%,20%), hsl(${i * 40 + 20},15%,10%))`}>
                  <div class="video-play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="video-overlay">
                    <div class="video-meta-bottom">
                      <div class="video-day-badge">{v.day}</div>
                      <span class="video-title-text">{v.title}</span>
                    </div>
                    <span class="video-duration">{v.duration}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div class="view-all-center">
            <a href="https://youtube.com/@sanibuilds" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <i class="fab fa-youtube"></i> View More on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ─── TOOLS & STACK ─── */}
      <section class="tools-section reveal-section" id="tools">
        <div class="section-container">
          <div class="section-header centered">
            <h2 class="section-title">TOOLS &amp; STACK</h2>
            <div class="gold-line"></div>
          </div>
          <div class="tools-grid">
            {tools.map(t => (
              <div class="tool-badge">
                <span class="tool-emoji">{t.emoji}</span>
                <span class="tool-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAITLIST / INNER CIRCLE ─── */}
      <section class="waitlist-section reveal-section" id="waitlist-cta">
        <div class="section-container">
          <div class="waitlist-card">
            <div class="waitlist-icon-wrap">
              <i class="fas fa-envelope waitlist-icon"></i>
            </div>
            <div class="waitlist-content">
              <h2 class="waitlist-title">
                Want to follow the <span class="text-gold">journey closely?</span>
              </h2>
              <p class="waitlist-sub">Join the inner circle before the bigger reveal.</p>
            </div>
            <form class="waitlist-inline-form" id="waitlistFormInline" onsubmit="return false;">
              <input type="text" placeholder="Your Name" id="inlineName" class="waitlist-input" required />
              <input type="email" placeholder="Your Email" id="inlineEmail" class="waitlist-input" required />
              <button type="submit" class="btn btn-primary waitlist-submit-btn" id="inlineSubmitBtn">
                Join the Inner Circle <i class="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / COLLABORATION ─── */}
      <section class="contact-section reveal-section" id="contact">
        <div class="section-container">
          <div class="section-label centered-label">LET'S BUILD SOMETHING GREAT TOGETHER</div>
          <div class="contact-grid">
            <div class="contact-options">
              {collab.map(c => (
                <div class="collab-item">
                  <div class="collab-icon"><i class={c.icon}></i></div>
                  <div class="collab-text">
                    <div class="collab-title">{c.title}</div>
                    <div class="collab-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div class="contact-email-col">
              <div class="contact-email-card">
                <i class="fas fa-envelope contact-email-icon"></i>
                <h3 class="contact-email-heading">CONTACT FOR COLLABORATION</h3>
                <a href="mailto:hello@sanibuilds.com" class="contact-email-address">
                  hello@sanibuilds.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
