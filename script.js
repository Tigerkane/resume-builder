function generateResume() {
    document.getElementById("r-name").innerText = document.getElementById("name").value;
    document.getElementById("r-email").innerText = document.getElementById("email").value;
    document.getElementById("r-phone").innerText = document.getElementById("phone").value;
    document.getElementById("r-skills").innerText = document.getElementById("skills").value;
    document.getElementById("r-education").innerText = document.getElementById("education").value;
    document.getElementById("r-experience").innerText = document.getElementById("experience").value;
}

function downloadPDF() {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("resume.pdf");
}