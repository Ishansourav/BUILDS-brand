import { Navbar, Footer } from '../components'

export function contactPage() {
  return (
    <div class="page-wrapper">
      <canvas id="bg-canvas"></canvas>
      <Navbar active="contact" />

      <section class="inner-page-hero">
        <div class="section-container">
          <div class="inner-hero-content">
            <span class="page-badge">CONTACT</span>
            <h1 class="inner-hero-title">
              Let's Build Something <span class="text-gold">Great Together</span>
            </h1>
            <p class="inner-hero-sub">
              Collaboration • Sponsorship • Brand Work • Startup Networking
            </p>
          </div>
        </div>
      </section>

      <section class="contact-page-section reveal-section">
        <div class="section-container">
          <div class="contact-page-grid">
            {/* Left: Options */}
            <div class="contact-options-col">
              <h2 class="contact-options-title">What I'm open to:</h2>
              {[
                { icon: 'fas fa-handshake', title: 'COLLABORATION', desc: "Let's build and grow together. If you're working on something meaningful, I want to hear about it." },
                { icon: 'fas fa-star', title: 'SPONSORSHIP', desc: 'Partner with me for impact and reach. My audience values authenticity and depth.' },
                { icon: 'fas fa-paint-brush', title: 'BRAND WORK', desc: 'Create content that connects and converts. I craft authentic narratives for brands that align with my values.' },
                { icon: 'fas fa-users', title: 'STARTUP NETWORKING', desc: 'Open to meaningful startup conversations. If you are building something serious, let\'s talk.' },
              ].map(item => (
                <div class="collab-item-large">
                  <div class="collab-icon-large"><i class={item.icon}></i></div>
                  <div class="collab-text-large">
                    <div class="collab-title-large">{item.title}</div>
                    <div class="collab-desc-large">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <div class="contact-form-col">
              <div class="contact-form-card">
                <h2 class="contact-form-title">Send a Message</h2>
                <p class="contact-form-sub">
                  Or reach directly at{' '}
                  <a href="mailto:hello@sanibuilds.com" class="text-gold">hello@sanibuilds.com</a>
                </p>
                <form id="contactForm" class="contact-form" onsubmit="return false;">
                  <div class="form-group">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      id="contactName"
                      class="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      id="contactEmail"
                      class="form-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Type of Collaboration</label>
                    <select id="contactType" class="form-input form-select">
                      <option value="">Select type...</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="brand-work">Brand Work</option>
                      <option value="startup">Startup Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Message</label>
                    <textarea
                      id="contactMessage"
                      class="form-input form-textarea"
                      placeholder="Tell me about what you're building..."
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-full" id="contactSubmitBtn">
                    Send Message <i class="fas fa-paper-plane"></i>
                  </button>
                  <div id="contactStatus" class="form-status" style="display:none;"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
