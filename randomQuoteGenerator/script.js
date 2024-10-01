const quoteButton = document.getElementById("quoteButton");
const quoteDisplay = document.getElementById("quoteDisplay")

const quotes = [
    "Stay hungry, stay foolish.",
    "Simplicity is the ultimate sophistication.",
    "Dream big. Start small. Act now.",
    "What we think, we become.",
    "Life is short, make it sweet."
];

document.getElementById('quoteButton').addEventListener('click', function() {
    
    const randomQuote = Math.floor(Math.random() * quotes.length);

    quoteDisplay.textContent = quotes[randomQuote];
    quoteDisplay.style.display = 'block';
});