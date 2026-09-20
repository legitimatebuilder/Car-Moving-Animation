let title = document.querySelector('.title-container');
console.log(title);

gsap.from('.title-container', { duration: 1, y: '-100%', ease: 'bounce' });