const slides = document.querySelectorAll('.slides img')
let slideIndex = 0;
let intervalId = null;





document.addEventListener('DOMContentLoaded',initializeSLider )

function initializeSLider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide')
        intervalId = setInterval(nextSlide, 3000)
    }




}


function showSLide(index){
slides.forEach(slide => {
    slide.classList.remove('displaySlide')
})
slides[slideIndex].classList.add('displaySlide')
}


function prevSlide (){

}

function nextSlide (){
slideIndex++
showSLide(slideIndex)
}