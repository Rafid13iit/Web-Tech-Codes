document.addEventListener("DOMContentLoaded", function() {
    // Initial page load
    loadPage("home");

    // Navigation event listener
    document.querySelector("nav").addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const page = event.target.getAttribute("href").substring(1);
            loadPage(page);
        }
    });
});

function loadPage(page) {
    const mainContent = document.getElementById("main-content");
    switch (page) {
        case "home":
            mainContent.innerHTML = "<h2>Home Page</h2><p>Welcome to our SPA!</p>";
            break;
        case "about":
            mainContent.innerHTML = "<h2>About Us</h2><p>We are a company dedicated to providing the best services.</p>";
            break;
        case "services":
            mainContent.innerHTML = "<h2>Our Services</h2><ul><li>Web Design</li><li>Graphic Design</li><li>SEO Optimization</li></ul>";
            break;
        case "contact":
            mainContent.innerHTML = `
                <h2>Contact Us</h2>
                <form id="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea><br>
                    <input type="submit" value="Submit">
                </form>
                <div id="contact-message"></div>
            `;
            document.getElementById("contact-form").addEventListener("submit", submitForm);
            break;
        default:
            mainContent.innerHTML = "<h2>Page Not Found</h2>";
    }
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Mock database interaction using JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: 1,
            title: name,
            body: `Email: ${email}, Message: ${message}`
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("contact-message").innerHTML = "<p>Message sent successfully!</p>";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("contact-message").innerHTML = "<p>An error occurred. Please try again later.</p>";
    });
}
