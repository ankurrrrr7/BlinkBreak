let intervalId; // To store the interval ID globally

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
document.getElementById('opensetting').addEventListener('click', ()=>{
    window.location.href = '/frontend/setting.html';
});

//back to new settings
// handle notification
const mainNotification = ()=>{
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '/logo.png', 
        title: 'Time to Blink!',
        message: 'Don’t forget to blink your eyes to protect them!',
        priority: 2
    });
}
const updateNotification =()=>{
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '/logo.png', 
        title: 'Update',
        message: 'Blink remainder is stopped',
        priority: 2
    });
}
// main click logic 
document.getElementById("main-button").addEventListener("click", () => {
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
    }, user_time * 1000); // Convert seconds to milliseconds

    console.log(`New interval set for ${user_time} seconds.`);
});

//notification stop
document.getElementById('mainstop').addEventListener('click',()=>{
    clearInterval(intervalId);
    updateNotification();
})
// remainder
const remainder = () => {
    // Check if the error message already exists to prevent duplicate messages
    if (!document.getElementById('error-message')) {
        const newChild = document.createElement("div");
        const updateChild = "Please enter a valid number of seconds";
        newChild.textContent = updateChild;

        // Set an ID and styling for the error message
        newChild.id = "error-message";
        newChild.style.color = "red";
        newChild.style.marginTop = "10px";
        newChild.style.fontSize = "14px";

        // Append the error message inside the appropriate section
        const inputChild = document.getElementById("error");
        inputChild.appendChild(newChild);

        setTimeout(()=>{
           inputChild.style.display ='none'
        },3000);
    }
};



