var results = document.querySelector('div.results')

var servForm = document.querySelector('form#servform')
servForm.inputs = {} = document.querySelectorAll('div.input-group')
servForm.addons = {} = document.querySelectorAll('span.input-group-addon')

servForm.addons[0].addEventListener('click', ev =>{
    window.location = 'http://labmatii.online/QuadroDocente/camboriulist.php'
})

function callAjax(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'camboriu.php')
    xhr.addEventListener('load', ev =>{
        results.innerText += xhr.responseText;
    })
    xhr.send();
}