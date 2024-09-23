let intervalId; // To store the interval ID globally

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
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
        alert("Please enter a valid number of seconds");
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
document.getElementById('main-stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    updateNotification();
})
