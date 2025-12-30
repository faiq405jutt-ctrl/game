const number = Math.floor(Math.random() * 10) + 1;

function check() {
  const g = document.getElementById("guess").value;
  document.getElementById("result").innerText =
    g == number ? "🎉 Correct!" : "❌ Try again";
}
