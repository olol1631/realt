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

let propertyItems = document.querySelectorAll('.property__item')

let type
function filter(type){
    propertyItems.forEach(propertyItem => {
        propertyItem.classList.remove('hide')
        if(propertyItem.dataset.type !== type){
            propertyItem.classList.add('hide')
        } 
    })
}


let filterForm = document.forms.filter
filterForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let type = filterForm.elements.type.value
    filter(type)

})