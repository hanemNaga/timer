const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const circle = document.querySelector("circle");
const radius = circle.getAttribute("r");
const perimeter = 2 * radius * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration = 0;

let timer1 = new Timer(durationInput, startButton, pauseButton, {
  onstart(totalDuration) {
    duration = totalDuration;
  },
  ontick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  oncomplete() {
    console.log("completed");
  },
});
