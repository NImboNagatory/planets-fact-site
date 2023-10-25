document.addEventListener("DOMContentLoaded", function () {
    const dotContainer = document.getElementById('dot-container');
    const numDots = 200; // You can adjust the number of dots.

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Generate random dot size and position
        const size = Math.floor(Math.random() * 10) + 5; // Random size between 5 and 25 pixels
        const x = Math.random() * (dotContainer.offsetWidth - size);
        const y = Math.random() * (dotContainer.offsetHeight - size);

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor = "#fff";
        dot.style.opacity = "0.2"
        dot.style.borderRadius = '50%';
        dot.style.position = 'absolute';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        dotContainer.appendChild(dot);
    }

});
