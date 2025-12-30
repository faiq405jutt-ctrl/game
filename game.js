let score = 0;
let time = 10;
let timer;

function startGame() {
  score = 0;
  time = 10;
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = time;
  document.getElementById("btn").disabled = false;

  timer = setInterval(() => {
    time--;
    document.getElementById("time").innerText = time;

    if (time === 0) {
      clearInterval(timer);
      document.getElementById("btn").disabled = true;
      alert("Game Over! Score: " + score);
    }
  }, 1000);
}

function clickBtn() {
  score++;
  document.getElementById("score").innerText = score;
}
