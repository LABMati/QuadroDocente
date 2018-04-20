var responses
var resultContainer = document.querySelector('div.search-dropdown')

var xhr = new XMLHttpRequest()
function showResult(search){
    if(search.length == 0 || search == ' '){
        return
    }
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'search.php?q='+search, true)
    xhr.addEventListener('load', ev=>{
        responses = JSON.parse(xhr.responseText)
        if (responses != 'Sem sugestões') {}
        buildBox(responses)
    })
    xhr.send()
}

var input = document.querySelector('input[type=text]')
var searchTimeout;

input.addEventListener('input', ev=>{
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callServerScript, 500);

})

function callServerScript() {
    showResult(input.value)
}

function buildBox(obj){
    removeDivs()
    for (var i = 0; i < obj.length; i++) {
        var divs = []

        for (var j = 0; j < 6; j++) {
            divs[j] = document.createElement('DIV')
        }

        divs[0].classList = 'panel-group'

        divs[1].classList = 'panel panel-default'

        divs[2].classList = 'panel-heading'
        var h4 = document.createElement('H4')
        h4.classList = 'panel-title'
        h4.innerText = obj[i][0]
        divs[2].appendChild(h4)

        divs[3].classList = 'panel-collapse collapse'
        divs[3].id = 'collapse'+i;

        divs[4].classList = 'panel-body'
        divs[4].innerText = obj[i][1]

        divs[5].classList = 'panel-footer'
        divs[5].innerText = 'Curriculo Lattes'
        
        var as = []
        as[0] = document.createElement('A')
        as[1] = document.createElement('A')
        as[0].dataset['toggle'] = 'collapse'
        as[0].href = '#collapse'+i
        as[1].href = obj[i][2]
        as[1].target = '_blank'

        as[1].appendChild(divs[5]);
        as[0].appendChild(divs[2])
        divs[3].appendChild(as[1])
        divs[3].appendChild(divs[4])
        divs[1].appendChild(as[0])
        divs[1].appendChild(divs[3])
        divs[0].appendChild(divs[1])

        resultContainer.appendChild(divs[0])
    }
}

function removeDivs(){
    let count = resultContainer.children.length;
    for (var i = 0; i < count ; i++) {
        resultContainer.children[0].remove();
    }
}