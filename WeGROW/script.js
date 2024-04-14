// QOUTES NI DANI DUGANGI OG BET
const quotes = [
    "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not. - Mark Twain",
    "Let food be thy medicine and medicine be thy food. - Hippocrates",
    "Your diet is a bank account. Good food choices are good investments. - Bethenny Frankel",
    "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison. - Ann Wigmore",
    "Take care of your body. It's the only place you have to live. - Jim Rohn",
    // Add more quotes as needed
];

function displayNextQuote() {
    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Display the quote in the HTML element
    document.getElementById("quote").textContent = quote;
}

// Display 
displayNextQuote();

// Qoute changes every 3 seconds
setInterval(displayNextQuote, 3000);

window.addEventListener('scroll', function() {
    var mainContent = document.getElementById('main-content');
    var contacts = document.getElementById('contacts');
    var header = document.querySelector('.menu-container');
    var scrollPosition = window.scrollY;

    // Check if the scroll position is within main-content or contacts
    if (scrollPosition >= mainContent.offsetTop && 
        scrollPosition > contacts.offsetTop + contacts.offsetHeight) {
        header.style.display = 'none'; // Hide the header when scrolled to main-content or contacts
    } else {
        header.style.display = 'flex'; // Show the header otherwise
    }
});
