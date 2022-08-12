const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')
const popupBg = document.querySelector('.popup-bg')
console.log(popupBg)

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    popupBg.classList.toggle('active')
})
menu.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.closest('.menu__item')){
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
        popupBg.classList.toggle('active')
    }
}) 
popupBg.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    popupBg.classList.toggle('active')
}) 

const propertyItems = document.querySelectorAll('.property__item')

 
function filter(type, minPrice, maxPrice, minArea, maxArea){
    propertyItems.forEach(propertyItem => {
        propertyItem.classList.remove('hide')
        if((propertyItem.dataset.type !== type & type !== 'all') || propertyItem.dataset.price > maxPrice || propertyItem.dataset.price < minPrice || propertyItem.dataset.area < minArea || propertyItem.dataset.area > maxArea){
            propertyItem.classList.add('hide')
        } 
    })
}


let filterForm = document.forms.filter
filterForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let type = filterForm.elements.type.value,
        minPrice = Number(filterForm.elements.minprice.value || 0),
        maxPrice = Number(filterForm.elements.maxprice.value || 1000000),
        minArea = Number(filterForm.elements.minarea.value || 1),
        maxArea = Number(filterForm.elements.maxarea.value || 10000)
    console.log("type", type, "minPrice", minPrice, "maxPrice", maxPrice, "minArea", Number(minArea), typeof(minArea), "maxArea", maxArea)
    filter(type, Number(minPrice), maxPrice, minArea, maxArea)

})

const resetBtn = document.querySelector('.filter__form-reset')
resetBtn.addEventListener('click', ()=>{
    propertyItems.forEach(propertyItem => {
        propertyItem.classList.remove('hide') 
    })
})