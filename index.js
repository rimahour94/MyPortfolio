const track=document.querySelector(".carousel_track")
// const track=document.querySelector(".container_carousel")

// const slidesCont=Array.from(trackl.children)
// console.log(slidesCont)


const slides=Array.from(track.children)
console.log(slides)


const dotsNav=document.querySelector(".contents-li")
const dots=Array.from(dotsNav.children)

const brgrMenu=document.querySelector(".brgr_line")
const contents=document.querySelector(".brgr_menu")


const slideWidth=slides[0].getBoundingClientRect().width
console.log(slideWidth)

slides.forEach((slide,index)=>{
  slide.style.left=slideWidth*index+"px"
})

// slides[0].style.left="0"+"px"
// slides[1].style.left=slideWidth*1+"px"
// slides[2].style.left=slideWidth*2+'px'
console.log(slideWidth)



dots.forEach((element)=>{
    element.style.cursor="pointer"
  })
  
console.log(dots)

dotsNav.addEventListener("click",(e)=>{
    const targetDot=e.target.closest("button")
    if(!targetDot) return null
    const targetIndex=dots.findIndex(dot=>dot===targetDot)
    const targetSlide=slides[targetIndex]
    console.log(targetSlide)
    const amountToMove=targetSlide.style.left
    
    track.style.transform='translateX(-'+amountToMove+')';
    track.style.transition="all .6s"
})

brgrMenu.addEventListener("click",(e)=>{
  var getHeight=contents.getBoundingClientRect().height

  const targetBtn=e.target
  console.log('targe')
  if(!targetBtn) return null
  console.log(slideWidth)
  if(getHeight===0)
  {
  contents.style.height="112px"
  contents.style.transition="all .2s"
  getHeight=contents.getBoundingClientRect().height
  console.log(getHeight)
  }
  else if(getHeight===112){
    contents.style.height="0px"
  contents.style.transition="all .2s"
  }

})
