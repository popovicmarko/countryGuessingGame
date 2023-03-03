let images= document.querySelectorAll(".slide-image")
counter=0;
currImg= images[counter];

let navText=document.querySelector("ul")

document.querySelector(".phoneNav").addEventListener("click", e=>{
    navText.classList.toggle("on")
})

const changePic = () => {
    images.forEach(item=>{
        if(item!=currImg){
            item.style.setProperty("display", "none")
        }
        else{
            item.style.setProperty("display", "block")
        }
    })

    currImg= images[(++counter)%images.length]

    setTimeout(changePic, 3000)

}

changePic()

