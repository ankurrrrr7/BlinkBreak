const translator = {
  en: {
    content: "DON'T FORGET TO BLINK YOUR EYES AFTER",
    contentminute: "MINUTES",
    contentbutton1: "Remind Me!!",
    mainstop: "Stop",
  },
  hindi: {
    content: "अपनी आंखें झपकाना न भूलें",
    contentminute: "मिनट",
    contentbutton1: "मुझे याद दिलाएं!!",
    mainstop: "रोकिये",
  },
  french: {
    content :"N'OUBLIEZ PAS DE CLIGNOIR LES YEUX APRÈS",
    contentminute: "MINUTES",
    contentbutton1: "Rappelez-moi !!",
    mainstop: "Arrêt"
  },
};

// Cache DOM elements for easy access
const content = document.getElementById("content");
const contentMinute = document.getElementById("contentminute");
const contentButton1 = document.getElementById("contentbutton1");
const mainStop = document.getElementById("mainstop");
const languageSelector = document.getElementById("myDropdown");

// Function to apply language settings
function applyLanguage(language) {
  content.innerText = translator[language].content;
  contentMinute.innerText = translator[language].contentminute;
  contentButton1.innerText = translator[language].contentbutton1;
  mainStop.innerText = translator[language].mainstop;
}

// Set language in storage
function setLanguage(language) {
  chrome.storage.local.set({ selectedLanguage: language });
}

// Get language from storage
function getLanguage() {
  chrome.storage.local.get(["selectedLanguage"], (result) => {
    const language = result.selectedLanguage || "en"; // Default to English
    applyLanguage(language);
    languageSelector.value = language; // Set the dropdown value
  });
}

// Change language on dropdown change
languageSelector.addEventListener("change", function (event) {
  const selectedLanguage = event.target.value;
  setLanguage(selectedLanguage);
  applyLanguage(selectedLanguage);
});

// Load the language when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", getLanguage);
