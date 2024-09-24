console.log('Script loaded');


const changeColor = {
    red: { backgroundColor: 'red', fontColor: 'white' },
    blue: { backgroundColor: 'blue', fontColor: 'yellow' },
    green: { backgroundColor: 'green', fontColor: 'black' }
};


function applyChangeColor(color) {
    const settings = changeColor[color]; 
    document.body.style.backgroundColor = settings.backgroundColor;
    document.body.style.color = settings.fontColor;
}


document.getElementById('red').addEventListener('click', function() {
    applyChangeColor('red');
});

document.getElementById('blue').addEventListener('click', function() {
    applyChangeColor('blue');
});

document.getElementById('green').addEventListener('click', function() {
    applyChangeColor('green');
});


document.getElementById('random').addEventListener('click', function() {
    const colorNames = Object.keys(changeColor); 
    const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)]; 
    applyChangeColor(randomColor); 
});
