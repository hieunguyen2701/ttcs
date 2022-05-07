const modalBtn = $('.close-btn')
const modal = $('.modal')
const modalContainer = $('.modal-container')
const modalOpenBtns = $$('.employee-show-info')

function showModal () {
    modal.classList.add('open')
}

function hideModal () {
    modal.classList.remove('open')
}

for(const modalOpenBtn of modalOpenBtns) {
    modalOpenBtn.addEventListener('click', showModal)
}

modalBtn.addEventListener('click', hideModal)
modal.addEventListener('click',hideModal)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})