let images = document.querySelector(".images")
let right = document.querySelector(".right-arrow")
let left = document.querySelector(".left-arrow")

right.addEventListener("click",()=>{
    rightFun()
})

left.addEventListener("click",()=>{
    leftFun()
})

document.body.addEventListener("keyup",function(e){
    if(e.which == 39){
        rightFun()
    }
    if(e.keyCode == 37){
        leftFun()
    }
})


let rightFun = ()=>{
    let active = document.querySelector(".active")
    if(active.nextElementSibling !== null){
        active.nextElementSibling.classList.add("active")
        active.classList.remove("active")
    }else{
        images.children[0].classList.add("active")
        active.classList.remove("active")
    }
}

let leftFun = ()=>{
    let active = document.querySelector(".active")
    if(active.previousElementSibling !== null){
        active.previousElementSibling.classList.add("active")
        active.classList.remove("active")
    }else{
        images.lastElementChild.classList.add("active")
        active.classList.remove("active")
    }
}