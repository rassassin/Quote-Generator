const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  //fetching random quotes from the API and passing it into the JS object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  // SpeechSynthesisUtterance is a web speech API that represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener("click", () => {
  // copying the quote text on copyBtn click
  // writeText property writes the specified text string to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  // twitter btn
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the url
});

quoteBtn.addEventListener("click", randomQuote);
