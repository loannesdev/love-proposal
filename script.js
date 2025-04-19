const asnwerOptions = document.querySelector(".answer-options");
const yesButton = document.querySelector("button.yes");
const noButton = document.querySelector("button.no");
let cont = 1;

noButton.addEventListener("click", () => {
  cont++;

  asnwerOptions.style.setProperty("--multiplier", cont);
});

yesButton.addEventListener("click", () => {
  cont = 1;
  asnwerOptions.style.setProperty("--multiplier", cont);

  const title = document.querySelector(".title");
  title.textContent = "Gracias por ser mi san valentín!!! ⸜(｡˃ ᵕ ˂ )⸝♡";

  const videoGif = document.querySelector(".video-gif");
  videoGif.setAttribute("src", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3p2YWd6NjNwN2FtcHp6ZW0wanJmMnJnd3RiNHlpNGV5bjBmb3dxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif");

  asnwerOptions.remove();

  import("https://cdn.jsdelivr.net/npm/canvas-confetti@0.0.3/dist/confetti.browser.min.js")
    .then(() => {
      confetti({
        particleCount: 300,
        spread: 200,
        origin: {
          y: 0.6
        }
      });
    });
},
  {
    once: true
  }
);
