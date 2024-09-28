
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                registration.scope
            })
            .catch(error => {
                error;
            });
    });
}
//opening settings in new page
document.addEventListener('DOMContentLoaded', () => {
    const opensettingButton = document.getElementById('opensetting');
    if (opensettingButton) {
        opensettingButton.addEventListener('click', () => {
            window.location.href = '/frontend/setting.html';
        });
    }
});

// mainNotification and updateNotification functions
const mainNotification = () => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '/logo.png', 
        title: 'Time to Blink!',
        message: 'Don’t forget to blink your eyes to protect them!',
        priority: 2
    });
}

const updateNotification = () => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '/logo.png', 
        title: 'Update',
        message: 'Blink reminder is stopped',
        priority: 2
    });
}

// Main click logic
let warningShow = false;
let intervalId = null;

// Wait until the DOM is fully loaded to attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    const contentButton = document.getElementById("contentbutton1");
    const stopButton = document.getElementById("mainstop");

    // Ensure the button exists in the DOM before attaching the event listener
    if (contentButton) {
        contentButton.addEventListener("click", () => {
            // Get the input value in seconds
            const input_value = document.getElementById('input-values').querySelector('input').value;
            const user_time = parseInt(input_value);

            if (!user_time || isNaN(user_time) || user_time <= 0) {
                remainder();
                return;
            }

            // Clear the previous interval, if one exists
            if (intervalId) {
                clearInterval(intervalId);
                console.log("Previous interval cleared.");
            }
            
           
            intervalId = setInterval(() => {
                mainNotification();
            }, user_time * 60000); // Convert seconds to milliseconds

           console.log(update()); 
        });
    }

    // Stop notification logic
    if (stopButton) {
        stopButton.addEventListener('click', () => {
            if (intervalId) {
                clearInterval(intervalId);
                updateNotification();
                console.log("Interval stopped.");
            } else {
                console.log("No interval to stop.");
            }
        });
    } else {
        console.log("The mainstop element is not found in the DOM.");
    }
});

// Remainder function
const remainder = () => {
    // Check if the error message already exists to prevent duplicate messages
    if (!document.getElementById('error-message')) {
        const newChild = document.createElement("div");
        newChild.id = "error-message";
        newChild.textContent = "Please enter a valid number of seconds";

        // Set styling for the error message
        newChild.style.color = "red";
        newChild.style.marginTop = "10px";
        newChild.style.fontSize = "14px";

        // Append the error message inside the appropriate section
        const inputChild = document.getElementById("error");
        inputChild.appendChild(newChild);

        if (!warningShow) {
            warningShow = true; // Set this to true

            // Hide the error message after 3 seconds
            setTimeout(() => {
                newChild.remove(); // Remove the specific error message
                warningShow = false; // Reset the flag so the message can show again if needed
            }, 3000);
        }
    }
};

const update =()=>{
    if(document.getElementById("update-message")){
        const newChild = document.createElement("div");
        newChild.id = "update-message";
        newChild.textContent ="Your Remainder has been set!!"
    
        newChild.style.color = "red";
        newChild.style.marginTop = "10px";
        newChild.style.fontSize = "14px";

        const inputChild = document.getElementById("update");
        inputChild.append(newChild)
        
        
        if (!warningShow) {
            warningShow = true; // Set this to true

            // Hide the error message after 3 seconds
            setTimeout(() => {
                newChild.remove(); // Remove the specific error message
                warningShow = false; // Reset the flag so the message can show again if needed
            }, 3000);
        };

    }
}