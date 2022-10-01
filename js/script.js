let navbar = document.querySelector("nav").querySelectorAll("li");
console.log(navbar);

navbar.forEach(element =>
    {
        element.addEventListener("click",function()
        {
            navbar.forEach(nav=>nav.classList.remove("active"));

            this.classList.add("active");
        })
    })