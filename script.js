// Typing Animation Effect
const textElement = document.querySelector('.typing-text');
const texts = ["Java Developer", "Spring Boot Expert", "Backend Engineer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// Smooth Scroll (Optional compatibility fix)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
