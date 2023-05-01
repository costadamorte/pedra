// get the three navigation buttons
const googleBtn = document.getElementById("googleBtn");
const facebookBtn = document.getElementById("facebookBtn");
const instagramBtn = document.getElementById("instagramBtn");

// set the links for each button
googleBtn.addEventListener("click", function() {
    window.location.href = "https://www.google.com";
});
facebookBtn.addEventListener("click", function() {
    window.location.href = "https://www.facebook.com";
});
instagramBtn.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com";
});
