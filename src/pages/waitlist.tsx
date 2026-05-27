import { Navbar, Footer } from '../components'

export function waitlistPage() {
  return (
    <div class="page-wrapper">
      <canvas id="bg-canvas"></canvas>
      <Navbar active="" />

      <section class="waitlist-page-section">
        <div class="section-container">
          <div class="waitlist-page-content">
            <div class="waitlist-page-logo">
              <img
                src="https://www.genspark.ai/api/files/s/VbR9jCnd"
                alt="SANIBUILDS Logo"
                class="waitlist-logo-img"
              />
            </div>
            <span class="page-badge">INNER CIRCLE</span>
            <h1 class="waitlist-page-title">
              Follow the Journey <span class="text-gold">Closely.</span>
            </h1>
            <p class="waitlist-page-sub">
              Be the first to know when I reveal what's next. No noise. No spam. Just the signal.
            </p>

            <div class="waitlist-page-card">
              <form id="waitlistPageForm" class="waitlist-page-form" onsubmit="return false;">
                <div class="form-group">
                  <label class="form-label">Your Name</label>
                  <input
                    type="text"
                    id="waitlistName"
                    class="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="waitlistEmail"
                    class="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-full btn-large" id="waitlistSubmitBtn">
                  Join the Inner Circle <i class="fas fa-arrow-right"></i>
                </button>
                <div id="waitlistStatus" class="form-status" style="display:none;"></div>
              </form>
              <p class="waitlist-disclaimer">
                No spam. Unsubscribe anytime. Your email stays private.
              </p>
            </div>

            <div class="waitlist-promise">
              {[
                { icon: 'fas fa-bell', text: 'First to know about new releases' },
                { icon: 'fas fa-eye-slash', text: 'Exclusive behind-the-scenes content' },
                { icon: 'fas fa-shield-alt', text: 'No spam, ever. Pinky promise.' },
              ].map(p => (
                <div class="promise-item">
                  <i class={`${p.icon} promise-icon`}></i>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
