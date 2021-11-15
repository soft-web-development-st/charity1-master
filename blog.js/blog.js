import paginate from "./paginate.js";
import displayBtns from "./displayBtn.js";
import data from "./post-data.js";

const blogs =[... document.querySelectorAll('.blog-post-item')]
const BlogPost = document.querySelector('.blog-posts-contents');
const Btns = document.querySelector('.all-btns')

let index = 0;
let pages = []

const setupUI = () =>{
    showBlogs(pages [index])
    displayBtns(Btns, pages,index)
}

Btns.addEventListener('click', (e) =>{
    if(e.target.classList.contains('all-btns')){
    return;
    }
    if (e.target.classList.contains('numbers')) {
        index = parseInt(e.target.dataset.index);
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
    setupUI()
})

window.addEventListener('DOMContentLoaded', () =>{
  pages = paginate(data)
  setupUI()
})



//  back to top 

const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})




























function showBlogs(data){
    let showBlogs = data.map((blog) =>{ 
    return `<div class="blog-post-item">
     <img src="${blog.img}" alt="">
     <div class="blog-post-item-info">
         <div class="blog-post-date-comments">
             <div class="blog-post-date">
                 <p>${blog.day}</p>
                 <p>${blog.month}</p>
             </div>
             <div class="blog-post-comments">
                 <p><span><i class="far fa-comment"></i></span>1</p>
             </div>
         </div>
         <div class="blog-post-info-other">
             <a href="#"><h4>${blog.title}</h4></a>
             <p class="theme-paragraph">${blog.text}</p>
             <p class="categories">Categories: <span>${blog.category}</span></p>
         </div>
     </div>
 </div>`
    }).join('')
   BlogPost.innerHTML = showBlogs;
}











