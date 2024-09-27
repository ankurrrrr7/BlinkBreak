document.getElementById('backToMain').addEventListener('click', ()=>{
    window.location.href = '/frontend/index.html';
});

window.addEventListener('load', () => {
    const switchToEnglish = document.getElementById('switchToEnglish');
    const switchToHindi = document.getElementById('switchToHindi');
    const dropdown = document.getElementById('myDropdown');
    const dropButton = document.getElementById('drop');


    // Toggle dropdown
    if (dropButton) {
        dropButton.addEventListener('click', () => {
            dropdown.classList.toggle('show');
        });
    }

    // Add event listeners for language buttons
    if (switchToEnglish) {
        switchToEnglish.addEventListener('click', () => {
            switchLanguage('en');
            dropdown.classList.remove('show'); // Hide dropdown after selection
        });
    }

    if (switchToHindi) {
        switchToHindi.addEventListener('click', () => {
            console.log('Hindi button clicked');
            switchLanguage('hindi');
            
            dropdown.classList.remove('show'); // Hide dropdown after selection
        });
    }
});
