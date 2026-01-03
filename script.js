// Typing Animation Effect
// const textElement = document.querySelector('.typing-text');
// const texts = ["Java Developer", "Spring Boot Expert", "Backend Engineer"];
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// (function type() {
//     if (count === texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     textElement.textContent = letter;
//     if (letter.length === currentText.length) {
//         count++;
//         index = 0;
//         setTimeout(type, 2000); // Pause before next word
//     } else {
//         setTimeout(type, 100); // Typing speed
//     }
// })();

// Smooth Scroll (Optional compatibility fix)
/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             const targetId = this.getAttribute('href');
//             const target = document.querySelector(targetId);

//             if (target) {
//                 e.preventDefault();
//                 const yOffset = -80; // navbar height
//                 const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//                 window.scrollTo({ top: y, behavior: 'smooth' });
//             }
//         });
//     });
// });


/* ===============================
   CODE BACKGROUND TYPING EFFECT
================================ */

const codeLines = [
`public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`,
`@RestController
class UserController {

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }
}`,
`SELECT * FROM users WHERE status = 'ACTIVE';`,
`docker build -t backend-app .`,
`docker run -p 8080:8080 backend-app`
];

const codeElement = document.querySelector(".code-text");

let lineIndex = 0;
let charIndex = 0;

function typeCode() {
    if (!codeElement) return;

    if (charIndex < codeLines[lineIndex].length) {
        codeElement.textContent += codeLines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeCode, 30);
    } else {
        setTimeout(() => {
            codeElement.textContent += "\n\n";
            lineIndex = (lineIndex + 1) % codeLines.length;
            charIndex = 0;
            typeCode();
        }, 800);
    }
}

typeCode();



