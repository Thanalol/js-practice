const changeColor = {
    red: {backgroundColor: 'red', fontColor: 'white'},
    blue: {backgroundColor: 'blue', fontColor: 'yellow'},
    green: {backgroundColor: 'green', fontColor: 'black'}
};

function applyChangeColor(color) {
    const settings = colorSettings[color];
    document.body.style.backgroundColor = settings.backgroundColor;
    document.body.style.color = settings.fontColor;
}