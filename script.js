const music = document.getElementById("bgMusic");

function showMessage() {
  music.volume = 0.7;
  music.play();

  startCinematicIntro();

  createConfetti();

  setTimeout(() => {
    const secret = document.getElementById("secretMessage");

    secret.innerHTML = `
            <div class="terminal">
                <p>> Scanning Üzeyir...</p>

                <p>> Smile level: 100%</p>

                <p>> Friendship Status: LEGENDARY 👑</p>

                <p>> Birthday Mode Activated 🎂</p>

                <h3>
                    Doğum günün mübarək, Üzeyir! 🔥
                </h3>
            </div>
        `;
  }, 4200);
}

function startCinematicIntro() {
  const cinematic = document.getElementById("cinematic");

  const text = document.getElementById("cinematicText");

  const lines = [
    "Initializing Birthday Protocol...",

    "Loading Memories...",

    "Scanning Smile Level...",

    "Activating Üzeyir Mode...",

    "WELCOME LEGEND 👑",
  ];

  cinematic.classList.add("active");

  let index = 0;

  text.innerHTML = lines[index];

  const interval = setInterval(() => {
    index++;

    if (index < lines.length) {
      text.innerHTML = lines[index];
    } else {
      clearInterval(interval);

      setTimeout(() => {
        cinematic.classList.remove("active");
      }, 1000);
    }
  }, 800);
}

function createConfetti() {
  for (let i = 0; i < 180; i++) {
    let confetti = document.createElement("span");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    confetti.style.fontSize = Math.random() * 18 + 12 + "px";

    confetti.innerHTML = ["🎉", "🎂", "🔥", "👑", "✨", "🎊"][
      Math.floor(Math.random() * 6)
    ];

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
