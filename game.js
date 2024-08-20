const gameContainer = document.getElementById('game-container');
let score = 0; // Initialize score

function updateScoreDisplay() {
    document.getElementById('score').innerText = 'Score: ' + score;
}

function spawnObject() {
    const object = document.createElement('div');
    object.style.width = '50px';
    object.style.height = '50px';
    object.style.backgroundColor = 'red';
    object.style.position = 'absolute';
    object.style.left = `${Math.random() * (gameContainer.offsetWidth - 50)}px`;
    object.style.top = `${Math.random() * (gameContainer.offsetHeight - 50)}px`;

    object.addEventListener('click', function() {
        gameContainer.removeChild(object);
        score++; // Increment score when object is clicked
        updateScoreDisplay(); // Update the score display
        // Increment score, save result, etc.
    });

    gameContainer.appendChild(object);
}

// Example to spawn an object every 2 seconds
setInterval(spawnObject, 2000);
updateScoreDisplay();