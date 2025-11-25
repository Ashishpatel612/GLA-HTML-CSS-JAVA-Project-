async function getQuote() {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");

    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {
        const response = await fetch( "https://zenquotes.io/api/random");
        const data = await response.json();

        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `- ${data.author}`;
    } catch (error) {
        quoteText.textContent = "Failed to fetch quote.";
        authorText.textContent = "";
    }
}

document.getElementById("new-quote").addEventListener("click", getQuote);

// Load quote when page opens
getQuote();