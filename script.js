
/* Quote Generator*/
const newQuote = () => {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  document.getElementById("quote").textContent = quote.text;
  document.getElementById("author").textContent = quote.author || "Unknown";
};

document.getElementById("new-quote").addEventListener("click", newQuote);

// Load an initial quote
newQuote();

/* FunFact Feature*/
document.getElementById("funfact-button").addEventListener("click", function() {
  let fact = document.getElementById("funfact");
  fact.classList.toggle("show");
});