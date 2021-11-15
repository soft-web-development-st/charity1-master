
const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})

// progress bar

const progressBar = document.querySelector('.inner-progress')
const progressContainer = document.querySelector('.progress-bar-single')
const progressValue = document.querySelector('.single-value')
const container = document.querySelector('.single-campaign-post')

window.addEventListener('scroll', ()=>{

 const pcP = progressContainer.getBoundingClientRect().top

    if (window.innerHeight > pcP) {
        progressBar.classList.add('show-width')
        increaseCounter()
    }
})




const increaseCounter = () =>{
    
    const currentTarget = progressValue.getAttribute('data-v')
    const currentNumber = parseInt(progressValue.innerText)
    if (currentNumber < currentTarget ) {
        progressValue.innerText = currentNumber +1;
        setTimeout(increaseCounter,1000);
    }else{
        progressValue.innerText = currentTarget;
    }
}



    

