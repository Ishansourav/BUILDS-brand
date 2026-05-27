import { Navbar, Footer } from '../components'

export function aboutPage() {
  return (
    <div class="page-wrapper">
      <canvas id="bg-canvas"></canvas>
      <Navbar active="about" />

      <section class="inner-page-hero">
        <div class="section-container">
          <div class="inner-hero-content">
            <span class="page-badge">ABOUT</span>
            <h1 class="inner-hero-title">
              The Story Behind <span class="text-gold">SANIBUILDS</span>
            </h1>
            <p class="inner-hero-sub">
              A transparent documentation of building in public, one system at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section class="about-story reveal-section">
        <div class="section-container">
          <div class="story-grid">
            <div class="story-image-col">
              <div class="story-img-wrap">
                <img
                  src="https://www.genspark.ai/api/files/s/PoEmJz7i"
                  alt="Sani – Founder"
                  class="story-founder-img"
                />
              </div>
            </div>
            <div class="story-text-col">
              <div class="about-yellow-bar"></div>
              <div class="about-content">
                <h2 class="section-title">EXTENDED BRAND STORY</h2>
                <p class="about-body">
                  SANIBUILDS started as a personal commitment — to build in public, to document the process, and to share the journey without revealing everything too early. It's the intersection of discipline and creativity, where every project, every system, every workflow is a step toward something bigger.
                </p>
                <p class="about-body" style="margin-top: 16px;">
                  What began as notebooks full of sketches and ideas has evolved into a structured approach to building AI systems, creator workflows, and startup experiments — all while maintaining the mystery of what's truly being created.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section class="philosophy-section reveal-section">
        <div class="section-container">
          <div class="section-header centered">
            <h2 class="section-title">FOUNDER PHILOSOPHY</h2>
            <div class="gold-line"></div>
          </div>
          <div class="philosophy-grid">
            {[
              { icon: 'fas fa-brain', title: 'DISCIPLINE', desc: 'Every day is an opportunity to build. No shortcuts. No excuses. The work speaks.' },
              { icon: 'fas fa-crosshairs', title: 'FOCUS', desc: 'One mission at a time. Deep work over shallow activity. Signal over noise.' },
              { icon: 'fas fa-sync-alt', title: 'CONSISTENCY', desc: 'Showing up every single day. The compound effect of small daily actions.' },
              { icon: 'fas fa-lock', title: 'RESTRAINT', desc: 'Not everything needs to be shared immediately. Building quietly can be more powerful.' },
            ].map(p => (
              <div class="philosophy-card">
                <div class="philosophy-icon"><i class={p.icon}></i></div>
                <h3 class="philosophy-title">{p.title}</h3>
                <p class="philosophy-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section class="mission-section reveal-section">
        <div class="section-container">
          <div class="mission-card">
            <div class="mission-badge">MISSION STATEMENT</div>
            <h2 class="mission-title">
              "To document the <span class="text-gold">unfiltered process</span> of building real systems — not the highlight reel, but the actual work that leads to something remarkable."
            </h2>
            <p class="mission-sub">
              SANIBUILDS is proof that you can build remarkable things while being transparent about the process. The goal isn't to impress. It's to inspire through execution.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section class="journey-highlights reveal-section">
        <div class="section-container">
          <div class="section-header centered">
            <h2 class="section-title">JOURNEY HIGHLIGHTS</h2>
            <div class="gold-line"></div>
          </div>
          <div class="highlights-grid">
            {[
              { num: '30+', label: 'Days Building in Public' },
              { num: '9', label: 'Platforms Connected' },
              { num: '6+', label: 'Systems Built' },
              { num: '∞', label: 'Ideas in the Pipeline' },
            ].map(h => (
              <div class="highlight-card">
                <div class="highlight-num">{h.num}</div>
                <div class="highlight-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
