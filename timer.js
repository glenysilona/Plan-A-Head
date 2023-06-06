let duration = 1;
let timer;

function startTimer() {
    duration = parseInt(document.getElementById("duration").value) * 60;
    timer = setInterval(runTimer, 1000);
}

function runTimer() {
    if (duration <= 0) {
        clearInterval(timer);
        document.getElementById("timer").style.color = "red";
        return;
    }

    duration--;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    document.getElementById("minutes").innerText = pad(minutes);
    document.getElementById("seconds").innerText = pad(seconds);
}

function stopTimer() {
    clearInterval(timer);
    return;
}

function resetTimer() {
    clearInterval(timer);
    duration = parseInt(document.getElementById("duration").value) * 60;
    document.getElementById("timer").style.color = "black";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
