// Timer for Date
const targetDate = new Date("2024-09-24T23:59:00");

function updateTimer() {
  const now = new Date();
  const elapsedTime = now - targetDate;

  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = 
  `<strong>${days}</strong> Tage <strong>${hours}</strong> Stunden <strong>${minutes}</strong> Minuten <strong>${seconds}</strong> Sekunden`;
}

setInterval(updateTimer, 1000);

updateTimer();

// Love Animation Body Background
const heartButton = document.querySelector(".MH-heart-button");
const body = document.body;

heartButton.addEventListener("click", () => {
    body.classList.add('love');
});

// Click counter 
const button = document.querySelector(".MH-heart-button");
const countDisplay = document.getElementById('countDisplay');

// Cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Click Count
let clickCount = parseInt(getCookie('clickCount')) || 0;
countDisplay.innerText = `${clickCount}`;

button.addEventListener('click', function() {
    clickCount++;
    countDisplay.innerText = `${clickCount}`;
    setCookie('clickCount', clickCount, 3); // 3 days cookie
});

// Click Animation Trigger
button.addEventListener('click', () => {
  button.classList.add('clicked');

  setTimeout(() => {
    button.classList.remove('clicked');
  }, 300);
});

// Console Message 
function loveReminder(interval) {
    setInterval(() => {
        console.log("I lieb die mehr, Lisa <3");
    }, interval);
}

loveReminder(3000);