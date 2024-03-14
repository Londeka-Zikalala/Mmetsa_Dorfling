// Array of paragraphs (each paragraph is an array of sentences)
var paragraphs = [
    ["I hope this brightens your day as you do with all my days. ", "Happy Birthday!!"],
    ["I appreciate you, for being you. ", "I want to thank you for fighting to live. ", "Thank you for fighting for me to live."],
    ["I love you, there are not enough words to express my love for you, but I hope you know that it is a boundless, nuanced and evergrowing love. "],
    ["Is it too soon to make jokes about 30? You are becoming, and I love how that's going so far... that's it. ", "Here's to growing old side by side, Jurema and Nicinha "]
];
// Array of image URLs
var images = ["./images/IMG-20230519-WA0017.jpg", "./images/IMG-20210722-WA0014.jpg", "./images/IMG-20210722-WA0018.jpg", "./images/My-Love-Netflix-Nicinha-and-Jurema-1200x737.jpeg" ];

var currentParagraph = 0;

function nextParagraph() {
    // Get the paragraph and image elements
    var paragraph = document.querySelector(".floating-paragraph");
    var imageDiv = document.querySelector(".images");

    // Clear the previous content
    paragraph.textContent = "";
    imageDiv.innerHTML = "";

    // Set the text of the paragraph to the next paragraph
    for (var i = 0; i < paragraphs[currentParagraph].length; i++) {
        paragraph.textContent += paragraphs[currentParagraph][i] + " ";
    }

    // Set the image source to the next image
    imageDiv.innerHTML = '<img src="' + images[currentParagraph] + '" alt="Image">';

    // Increment the current paragraph index
    currentParagraph = (currentParagraph + 1) % paragraphs.length;
}

// Call nextParagraph once to initialize
nextParagraph();

// Call nextParagraph every 5 seconds
setInterval(nextParagraph, 5000);
