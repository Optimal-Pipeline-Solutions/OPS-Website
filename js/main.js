/* ═══════════════════════════════════════════════════════════════
   OPS Website — Data-Driven GSAP Animation System

   All animations are driven by data attributes:
     data-animate="fade-up"      → fade in + slide up
     data-animate="slide-right"  → fade in + slide from right

   Section headers (.section-tag, .section-title) animate automatically.
   Components with opacity:0 in CSS get animated when they enter the viewport.
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // ── Set background images from data attributes ────────────
    document.querySelectorAll('[data-bg-image]').forEach(section => {
        const img = section.querySelector('.section-bg-image');
        if (img) {
            img.style.backgroundImage = 'url(' + section.dataset.bgImage + ')';
        }
    });


    // ── Hero entrance (one-off timeline) ──────────────────────
    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
        .fromTo('.hero-logo',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo('.hero-tag',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, 0.15)
        .fromTo('.hero-sub',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.35)
        .fromTo('.hero-cta',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5)
        .to('.scroll-indicator', { opacity: 1, duration: 1, ease: 'power2.out' }, 0.8);

    // Hero parallax — fades out only in the last 30% of the hero scroll
    gsap.to('.hero-title', {
        scrollTrigger: { trigger: '#hero', start: '70% top', end: 'bottom top', scrub: 0.5 },
        y: -40, opacity: 0
    });
    gsap.to('.hero-sub', {
        scrollTrigger: { trigger: '#hero', start: '60% top', end: '90% top', scrub: 0.5 },
        y: -20, opacity: 0
    });
    gsap.to('.scroll-indicator', {
        scrollTrigger: { trigger: '#hero', start: '20% top', end: '40% top', scrub: true },
        opacity: 0
    });


    // ── Generic section header reveals ────────────────────────
    gsap.utils.toArray('.section-tag').forEach(el => {
        gsap.to(el, {
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.section-title').forEach(el => {
        gsap.to(el, {
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1
        });
    });


    // ── Data-driven element animations ────────────────────────
    // fade-up: opacity 0→1, translateY 40→0
    gsap.utils.toArray('[data-animate="fade-up"]').forEach((el, i) => {
        // Stagger within sibling groups
        const siblings = el.parentElement.querySelectorAll('[data-animate="fade-up"]');
        const siblingIndex = Array.from(siblings).indexOf(el);

        gsap.to(el, {
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0,
            duration: 0.7,
            delay: siblingIndex * 0.08,
            ease: 'power3.out'
        });
    });

    // slide-right: opacity 0→1, translateX 30→0
    gsap.utils.toArray('[data-animate="slide-right"]').forEach((el, i) => {
        const siblings = el.parentElement.querySelectorAll('[data-animate="slide-right"]');
        const siblingIndex = Array.from(siblings).indexOf(el);

        gsap.to(el, {
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
            opacity: 1, x: 0,
            duration: 0.5,
            delay: siblingIndex * 0.06,
            ease: 'power3.out'
        });
    });


    // ── Stats counter (special — needs onEnter callback) ──────
    gsap.utils.toArray('.ops-stat').forEach(block => {
        const numberEl = block.querySelector('.ops-stat-number');
        if (!numberEl) return;

        const target = parseInt(numberEl.dataset.target);
        const suffix = numberEl.dataset.suffix || '';
        const isZero = numberEl.dataset.isZero === 'true';

        gsap.to(block, {
            scrollTrigger: {
                trigger: block, start: 'top 85%',
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    if (isZero) {
                        gsap.fromTo({ val: 99 }, { val: 99 }, {
                            val: 0, duration: 1.5, ease: 'power2.out',
                            onUpdate: function() { numberEl.textContent = Math.round(this.targets()[0].val) + suffix; },
                            onComplete: function() { numberEl.textContent = '0' + suffix; }
                        });
                    } else {
                        gsap.fromTo({ val: 0 }, { val: 0 }, {
                            val: target, duration: 2, ease: 'power2.out',
                            onUpdate: function() { numberEl.textContent = Math.round(this.targets()[0].val) + suffix; }
                        });
                    }
                }
            },
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
        });
    });


    // ── Horizontal scroll drag ────────────────────────────────
    document.querySelectorAll('.ops-hscroll').forEach(scroller => {
        let isDown = false, startX, scrollLeft;

        scroller.addEventListener('mousedown', e => {
            isDown = true;
            scroller.style.cursor = 'grabbing';
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        });

        scroller.addEventListener('mouseleave', () => { isDown = false; scroller.style.cursor = 'grab'; });
        scroller.addEventListener('mouseup',    () => { isDown = false; scroller.style.cursor = 'grab'; });

        scroller.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            scroller.scrollLeft = scrollLeft - ((e.pageX - scroller.offsetLeft) - startX) * 2;
        });
    });


    // ── Navbar auto-hide ──────────────────────────────────────
    let lastScrollY = 0;
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        start: 0,
        onUpdate: () => {
            const y = window.scrollY;
            if (y > 400 && y > lastScrollY) navbar.classList.add('nav-hidden');
            else navbar.classList.remove('nav-hidden');
            lastScrollY = y;
        }
    });


    // ── Smooth scroll anchors ─────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                gsap.to(window, { scrollTo: { y: target, offsetY: 64 }, duration: 1, ease: 'power3.inOut' });
                const mm = document.getElementById('mobile-menu');
                if (mm && !mm.classList.contains('hidden')) {
                    mm.classList.add('hidden');
                    mm.classList.remove('flex');
                }
            }
        });
    });


    // ── Mobile menu toggle ────────────────────────────────────
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }


    // ── Contact glow parallax ─────────────────────────────────
    gsap.to('.contact-glow', {
        scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom top', scrub: 1 },
        scale: 1.5, opacity: 0.5
    });
});
