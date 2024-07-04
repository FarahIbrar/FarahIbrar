const fs = require('fs');
const quotes = require('./quotes.json');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Generate random quote
const randomQuote = getRandomQuote();
const markdownContent = `### Random Quote\n\n> "${randomQuote.quote}"\n\n- ${randomQuote.author}`;

// Write to file
fs.writeFileSync('random_quote.md', markdownContent);
