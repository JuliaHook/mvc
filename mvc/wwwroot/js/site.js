// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const checkbox = document.getElementById("Theme-Checkbox");

checkbox.addEventListener("change", () => {
    const OnTeam = document.getElementById("Toggle-On");
    const OffTeam = document.getElementById("Toggle-Off");
    OnTeam.classList.toggle("Dark-Theme-On");
    OffTeam.classList.toggle("Dark-Theme-On");

    const ToDarkGray = document.querySelectorAll('.To-Dark-Gray');
    for (const element of ToDarkGray) {
        element.classList.toggle('Dark-Mode');
    }
    const ToBlack = document.querySelectorAll('.To-Black');
    for (const element of ToBlack) {
        element.classList.toggle('Dark-Mode');
    }
    const ToWhite = document.querySelectorAll('.To-White');
    for (const element of ToWhite) {
        element.classList.toggle('Dark-Mode');
    }

})


const hideToggle = document.querySelector(".comment-toggle-visibility");

hideToggle.addEventListener("click", () => {
    document.querySelector(".hideform").classList.toggle("hidden");
    hideToggle.classList.toggle("hidden");
})