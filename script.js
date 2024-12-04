const menuToggle = document.querySelector("nav .menu-toggle");
const menuList = document.querySelector("nav ul");
const allLi = menuList.querySelectorAll("li");

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle("slide");
    [...allLi].forEach(li => li.classList.toggle("fade"));
});