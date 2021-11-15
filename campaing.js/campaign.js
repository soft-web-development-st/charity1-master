import data from "./data.js";
import paginates from "./paginate.js";
import displayButtons from "./displayButtons.js";
import displayCampaign from "./displayCampaign.js";


const Btns = document.querySelector('.all-btns')


let index = 0;
let pages = []

const setup = () =>{
    displayCampaign( pages [index])
    displayButtons(Btns, pages,index)
    
}

Btns.addEventListener('click', (e) =>{
    if (e.target.classList.contains('all-btns')) {
        return; 
    }
    if (e.target.classList.contains('numbers')) {
        index = parseInt(e.target.dataset.index)
    }
    if (e.target.classList.contains('next-btn')) {
        index++
        if (index > pages.length -1 ) {
            index = 0
        }
    }
    if (e.target.classList.contains('prev-btn')) {
        index--
        if (index < 0 ) {
            index = pages.length -1
        }
    }
    setup()
})

window.addEventListener('DOMContentLoaded', () =>{
    pages = paginates(data)
    setup()
})

const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})







