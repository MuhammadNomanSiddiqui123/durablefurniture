// PAGE LOAD → data wapas lao
window.onload = function () {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";
    document.getElementById("message").value = localStorage.getItem("message") || "";
};

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // values lena
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // LOCAL STORAGE me save
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("message", message);

    alert("Message has successfully send!");

    this.reset();
});