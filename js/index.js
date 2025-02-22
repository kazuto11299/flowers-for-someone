const title = document.querySelector('.title');
const text = 'I Have A Surprise For U'; // Adjust case as needed
const words = text.split(' ');

words.forEach((word, wordIndex) => {
  // Create a span for the word with white-space: nowrap to prevent line breaks within the word
  const wordSpan = document.createElement('span');
  wordSpan.style.whiteSpace = 'nowrap';

  // Split the word into characters and create spans for each character
  word.split('').forEach((char) => {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    wordSpan.appendChild(charSpan);
  });

  // Append the word span to the title
  title.appendChild(wordSpan);

  // Add a space span after the word (except for the last word)
  if (wordIndex < words.length - 1) {
    const spaceSpan = document.createElement('span');
    spaceSpan.style.marginRight = '20px'; // Maintain existing spacing
    title.appendChild(spaceSpan);
  }
});

// Select all character spans (nested inside word spans) for animation
const textElements = document.querySelectorAll('.title span span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
