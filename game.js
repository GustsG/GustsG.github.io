document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    let score = 0; // Initialize score

    function updateScoreDisplay() {
        document.getElementById('score').innerText = 'Score: ' + score;
    }

    let timeLeft = 30; // Time in seconds
    const timerDisplay = document.getElementById('timer');

    // Function to start the countdown timer
    function startTimer(duration) {
        timerDisplay.innerText = 'Timer: ' + duration;
        const timer = setInterval(function() {
            duration--;
            timerDisplay.innerText = 'Timer: ' + duration;

            if (duration <= 0) {
                clearInterval(timer);
                saveScore(score); // Save the score right before redirecting
                window.location.href = 'gameOver.html?score=' + score; // Pass the score as a query parameter
            }
        }, 1000);
    }

    function spawnObject() {
        const object = document.createElement('div');
        object.style.width = '50px';
        object.style.height = '50px';
        object.style.backgroundColor = 'red';
        object.style.position = 'absolute';
        object.style.left = `${Math.random() * (gameContainer.offsetWidth - 50)}px`;
        object.style.top = `${Math.random() * (gameContainer.offsetHeight - 50)}px`;

        const popIn = Math.random() > 0.5;
        if (popIn) {
            object.className = 'pop-in';
        } else {
            object.className = 'moving';
        }

        object.addEventListener('click', function() {
            score++;
            updateScoreDisplay();
            gameContainer.removeChild(object);
        });

        gameContainer.appendChild(object);
    }

    function saveScore(finalScore) {
        const currentScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        const newScore = { score: finalScore, timestamp: new Date().toISOString() };
        currentScores.push(newScore);
        const sortedScores = currentScores.sort((a, b) => b.score - a.score).slice(0, 5);
        localStorage.setItem('leaderboard', JSON.stringify(sortedScores));
    }

    setInterval(spawnObject, 2000);
    startTimer(timeLeft); // Start the countdown timer
    updateScoreDisplay();
});