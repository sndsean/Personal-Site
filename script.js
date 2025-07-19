function maskEmail(email) {
    if (email.includes("@")) {
    const domain = email.slice(email.indexOf("@"))
    const username = email.slice(0, -domain.length)
    const firstLetter = username.slice(0,1)
    const lastLetter = username.slice(-1);
    const masked = firstLetter + "*".repeat(username.length -2) + lastLetter;
    return masked + domain;
    } else {
        const wordFirst = email.slice(0,1);
        const wordLast = email.slice(-1);
        const fullWord = wordFirst + "*".repeat(email.length -1) + wordLast;
        return fullWord;
    }
  }

const input = document.getElementById("inputText");
const button = document.getElementById("maskButton");
const output = document.getElementById("outputText");

button.addEventListener("click", function() {
    const email = input.value.trim();
    if (email === "") {
        alert("Please enter a word or email address");
        return;
    }
    const maskedEmail = maskEmail(email);
    output.textContent = maskedEmail;
    console.log("Button Clicked")
  });
