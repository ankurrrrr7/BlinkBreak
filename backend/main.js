import { handleNotification } from "./notification";

let intervalId; // To store the interval ID globally

document.getElementById("main-button").addEventListener("click", () => {
    // Get the input value in seconds
    const input_value = document.getElementById('input-values').querySelector('input').value;
    const user_time = parseInt(input_value); // Convert to an integer

    // Validate input: must be a number greater than 0
    if (!user_time || isNaN(user_time) || user_time <= 0) {
        alert("Please enter a valid number of seconds");
        return;
    }

    // Clear the previous interval, if one exists
    if (intervalId) {
        clearInterval(intervalId);
        console.log("Previous interval cleared.");
    }

    // Set a new interval that logs "check" every user_time seconds (multiplied by 1000 to get milliseconds)
    intervalId = setInterval(() => {
        handleNotification();
    }, user_time * 1000); // Convert seconds to milliseconds

    console.log(`New interval set for ${user_time} seconds.`);
});
