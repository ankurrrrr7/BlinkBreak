document.addEventListener('DOMContentLoaded', () => {
    const contentButton = document.getElementById("contentbutton1");
    const stopButton = document.getElementById("mainstop");

    if (contentButton) {
        contentButton.addEventListener("click", () => {
            const inputValue = document.getElementById('input-values').querySelector('input').value;
            const userTime = parseInt(inputValue);

            if (!userTime || isNaN(userTime) || userTime <= 0) {
                showError("Please enter a valid number of minutes");
                return;
            }

            chrome.runtime.sendMessage({action: 'startNotifications', time: userTime}, response => {
                if (response.status === 'Notifications started') {
                    showUpdate("Your reminder has been set for " + userTime + " minutes!");
                }
            });
        });
    }

    if (stopButton) {
        stopButton.addEventListener('click', () => {
            chrome.runtime.sendMessage({action: 'stopNotifications'}, response => {
                if (response.status === 'Notifications stopped') {
                    showUpdate("Blink reminder has been stopped.");
                }
            });
        });
    }
});

function showError(message) {
    showMessage(message, 'error-message', 'error');
}

function showUpdate(message) {
    showMessage(message, 'update-message', 'update');
}

function showMessage(message, id, containerId) {
    const container = document.getElementById(containerId);
    if (!document.getElementById(id)) {
        const messageElement = document.createElement("div");
        messageElement.id = id;
        messageElement.textContent = message;
        messageElement.style.color = "red";
        messageElement.style.marginTop = "10px";
        messageElement.style.fontSize = "14px";
        container.appendChild(messageElement);

        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}