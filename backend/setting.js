document.getElementById('backToMain').addEventListener('click',()=>{
    window.location.href = '/frontend/index.html';
});

// dropdown menu
document.getElementById('drop').addEventListener('click',()=>{
    document.getElementById('myDropdown').classList.toggle("show");
})