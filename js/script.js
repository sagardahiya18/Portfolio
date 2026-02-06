document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(navToggle && navLinks){
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Highlight active link based on current file
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if(a.getAttribute('href') === current) a.classList.add('active');
    });

    // Skill card hover (uses CSS class)
    document.querySelectorAll('.skill-card').forEach(skill => {
        skill.addEventListener('mouseover', () => skill.classList.add('hover'));
        skill.addEventListener('mouseout', () => skill.classList.remove('hover'));
    });

    // Project card interactivity
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('expanded'));
    });

    // Contact form demo handler
    const form = document.querySelector('.contact-form');
    if(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Sending...';
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = original;
                form.reset();
                const msg = document.createElement('div');
                msg.textContent = 'Message sent (demo)';
                msg.style.cssText = 'text-align:center;margin-top:10px;color:#38bdf8;';
                form.appendChild(msg);
                setTimeout(() => msg.remove(), 2400);
            }, 800);
        });
    }

    // Close nav with Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && navLinks && navLinks.classList.contains('open')){
            navLinks.classList.remove('open');
            if(navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
