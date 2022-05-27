const cursor = document.querySelector(".cursor");
const holes = document.querySelectorAll(".hole");
const sound = new Audio("assets/karateChop.mp3");
const scoreElement = document.querySelector(".score span");
let score = 0;

function run() {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  let timer = null;

  const image = document.createElement("img");
  image.classList.add("crab");
  image.src = "assets/crab.svg";

  image.addEventListener("click", () => {
    sound.play();
    score += 10;
    scoreElement.textContent = score;
    image.src = "assets/HitCrab.svg";
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(image);
      run();
    }, 500);
  });

  if (score === 100) {
    alert("newlevel");
  } else hole.appendChild(image);

  timer = setTimeout(() => {
    hole.removeChild(image);

    run();
  }, 1500);
}
run();

// Make the hand follow cursor
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});
