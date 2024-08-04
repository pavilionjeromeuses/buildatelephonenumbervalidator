document.getElementById("check-btn").addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    const validUSNumber = isValidUSNumber(userInput);
    if (validUSNumber) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
        resultsDiv.className = "valid";
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
        resultsDiv.className = "invalid";
    }
}

function clearResults() {
    document.getElementById("results-div").textContent = "";
    document.getElementById("results-div").className = "";
}

function isValidUSNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    return regex.test(number);
}
