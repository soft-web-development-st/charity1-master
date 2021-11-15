
const displayBtns = (btns , pages, activeIndex) =>{
let btn = pages.map((_, pageIndex) => {
return ` <button class ="numbers ${activeIndex === pageIndex?'active': 'null'}
"data-index ="${pageIndex}">${pageIndex +1}</button> `
})
btn.push('<button class="next-btn paginate">next</button>')
btn.unshift('<button class="prev-btn paginate">prev</button>')
btns.innerHTML = btn.join('')
}

export default displayBtns;