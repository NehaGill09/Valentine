document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = ' Its a Yes!   yeahhhhhh \n I LOVE YOUUUUUU ❤️';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    // Move the "No" button to a random position
    moveNoButtonRandomly();

    // Display a response for the "No" button
    document.getElementById('response').innerText = 'Please na say yes ☹️☹️☹️';
});

function moveNoButtonRandomly() {
    const noButton = document.getElementById('noButton');
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
