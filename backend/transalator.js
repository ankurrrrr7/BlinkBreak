document.addEventListener('DOMContentLoaded', () => {
    const backToMainButton = document.getElementById('backToMain');
    if (backToMainButton) {
        backToMainButton.addEventListener('click', () => {
            window.location.href = '/frontend/index.html';
        });
    }
});


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

const languageSelector = document.getElementById('myDropdown');
const content = document.getElementById('content');
const contentMinute = document.getElementById('contentminute');
const contentButton1 = document.getElementById('contentbutton1');
const mainStop = document.getElementById('mainstop');


window.switchLanguage = (language) => {
    console.log(`Switching to language: ${language}`);
    console.log('Translation data:', translator[language]);

    if (language === 'en') {
        content.innerText = translator.en.content;
        contentMinute.innerText = translator.en.contentminute;
        contentButton1.innerText = translator.en.contentbutton1;
        mainStop.innerText = translator.en.mainstop;
    } else if (language === 'hindi') {
        content.innerText = translator.hindi.content;
        contentMinute.innerText = translator.hindi.contentminute;
        contentButton1.innerText = translator.hindi.contentbutton1;
        mainStop.innerText = translator.hindi.mainstop;
    } else {
        console.error('Language not supported:', language);
    }
};

languageSelector.addEventListener("change", (event) => {
   const selectedLanguage = switchLanguage(event.target.value);
   switchLanguage(selectedLanguage);
   localStorage.setItem("setLanguage", selectedLanguage);
});


