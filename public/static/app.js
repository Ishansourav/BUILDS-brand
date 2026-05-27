/* ════════════════════════════════════════════════════════════════
   SANIBUILDS – Main App JavaScript
   Three.js 3D Background | Scroll Animations | Forms | Navbar
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Navbar Scroll Behavior ─── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ─── Mobile Menu Toggle ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  /* ─── Three.js 3D Background ─── */
  function initThreeJS() {
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.008);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // ── Stars ──
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 200;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ── Gold Particles ──
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 120;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: 0.08,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ── Torus Knot (Hero 3D Object) ──
    const torusKnotGeo = new THREE.TorusKnotGeometry(6, 1.8, 128, 20, 2, 3);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0x442200,
      metalness: 0.8,
      roughness: 0.3,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(18, 0, -10);
    scene.add(torusKnot);

    // ── Ambient Sphere ──
    const sphereGeo = new THREE.SphereGeometry(3, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0x331100,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(-20, -8, -5);
    scene.add(sphere);

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0x111111, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const goldPoint = new THREE.PointLight(0xFFD700, 2, 50);
    goldPoint.position.set(5, 5, 15);
    scene.add(goldPoint);

    const goldPoint2 = new THREE.PointLight(0xFFAA00, 1, 40);
    goldPoint2.position.set(-10, -5, 10);
    scene.add(goldPoint2);

    // ── Mouse Parallax ──
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', function (e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // ── Resize ──
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });

    // ── Animation Loop ──
    function animate() {
      requestAnimationFrame(animate);

      // Smooth camera follow
      targetX += (mouseX * 2 - targetX) * 0.05;
      targetY += (mouseY * -1 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      // Rotate objects
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.008;
      torusKnot.rotation.z += 0.003;

      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.005;

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

      stars.rotation.y -= 0.0002;

      renderer.render(scene, camera);
    }
    animate();
  }

  // Init Three.js after page load
  window.addEventListener('load', function () {
    setTimeout(initThreeJS, 100);
  });

  /* ─── Scroll Reveal Animations ─── */
  function initScrollReveal() {
    const sections = document.querySelectorAll('.reveal-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
  initScrollReveal();

  /* ─── Waitlist Inline Form (Home Page) ─── */
  const waitlistFormInline = document.getElementById('waitlistFormInline');
  if (waitlistFormInline) {
    waitlistFormInline.addEventListener('submit', async function (e) {
      e.preventDefault();
      const nameInput = document.getElementById('inlineName');
      const emailInput = document.getElementById('inlineEmail');
      const submitBtn = document.getElementById('inlineSubmitBtn');
      if (!nameInput || !emailInput || !submitBtn) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if (!name || !email) return;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
      submitBtn.disabled = true;

      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        });
        const data = await res.json();
        if (data.success) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Joined!';
          submitBtn.style.background = '#25D366';
          nameInput.value = '';
          emailInput.value = '';
        } else {
          throw new Error(data.message || 'Something went wrong.');
        }
      } catch (err) {
        submitBtn.innerHTML = 'Try Again';
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }
    });
  }

  /* ─── Waitlist Page Form ─── */
  const waitlistPageForm = document.getElementById('waitlistPageForm');
  if (waitlistPageForm) {
    waitlistPageForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const nameInput = document.getElementById('waitlistName');
      const emailInput = document.getElementById('waitlistEmail');
      const submitBtn = document.getElementById('waitlistSubmitBtn');
      const statusDiv = document.getElementById('waitlistStatus');
      if (!nameInput || !emailInput || !submitBtn || !statusDiv) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if (!name || !email) return;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
      submitBtn.disabled = true;
      statusDiv.style.display = 'none';

      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        });
        const data = await res.json();
        if (data.success) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> You\'re in!';
          submitBtn.style.background = '#25D366';
          submitBtn.style.color = '#000';
          nameInput.value = '';
          emailInput.value = '';
          statusDiv.innerHTML = '✓ You\'re on the list! Welcome to the inner circle.';
          statusDiv.className = 'form-status success';
          statusDiv.style.display = 'block';
        } else {
          throw new Error(data.message || 'Something went wrong.');
        }
      } catch (err) {
        submitBtn.innerHTML = 'Try Again <i class="fas fa-arrow-right"></i>';
        submitBtn.disabled = false;
        statusDiv.innerHTML = '⚠ Something went wrong. Please try again.';
        statusDiv.className = 'form-status error';
        statusDiv.style.display = 'block';
      }
    });
  }

  /* ─── Contact Page Form ─── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = document.getElementById('contactSubmitBtn');
      const statusDiv = document.getElementById('contactStatus');
      if (!submitBtn || !statusDiv) return;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      statusDiv.style.display = 'none';

      // Simulate sending (frontend-only in Phase 1)
      await new Promise(function (resolve) { setTimeout(resolve, 1200); });

      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = '#25D366';
      submitBtn.style.color = '#000';
      statusDiv.innerHTML = '✓ Message sent! I\'ll get back to you soon.';
      statusDiv.className = 'form-status success';
      statusDiv.style.display = 'block';

      contactForm.reset();
    });
  }

  /* ─── Social Card Color Effect ─── */
  const socialCards = document.querySelectorAll('.social-card[data-hover-color]');
  socialCards.forEach(function (card) {
    const color = card.getAttribute('data-hover-color');
    const icon = card.querySelector('.social-icon');
    card.addEventListener('mouseenter', function () {
      if (icon) icon.style.color = color;
      card.style.borderColor = color + '40';
    });
    card.addEventListener('mouseleave', function () {
      if (icon) icon.style.color = '';
      card.style.borderColor = '';
    });
  });

  /* ─── Link Big Card Color Effect ─── */
  const linkBigCards = document.querySelectorAll('.link-big-card[data-platform-color]');
  linkBigCards.forEach(function (card) {
    const color = card.getAttribute('data-platform-color');
    card.addEventListener('mouseenter', function () {
      card.style.borderColor = color + '50';
    });
    card.addEventListener('mouseleave', function () {
      card.style.borderColor = '';
    });
  });

})();
