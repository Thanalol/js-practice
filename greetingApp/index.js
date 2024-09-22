const form = document.querySelector('.form');  
const resultDisplay = document.getElementById('resultDisplay');  

form.addEventListener('submit', function(event) {
    event.preventDefault();  
    
    const name = document.getElementById('nameInput').value;
    const surname = document.getElementById('surnameInput').value;
    const age = document.getElementById('ageInput').value;
    const hometown = document.getElementById('hometownInput').value;
    const nationality = document.getElementById('nationalityInput').value;
    const music = document.getElementById('musicInput').value;

   
    const message = `Hello ${name} ${surname}, a ${age}-year-old from ${hometown}! 
    It's awesome that you are from ${nationality}, and you love listening to ${music}.`;

  
    resultDisplay.textContent = message;

   
    form.reset();
});
