let navText=document.querySelector("ul")

document.querySelector(".phoneNav").addEventListener("click", e=>{
    navText.classList.toggle("on")
})

document.querySelector(".Puppy").addEventListener("click", e=>{
    document.querySelector(".pup-container").style.setProperty("display", "block")
})

document.querySelector(".pup-container").addEventListener("click", e=>{
    document.querySelector(".pup-container").style.setProperty("display", "none")
})