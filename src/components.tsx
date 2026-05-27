// Shared Navbar Component
export function Navbar({ active = 'home' }: { active?: string }) {
  const links = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/links', label: 'Links', key: 'links' },
    { href: '/contact', label: 'Contact', key: 'contact' },
  ]
  return (
    <nav id="navbar" class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <span class="logo-sani">SANI</span><span class="logo-builds">BUILDS</span>
        </a>
        <div class="nav-links" id="navLinks">
          {links.map(l => (
            <a href={l.href} class={`nav-link${active === l.key ? ' active' : ''}`}>{l.label}</a>
          ))}
        </div>
        <div class="nav-actions">
          <a href="/waitlist" class="btn-waitlist">Join the Inner Circle</a>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div class="mobile-menu" id="mobileMenu">
        {links.map(l => (
          <a href={l.href} class={`mobile-link${active === l.key ? ' active' : ''}`}>{l.label}</a>
        ))}
        <a href="/waitlist" class="mobile-waitlist-btn">Join the Inner Circle</a>
      </div>
    </nav>
  )
}

// Shared Footer Component
export function Footer() {
  const socialLinks = [
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@sanibuilds', label: 'YouTube' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/sanibuilds', label: 'Instagram' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/sanibuilds', label: 'Facebook' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/sanibuilds', label: 'LinkedIn' },
    { icon: 'fab fa-x-twitter', href: 'https://twitter.com/sanibuilds', label: 'X/Twitter' },
    { icon: 'fab fa-github', href: 'https://github.com/sanibuilds', label: 'GitHub' },
    { icon: 'fas fa-envelope', href: 'mailto:hello@sanibuilds.com', label: 'Email' },
    { icon: 'fab fa-whatsapp', href: 'https://whatsapp.com/channel/sanibuilds', label: 'WhatsApp' },
    { icon: 'fab fa-telegram', href: 'https://t.me/sanibuilds', label: 'Telegram' },
  ]
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <span class="logo-sani">SANI</span><span class="logo-builds">BUILDS</span>
          </div>
          <p class="footer-tagline">Building quietly. Moving seriously.</p>
          <p class="footer-copy">&copy; 2025 SANIBUILDS. All rights reserved.</p>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">QUICK LINKS</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/links">Links</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/waitlist">Waitlist</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">FOLLOW ME</h4>
          <div class="footer-social">
            {socialLinks.map(s => (
              <a href={s.href} target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label={s.label}>
                <i class={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
