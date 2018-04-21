var searchProfessor = document.querySelector("div.searchProfessor input")
var resultDropdown = document.querySelector("div.searchProfessor div.search-dropdown")
var campusSelect = document.querySelector('div.selectCampus select')
var searchButton = document.querySelector("div.searchProfessor button")
var resultContainer = document.querySelector('div.container>div.container')

//Call AJAX function to live search suggestions
function showResult(professor, campus){ //Professor name queried and selected campus name
    if(professor.trim().length==0){
        return
    }

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'search.php?c='+campus+'&p='+professor, true) // p = professor, c = campus
    xhr.addEventListener('load', ev=>{
        let responses = JSON.parse(xhr.responseText)
        console.log(responses)
        return responses
    })
    xhr.send()
}

//Create professor list pressing the button "Pesquisar"
function createProfessorList(professor, campus){
    if(professor.trim().length==0 || professor==null){
        return
    }

    xhr.open('GET',"professores.php?c="+campus+'&p='+professor, true)
    chr.addEventListener('load', ev => {
        let responses = JSON.parse(xhr.responseText)
        if(responses == "Sem sugestões"){
            let p = document.createElement("P")
            p.innerText = "Nenhum resultado encontrado"
            resultContainer.appendChild(p)
        }else{
            buildBox(responses)
        }
    })
}


//Timer between user inputs
var searchTimeout

searchProfessor.addEventListener('input', ev=>{
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callServerScript, 500);

})

searchButton.addEventListener('click', ev =>{
    createProfessorList((searchProfessor.value, campusSelect.options[campusSelect.selectedIndex].innerText))
})


function callServerScript() {
    showResult(searchProfessor.value, campusSelect.options[campusSelect.selectedIndex].innerText)
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

searchProfessor.value = ""