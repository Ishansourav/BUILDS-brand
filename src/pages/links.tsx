import { Navbar, Footer } from '../components'

export function linksPage() {
  const platforms = [
    { icon: 'fab fa-youtube', label: 'YouTube', sub: 'Watch the journey unfold', href: 'https://youtube.com/@sanibuilds', color: '#FF0000' },
    { icon: 'fab fa-instagram', label: 'Instagram', sub: 'Daily builds & behind-the-scenes', href: 'https://instagram.com/sanibuilds', color: '#E4405F' },
    { icon: 'fab fa-facebook', label: 'Facebook', sub: 'Community updates', href: 'https://facebook.com/sanibuilds', color: '#1877F2' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', sub: 'Professional network', href: 'https://linkedin.com/in/sanibuilds', color: '#0A66C2' },
    { icon: 'fab fa-x-twitter', label: 'X / Twitter', sub: 'Quick thoughts & updates', href: 'https://twitter.com/sanibuilds', color: '#FFFFFF' },
    { icon: 'fab fa-github', label: 'GitHub', sub: 'Open-source contributions', href: 'https://github.com/sanibuilds', color: '#FFFFFF' },
    { icon: 'fas fa-envelope', label: 'Email', sub: 'hello@sanibuilds.com', href: 'mailto:hello@sanibuilds.com', color: '#EA4335' },
    { icon: 'fab fa-whatsapp', label: 'WhatsApp Channel', sub: 'Join the community', href: 'https://whatsapp.com/channel/sanibuilds', color: '#25D366' },
    { icon: 'fab fa-telegram', label: 'Telegram', sub: 'Exclusive updates', href: 'https://t.me/sanibuilds', color: '#26A5E4' },
  ]

  return (
    <div class="page-wrapper">
      <canvas id="bg-canvas"></canvas>
      <Navbar active="links" />

      <section class="inner-page-hero">
        <div class="section-container">
          <div class="inner-hero-content">
            <span class="page-badge">LINKS</span>
            <h1 class="inner-hero-title">
              Connect With <span class="text-gold">SANIBUILDS</span>
            </h1>
            <p class="inner-hero-sub">
              Follow the journey across all platforms. Choose your preferred space.
            </p>
          </div>
        </div>
      </section>

      <section class="links-section reveal-section">
        <div class="section-container">
          <div class="links-profile">
            <img
              src="https://www.genspark.ai/api/files/s/PoEmJz7i"
              alt="Sani"
              class="links-profile-img"
            />
            <div class="links-profile-name">
              <span class="logo-sani">SANI</span><span class="logo-builds">BUILDS</span>
            </div>
            <p class="links-profile-bio">Building in Public. Creating in Silence.</p>
          </div>

          <div class="links-big-grid">
            {platforms.map(p => (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                class="link-big-card"
                data-platform-color={p.color}
              >
                <div class="link-big-icon" style={`color: ${p.color}`}>
                  <i class={p.icon}></i>
                </div>
                <div class="link-big-text">
                  <div class="link-big-label">{p.label}</div>
                  <div class="link-big-sub">{p.sub}</div>
                </div>
                <div class="link-big-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>

          <div class="links-cta-row">
            <a href="/waitlist" class="btn btn-primary">
              <i class="fas fa-envelope"></i> Join the Inner Circle
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
