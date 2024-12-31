document.addEventListener('DOMContentLoaded', () => {
    // Create stars
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${1 + Math.random() * 2}s`;
        stars.appendChild(star);
    }

    // Create hearts
    const hearts = document.querySelector('.hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        hearts.appendChild(heart);
    }

    // Show message card with delay
    setTimeout(() => {
        document.querySelector('.message-card').classList.add('show');
    }, 1500);
});