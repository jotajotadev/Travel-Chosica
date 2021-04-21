let toggle = document.getElementById("toggle-menu");

toggle.addEventListener("click", () => {
    let navigation = document.getElementById("navigation");
    navigation.classList.toggle("nav-header");
});