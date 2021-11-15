const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})