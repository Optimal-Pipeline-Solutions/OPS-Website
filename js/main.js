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

    // ── Enhancement feature flags ─────────────────────────────────
    // Set any flag to false to disable that enhancement instantly.
    const FX = {
        wordSplitHero:   true,  // 1. Word-by-word stagger on hero headline
        gradientShimmer: true,  // 2. Slow shimmer on "Ensuring compliance." text
        parallaxImages:  true,  // 3. Parallax drift on section background photos
        pillStagger:     true,  // 4. Individual cascade on Operations Expertise pills
        statsCountUp:    true,  // 5. CountUp on automation + case study stat numbers
        heroGridDrift:   true,  // 6. Slow background drift on hero grid overlay
    };


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
        .fromTo('.hero-sub',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.35)
        .fromTo('.hero-cta',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5)
        .to('.scroll-indicator', { opacity: 1, duration: 1, ease: 'power2.out' }, 0.8);

    if (FX.wordSplitHero) {
        heroTL
            .set('.hero-title', { opacity: 1 }, 0.15)
            .fromTo('.hero-word', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out' }, 0.15);
    } else {
        heroTL.fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0.15);
    }

    // Hero parallax — fade out on scroll, fade back in on reverse
    gsap.fromTo('.hero-logo',
        { y: 0, opacity: 1 },
        { y: -30, opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.5 } }
    );
    gsap.fromTo('.hero-tag',
        { y: 0, opacity: 1 },
        { y: -40, opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: '80% top', scrub: 0.5 } }
    );
    gsap.fromTo('.hero-title',
        { y: 0, opacity: 1 },
        { y: -80, opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.5 } }
    );
    gsap.fromTo('.hero-sub',
        { y: 0, opacity: 1 },
        { y: -40, opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: '80% top', scrub: 0.5 } }
    );
    gsap.fromTo('.hero-cta',
        { y: 0, opacity: 1 },
        { y: -20, opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: '60% top', scrub: 0.5 } }
    );
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


    // ── Navbar always visible ─────────────────────────────────


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


    // ═══════════════════════════════════════════════════════════
    // ENHANCEMENTS — toggle via FX flags at top of file
    // ═══════════════════════════════════════════════════════════

    // FX 2 + 6: CSS-injected animations (gradient shimmer / hero grid drift)
    if (FX.gradientShimmer || FX.heroGridDrift) {
        const css = document.createElement('style');
        let rules = '';
        if (FX.gradientShimmer) rules += `
            @keyframes gradientShimmer {
                0%, 100% { background-position: 0% 50%; }
                50%       { background-position: 100% 50%; }
            }
            .text-gradient { background-size: 200% 200%; animation: gradientShimmer 5s ease infinite; }`;
        if (FX.heroGridDrift) rules += `
            @keyframes gridDrift {
                0%, 100% { background-position: 0px 0px; }
                33%       { background-position: 8px 4px; }
                66%       { background-position: -4px 8px; }
            }
            .hero-grid { animation: gridDrift 22s ease-in-out infinite; }`;
        css.textContent = rules;
        document.head.appendChild(css);
    }

    // FX 3: Parallax on section background photos
    if (FX.parallaxImages) {
        document.querySelectorAll('[data-parallax-bg]').forEach(el => {
            gsap.fromTo(el,
                { backgroundPositionY: '30%' },
                { backgroundPositionY: '70%', ease: 'none',
                  scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 } }
            );
        });
        gsap.utils.toArray('.section-bg-image').forEach(el => {
            gsap.fromTo(el,
                { backgroundPositionY: '30%' },
                { backgroundPositionY: '70%', ease: 'none',
                  scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 } }
            );
        });
    }

    // FX 4: Individual pill cascade on [data-stagger-pills] containers
    gsap.utils.toArray('[data-stagger-pills]').forEach(container => {
        const items = container.querySelectorAll('.ops-pill-tag, .industry-tag');
        if (FX.pillStagger && items.length) {
            gsap.fromTo(items,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out',
                  scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none reverse' } }
            );
        } else {
            gsap.fromTo(container,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: container, start: 'top 88%', toggleActions: 'play none none reverse' } }
            );
        }
    });

    // FX 5: CountUp on elements with data-count-target
    if (FX.statsCountUp) {
        document.querySelectorAll('[data-count-target]').forEach(el => {
            const target  = parseInt(el.dataset.countTarget);
            const suffix  = el.dataset.countSuffix || '';
            const isComma = el.dataset.countFormat === 'comma';
            ScrollTrigger.create({
                trigger: el, start: 'top 85%', once: true,
                onEnter() {
                    gsap.fromTo({ val: 0 }, { val: target }, {
                        duration: 2, ease: 'power2.out',
                        onUpdate() {
                            const v = Math.round(this.targets()[0].val);
                            el.textContent = (isComma ? v.toLocaleString() : v) + suffix;
                        },
                        onComplete() {
                            el.textContent = (isComma ? target.toLocaleString() : target) + suffix;
                        }
                    });
                }
            });
        });
    }
});
