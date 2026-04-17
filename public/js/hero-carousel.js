// Vanilla JS hero carousel
(function(){
    function isTouch(){ return ('ontouchstart' in window) || navigator.maxTouchPoints > 0; }

    function initCarousel(container){
        if(!container) return;
        const slides = Array.from(container.querySelectorAll('.hero-slide'));
        const dotsWrap = container.querySelector('.carousel-dots');
        const prevBtn = container.querySelector('.carousel-prev');
        const nextBtn = container.querySelector('.carousel-next');
        let idx = 0;
        let interval = null;
        let startX = 0;

        // build dots
        slides.forEach((s,i)=>{
            const b = document.createElement('button');
            b.className = 'w-3 h-3 rounded-full';
            b.setAttribute('aria-label', 'Slide '+(i+1));
            b.dataset.index = i;
            b.addEventListener('click', ()=> go(i));
            dotsWrap.appendChild(b);
        });

        const dots = Array.from(dotsWrap.children);

        function show(i){
            slides.forEach((s, j)=>{
                if(j===i) s.classList.add('active'); else s.classList.remove('active');
            });
            dots.forEach((d, j)=> d.classList.toggle('bg-ghibli-accent-peach', j===i));
            idx = i;
        }

        function prev(){ go((idx -1 + slides.length) % slides.length); }
        function next(){ go((idx +1) % slides.length); }
        function go(i){ stopAutoplay(); show(i); startAutoplay(); }

        // autoplay
        function startAutoplay(){ if(!interval) interval = setInterval(()=> next(), 5000); }
        function stopAutoplay(){ if(interval){ clearInterval(interval); interval = null; } }

        // touch
        container.addEventListener('touchstart', (e)=> { startX = e.touches[0].clientX; stopAutoplay(); }, {passive:true});
        container.addEventListener('touchend', (e)=>{ const endX = e.changedTouches[0].clientX; if(startX - endX > 40) next(); if(endX - startX > 40) prev(); startAutoplay(); }, {passive:true});

        // pointer hover pause for non-touch
        if(!isTouch()){
            container.addEventListener('mouseenter', stopAutoplay);
            container.addEventListener('mouseleave', startAutoplay);
            container.addEventListener('pointermove', (ev)=>{
                // subtle tilt
                const rect = container.getBoundingClientRect();
                const px = (ev.clientX - rect.left) / rect.width; const py = (ev.clientY - rect.top) / rect.height;
                const rx = (py - 0.5) * 6; const ry = (px - 0.5) * -6;
                container.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            });
            container.addEventListener('mouseleave', ()=> container.style.transform = '');
        }

        // keyboard
        window.addEventListener('keydown', (e)=>{ if(e.key === 'ArrowLeft') prev(); if(e.key === 'ArrowRight') next(); });

        // nav buttons (screen-reader visible fallback)
        if(prevBtn) prevBtn.addEventListener('click', prev);
        if(nextBtn) nextBtn.addEventListener('click', next);

        // initial
        show(0); startAutoplay();
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        const container = document.querySelector('.hero-carousel');
        initCarousel(container);
    });
})();