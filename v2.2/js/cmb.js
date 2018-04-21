var selectCampus
var searchProfessor = document.querySelector("div.search > input")
var resultDropdown = document.querySelector("div.search > div.search-dropdown")

function showResult(search){
    if(search.innerText.trim().length==0){
        return
    }

    let professor

    let responses

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://labmatii.online/search.php?c='+campus+'&p='+professor, true)
    xhr.addEventListener('load', ev=>{
        responses = JSON.parse(xhr.responseText)
        console.log(responses)
        return responses
    })
    xhr.send()
}

var campusForm = document.querySelector('form#campusform')
campusForm.select = document.querySelector('form#campusform select')

campusForm.addEventListener('input', ev => {
    if(campusForm.select.value != 'null'){
        campusForm.submit()
    }else{
        window.location = 'error.html'
    }
})


search.addEventListener("keyup", ev=>{
    //showResult(this.value)
    console.log(ev.target)
})

