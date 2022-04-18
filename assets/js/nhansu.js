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
