const employeeContainerItems = $$('.employee-container-item')
const containerContents = $$('.employee-container-content-wrapped')

employeeContainerItems.forEach(function(employeeContainerItem, index){
    const containerContent = containerContents[index]
    employeeContainerItem.onclick = function(){
        $('.employee-container-item.active').classList.remove('active')
        $('.employee-container-content-wrapped.active').classList.remove('active')
        this.classList.add('active')
        containerContent.classList.add('active')
    }
})

// them nhan vien js

const selectYear = document.getElementById('select3')
const date = new Date()

var getYear = ''

for(var i = date.getFullYear(); i >= 1930; --i){
    getYear += `<option value="${i}">${i}</option>`
}

selectYear.innerHTML = getYear

// dong mo modal
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