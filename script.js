const navBtn = document.getElementById("bar")
const navbar = document.getElementById("navbar")
const closeBtn = document.getElementById("close")

navBtn.addEventListener("click", function(){
    navbar.classList.add("active")
    })


closeBtn.addEventListener("click", function(){
    navbar.classList.remove("active")
})