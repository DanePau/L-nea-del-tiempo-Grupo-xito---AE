

const entries = document.querySelectorAll('.entry');

const obs = new IntersectionObserver((items) => {
    items.forEach((item, i) => {
        if (item.isIntersecting) {
        setTimeout(() => item.target.classList.add('visible'), i * 140);
        obs.unobserve(item.target);
        }
    });
}, { threshold: 0.08 });

entries.forEach(e => obs.observe(e));