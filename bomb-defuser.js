let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let countDown = 10;

let intervalId = setInterval(function() {
    countDown -= 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "Boom";
        timerEl.style.color = "Red";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    console.log(bombDefuserText);
    if (event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0) {
        timerEl.textContent = "Bomb defused";
        timerEl.style.color = "green";
        clearInterval(intervalId);
    }
});