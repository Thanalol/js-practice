const form = document.querySelector('.form');  
const resultDisplay = document.getElementById('resultDisplay');  
const gagDisplay = document.getElementById('gagDisplay');
const changeColor = document.getElementById('changeColor');


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

    if(age >= 30){
        gagDisplay.textContent = "Damn! You're fucking old."
    } else {
        gagDisplay.textContent = "Lucky! Still a few good years left!"
    }


   
    form.reset();
});
