document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            logout();
        });
    }
});

function logout() {
    // Simple logout function for demonstration
    alert("Logged out successfully!");
}
