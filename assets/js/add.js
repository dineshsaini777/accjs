let Accordian = document.querySelectorAll(".accbox");

Accordian.forEach(function (show) {
    show.addEventListener("click", function () {
        const hide = document.querySelector(".active")
        show.classList.toggle("active")
        hide && hide.classList.remove("activee")
    })
})
