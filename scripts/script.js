// Made by: robert grijalva
// i wrote notes on the code to help me with pseudocode / i hope it helps you too

let previousNames = []; // Array to store the previous 5 names
let generatedNameBtn = document.getElementById("generate-name-button"); // Get the button element
let NameDisplay = document.getElementById("random-name-display"); // Get the display element
let previousNamesDisplay = document.getElementById("previous-names-display"); // Get the display element
let namesData = null; // Cache the names data

// Fetch data from the file (only once)
function studentData() {
    return fetch("../data/data.json")
        .then(response => response.json())
        .then(data => {
            namesData = data.dataName; // Cache the fetched data (array of name objects)
            console.log(data);
            return data;
        });
}

function getRandomName(names) {// Get a random name from the names array
    const randomIndex = Math.floor(Math.random() * names.length);
    // Create a full name by combining firstName and lastName
    const fullName = `
        <div>
            <p><strong>Name:</strong> ${names[randomIndex].firstName} ${names[randomIndex].lastName}</p>
            <p><strong>Work Email:</strong> ${names[randomIndex].workEmail}</p>
            <p><strong>Personal Email:</strong> ${names[randomIndex].personalEmail}</p>
        </div>
    `;
    return fullName;
}

function updatePreviousNames(name) {
    if (previousNames.length >= 5) {
        previousNames.shift(); // Remove the oldest name if there are already 5 names
    }
    previousNames.push(name);// Add the new name to the array
    previousNamesDisplay.innerHTML = previousNames.join(' ');
}

generatedNameBtn.addEventListener("click", () => {
    studentData().then(data => {
        const randomName = getRandomName(namesData);
        NameDisplay.innerHTML = randomName;
        updatePreviousNames(randomName);
    });
});

studentData(); // Initial fetch


