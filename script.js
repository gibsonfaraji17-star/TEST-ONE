// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form
const form = document.querySelector("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const text = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || text === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    try {
        const response = await fetch("https://formspree.io/f/xrppljpv", {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            message.textContent = "Thanks, " + name + "! Your message was sent.";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Something went wrong. Please try again.";
            message.style.color = "red";
        }
    } catch (error) {
        message.textContent = "Network error. Please try again.";
        message.style.color = "red";
    }
});