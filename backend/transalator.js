const translator = {
    en: {
        content: "DON'T FORGET TO BLINK YOUR EYES AFTER",
        contentminute: "MINUTES",
        contentbutton1: "Remind Me!!",
        mainstop: "Stop"
    },
    hindi: {
        content: "इसके बाद अपनी आंखें झपकाना न भूलें",
        contentminute: "मिनट",
        contentbutton1: "मुझे याद दिलाएं!!",
        mainstop: "रोकिये"
    },
};

function switchLanguage(language) {
    // Assuming there are elements with these IDs in the main HTML
    document.getElementById('content').innerText = translator[language].content || '';
    console.log(document.getElementById('content'));
    document.getElementById('contentminute').innerText = translator[language].contentminute || '';
    document.getElementById('contentbutton1').innerText = translator[language].contentbutton1 || '';
    document.getElementById('mainstop').innerText = translator[language].mainstop || '';
}

// Add event listeners to dropdown buttons after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#myDropdown button').forEach(button => {
        button.addEventListener('click', (event) => {
            switchLanguage(event.target.value);
        });
    });
});

// Initially switch to English
switchLanguage("en");
