const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Check if input is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Add click event to mark as completed
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
        });
        
        // Create delete button
        const span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for "×" symbol
        span.classList.add("delete-btn");
        
        // Add delete functionality
        span.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent the list item click event
            li.classList.add("fade-out"); // Add fade-out animation
            li.addEventListener("animationend", () => li.remove()); // Remove item after animation ends
        });
        
        // Append delete button to list item and list item to container
        li.appendChild(span);
        listContainer.appendChild(li);
        
        // Clear the input box
        inputBox.value = "";
    }
}

// Trigger addTask on pressing Enter
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
