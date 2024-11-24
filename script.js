
// Welcome Alert
window.onload = function () {
    alert("Welcome to Abduallah Ali Alabdalmonaiem's Portfolio!");
};

// Project Filtering Placeholder
function filterProjects(category) {
    alert("Filtering projects by: " + category);
    // Logic to filter projects can be added here in the future
}

// Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
