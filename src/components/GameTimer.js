class GameTimer {
  start() {
    this.timer = setInterval(() => {}, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

export default GameTimer();
