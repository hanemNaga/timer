class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onstart = callbacks.onstart;
      this.ontick = callbacks.ontick;
      this.oncomplete = callbacks.oncomplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onstart) {
      this.onstart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.oncomplete) {
        this.oncomplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.ontick) {
        this.ontick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
