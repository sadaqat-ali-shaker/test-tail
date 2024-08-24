function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.trim() !== '') {
        const userMessage = `<div class="user-message">${userInput}</div>`;
        chatbox.innerHTML += userMessage;

        fetch(`php/chatbot.php?message=${userInput}`)
            .then(response => response.text())
            .then(data => {
                const botMessage = `<div class="bot-message">${data}</div>`;
                chatbox.innerHTML += botMessage;
                chatbox.scrollTop = chatbox.scrollHeight;
            });
    }

    document.getElementById('userInput').value = '';
}
