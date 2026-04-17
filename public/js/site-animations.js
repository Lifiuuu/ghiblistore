document.addEventListener('DOMContentLoaded', function () {
    // 1) Reveal-on-scroll / staggered reveal for elements with reveal-/zoom-in classes
    // also include .card-anim so cards become visible when entering viewport
    const animatedElements = document.querySelectorAll('[class*="reveal-"], .zoom-in, .card-anim');
    if ('IntersectionObserver' in window) {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const delay = 50 * i;
                    setTimeout(() => {
                        // cards use `is-visible`, other revealers use `active`
                        if (entry.target.classList.contains('card-anim')) {
                            entry.target.classList.add('is-visible');
                        } else {
                            entry.target.classList.add('active');
                        }
                        obs.unobserve(entry.target);
                    }, delay);
                }
            });
        }, observerOptions);
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: reveal everything immediately
        animatedElements.forEach(el => {
            if (el.classList.contains('card-anim')) el.classList.add('is-visible'); else el.classList.add('active');
        });
    }

    // 2) Card/tombol interactions: pop + subtle tilt (throttled)
    function isTouchDevice(){ return ('ontouchstart' in window) || navigator.maxTouchPoints > 0; }

    const cards = Array.from(document.querySelectorAll('.card-anim'));
    if (cards.length === 0) {
        Array.prototype.push.apply(cards, Array.from(document.querySelectorAll('.radius-3xl.shadow-soft')));
    }

    cards.forEach(card => {
        if (!card) return;

        // reveal helper: if card itself should reveal, ensure it uses active state
        if (!card.classList.contains('reveal-from-bottom') && !card.classList.contains('zoom-in')) {
            // leave as-is; global observer covers most cases
        }

        if (isTouchDevice()) return; // skip pointer interactions on touch devices

        card.addEventListener('mouseenter', ()=> card.classList.add('is-hover'));
        card.addEventListener('mouseleave', ()=> { card.classList.remove('is-hover'); card.style.transform = ''; });

        // throttle pointermove via rAF and reduce intensity for smoother motion
        let raf = null; let lastRx = 0, lastRy = 0; const maxDeg = 3;
        card.addEventListener('pointermove', (ev) => {
            const rect = card.getBoundingClientRect();
            const px = (ev.clientX - rect.left) / rect.width; const py = (ev.clientY - rect.top) / rect.height;
            const rx = (py - 0.5) * maxDeg; const ry = (px - 0.5) * -maxDeg;
            if (raf) return;
            raf = requestAnimationFrame(()=>{
                raf = null;
                if (Math.abs(rx - lastRx) < 0.05 && Math.abs(ry - lastRy) < 0.05) return;
                lastRx = rx; lastRy = ry;
                const base = card.classList.contains('is-hover') ? ' translateZ(0)' : '';
                card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) ${base}`;
            });
        });

        // Buttons inside card: add pop animation on pointer enter/leave and keyboard focus
        const buttons = Array.from(card.querySelectorAll('.btn-pop'));
        buttons.forEach(btn => {
            btn.addEventListener('pointerenter', ()=> btn.classList.add('is-hover'));
            btn.addEventListener('pointerleave', ()=> btn.classList.remove('is-hover'));
            btn.addEventListener('focus', ()=> btn.classList.add('is-hover'));
            btn.addEventListener('blur', ()=> btn.classList.remove('is-hover'));
        });
    });
});