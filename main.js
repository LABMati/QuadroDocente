
var campusForm = document.querySelector('form#campusform')
campusForm.select = document.querySelector('form#campusform select')

campusForm.addEventListener('input', ev => {
    if(campusForm.select.value != 'null'){
        campusForm.submit()
    }else{
        window.location = 'error.html'
    }
})
