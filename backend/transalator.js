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

 window.switchLanguage = function(language) {
    const content = document.getElementById('content');
    const contentMinute = document.getElementById('contentminute');
    const contentButton1 = document.getElementById('contentbutton1');
    const mainStop = document.getElementById('mainstop');

    console.log(`Switching to language: ${language}`);
    console.log('Translation data:', translator[language]);


    if (translator[language]) {
        if (content) {
            content.innerText = translator[language].content;
            console.log('Updated content:', content.innerText);
        }
        if (contentMinute) {
            contentMinute.innerText = translator[language].contentminute;
            console.log('Updated contentMinute:', contentMinute.innerText);
        }
        if (contentButton1) {
            contentButton1.innerText = translator[language].contentbutton1;
            console.log('Updated contentButton1:', contentButton1.innerText);
        }
        if (mainStop) {
            mainStop.innerText = translator[language].mainstop;
            console.log('Updated mainStop:', mainStop.innerText);
        }
    } else {
        console.error('Language not found:', language);
    }
}
