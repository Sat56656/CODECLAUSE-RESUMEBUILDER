document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resume-form");
    const previewContent = document.getElementById("preview-content");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const summary = document.getElementById("summary").value;
        const experience = document.getElementById("experience").value;
        const education = document.getElementById("education").value;

        const resumeHTML = `
            <h3>${fullName}</h3>
            <p>Email: ${email} | Phone: ${phone}</p>
            <h4>Summary</h4>
            <p>${summary}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Education</h4>
            <p>${education}</p>
        `;

        previewContent.innerHTML = resumeHTML;
    });
});
