// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form validation
const form = document.querySelector("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const text = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || text === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thanks, " + name + "! Your message was sent.";
    message.style.color = "green";
    form.reset();
});