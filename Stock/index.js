// Sample products and their stock status
const products = {
    "Pizza": "Stock Available",
    "Drinks": "Stock Available",
    "Burger": "Stock Available",
    "Broast": "Out of Stock",
    "French fries": "Out of Stock",
    "Lunch / Dinner": "Out of Stock"
};

// Get references to DOM elements
const searchButton = document.getElementById("button");
const inputField = document.getElementById("input");

// Add event listener to the search button
searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const query = inputField.value.trim(); // Get the search input

    // Check if the product exists and get the stock status
    const stockStatus = products[query] ? products[query] : "Out of Stock";

    // Create a result message container (if it doesn't exist)
    let resultMessage = document.getElementById("resultMessage");
    if (!resultMessage) {
        resultMessage = document.createElement("div");
        resultMessage.id = "resultMessage";
        resultMessage.style.marginTop = "20px"; // For spacing
        document.querySelector(".container").appendChild(resultMessage);
    }

    // Display the stock status
    resultMessage.textContent = `Status: ${stockStatus}`;

    // Change color based on status
    if (stockStatus === "Stock Available") {
        resultMessage.style.color = "green"; // For stock available
    } else if (stockStatus === "Out of Stock") {
        resultMessage.style.color = "red"; // For out of stock
    } else {
        resultMessage.style.color = "orange"; // For product not found
    }
});