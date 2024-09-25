const translator ={
    en :{
        content :"DON'T FORGET TO BLINK YOUR EYES AFTER",
        contentminute: "MINUTES",
        contentbutton1 : "Remind Me!!",
        mainstop: "Stop"
    },
    hindi:{
        content :"इसके बाद अपनी आंखें झपकाना न भूलें",
        contentminute: "मिनट",
        contentbutton1 : "मुझे याद दिलाएं!!",
        mainstop: "रोकिये"
    },
}
function switchLanguage(language){
    document.getElementById('content').innerText = translator[language].content
    document.getElementById('contentminute').innerText = translator[language].contentminute
    document.getElementById('contentbutton1').innerText = translator[language].contentbutton1
    document.getElementById('mainstop').innerText = translator[language].mainstop
}
document.querySelectorAll('#myDropdown button').forEach(button =>{
    button.addEventListener('click',(event)=>{
        switchLanguage(event.target.value);
    })
})
switchLanguage("en")