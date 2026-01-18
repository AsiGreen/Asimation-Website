// Floating Particles Animation
const particleContainer = document.querySelector('.floating-particles');
const particleCount = 50;

function createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(46, 204, 113, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        pointer-events: none;
        animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
    `;
    
    particleContainer.appendChild(particle);
}

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

// Add particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.8;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.5;
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);

// Subtle mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const content = document.querySelector('.center-content');
    content.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth fade in on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('%c⚡ Asimation', 'color: #2ecc71; font-size: 24px; font-weight: 300; letter-spacing: 0.2em;');
console.log('%csoon', 'color: #2ecc71; font-size: 14px; letter-spacing: 0.3em;');
