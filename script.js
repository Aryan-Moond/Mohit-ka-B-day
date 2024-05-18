function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.innerText = message;
    messageElement.classList.remove('fadeIn');
    void messageElement.offsetWidth; // Trigger reflow to restart animation
    messageElement.classList.add('fadeIn');
}
