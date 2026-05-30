/* ═══════════════════════════════════════════════════════════════
   OPS Website — GSAP ScrollTrigger Animations
   Apple-style scroll-driven effects
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // ── Hero entrance animations ──────────────────────────────
    const heroTL = gsap.timeline({ delay: 0.3 });

    heroTL
        .fromTo('.hero-logo',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo('.hero-tag',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo('.hero-title',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0.15)
        .fromTo('.hero-sub',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.35)
        .fromTo('.hero-cta',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5)
        .to('.scroll-indicator',
            { opacity: 1, duration: 1, ease: 'power2.out' }, 0.8);

    // ── Hero parallax on scroll ───────────────────────────────
    gsap.to('.hero-title', {
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
        },
        y: -80,
        opacity: 0
    });

    gsap.to('.hero-sub', {
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: '60% top',
            scrub: 0.5
        },
        y: -40,
        opacity: 0
    });

    gsap.to('.scroll-indicator', {
        scrollTrigger: {
            trigger: '#hero',
            start: '20% top',
            end: '40% top',
            scrub: true
        },
        opacity: 0
    });


    // ── Section header reveals ────────────────────────────────
    gsap.utils.toArray('.section-tag').forEach(tag => {
        gsap.to(tag, {
            scrollTrigger: {
                trigger: tag,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.1
        });
    });


    // ── Service cards stagger ─────────────────────────────────
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i % 3 * 0.1,
            ease: 'power3.out'
        });
    });


    // ── Feature pills stagger (Control Room) ──────────────────
    gsap.utils.toArray('.feature-pill').forEach((pill, i) => {
        gsap.to(pill, {
            scrollTrigger: {
                trigger: pill,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: i * 0.06,
            ease: 'power3.out'
        });
    });


    // ── Tech panels reveal ────────────────────────────────────
    gsap.utils.toArray('.tech-panel').forEach((panel, i) => {
        gsap.to(panel, {
            scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });


    // ── Stats counter animation ───────────────────────────────
    gsap.utils.toArray('.stat-block').forEach(block => {
        const numberEl = block.querySelector('.stat-number');
        const target = parseInt(numberEl.dataset.target);
        const suffix = numberEl.dataset.suffix || '';
        const isZero = numberEl.dataset.isZero === 'true';

        gsap.to(block, {
            scrollTrigger: {
                trigger: block,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                onEnter: () => animateCounter(numberEl, target, suffix, isZero)
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    function animateCounter(el, target, suffix, isZero) {
        if (isZero) {
            const counter = { val: 99 };
            gsap.to(counter, {
                val: 0,
                duration: 1.5,
                ease: 'power2.out',
                onUpdate: () => {
                    el.textContent = Math.round(counter.val) + suffix;
                },
                onComplete: () => {
                    el.textContent = '0' + suffix;
                }
            });
        } else {
            const counter = { val: 0 };
            gsap.to(counter, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                    el.textContent = Math.round(counter.val) + suffix;
                }
            });
        }
    }


    // ── Testimonial cards ─────────────────────────────────────
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });


    // ── About office cards slide in ───────────────────────────
    gsap.utils.toArray('.about-office-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });


    // ── Compliance horizontal drag scroll ─────────────────────
    const complianceScroll = document.querySelector('.compliance-scroll');
    if (complianceScroll) {
        let isDown = false;
        let startX, scrollLeft;

        complianceScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            complianceScroll.style.cursor = 'grabbing';
            startX = e.pageX - complianceScroll.offsetLeft;
            scrollLeft = complianceScroll.scrollLeft;
        });

        complianceScroll.addEventListener('mouseleave', () => {
            isDown = false;
            complianceScroll.style.cursor = 'grab';
        });

        complianceScroll.addEventListener('mouseup', () => {
            isDown = false;
            complianceScroll.style.cursor = 'grab';
        });

        complianceScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - complianceScroll.offsetLeft;
            const walk = (x - startX) * 2;
            complianceScroll.scrollLeft = scrollLeft - walk;
        });

        complianceScroll.style.cursor = 'grab';
    }


    // ── Navbar auto-hide on scroll down, show on scroll up ────
    let lastScrollY = 0;
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        start: 0,
        onUpdate: () => {
            const currentY = window.scrollY;
            if (currentY > 400 && currentY > lastScrollY) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollY = currentY;
        }
    });


    // ── Smooth scroll for anchor links ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 64 },
                    duration: 1,
                    ease: 'power3.inOut'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
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


    // ── Contact section parallax glow ─────────────────────────
    gsap.to('.contact-glow', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        scale: 1.5,
        opacity: 0.5
    });

});


/* ── Nav hide/show CSS injection ─────────────────────────────── */
const style = document.createElement('style');
style.textContent = `
    #navbar { transition: transform 0.3s ease; }
    #navbar.nav-hidden { transform: translateY(-100%); }
`;
document.head.appendChild(style);
