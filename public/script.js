document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.text();
            document.getElementById("msg").innerText = result;

            setTimeout(() => {
                document.getElementById("msg").innerText = "";
            }, 5000);

            this.reset();
        } catch (error) {
            console.error("Error:", error);
            document.getElementById("msg").innerText = "Error sending message!";
        }
    });
});
