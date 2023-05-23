let playArea = document.querySelector(".play-area")
let ball = document.querySelector(".ball")

let topPos = 0
let leftPos = 0
let playAreaHeight = playArea.offsetHeight - 2 - ball.offsetHeight
let playAreaWidth = playArea.offsetWidth - 2 - ball.offsetWidth

document.body.addEventListener("keyup",(e)=>{
    if(e.keyCode == 39 && leftPos < playAreaWidth){
        leftPos += 50
    }
    if(e.keyCode == 37 && leftPos > 0){
        leftPos -= 50
    }
    if(e.keyCode == 40 && topPos < playAreaHeight){
        topPos += 50
    }
    if(e.keyCode == 38 && topPos > 0){
        topPos -= 50
    }
    ball.style.left = leftPos + "px"
    ball.style.top = topPos + "px"
})