function toggleMenu()
{
    const menuIcon = document.querySelector(".mobile-icon")
    const sideMenu = document.querySelector(".side-nav")

    menuIcon.addEventListener("click", () => {
        sideMenu.classList.toggle("active")
        menuIcon.classList.toggle("active")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu()
})