var searchProfessor = document.querySelector("div.searchProfessor input")
var resultDropdown = document.querySelector("div.searchProfessor div.search-dropdown")
var campusSelect = document.querySelector('div.selectCampus select')
var campusInfo  = document.querySelector('div.campus-info')
var campusTitle = campusInfo.querySelector('div.panel-heading')
var campusPhone = campusInfo.querySelector('div.panel-body')
var campusEnd = campusInfo.querySelector('a')
var searchButton = document.querySelector("div.searchProfessor button")
var resultContainer = document.querySelector('div.container>div.container')
var x = document.querySelector('div.input-group')
x.style.marginBottom = '5vw'

//Call AJAX function to live search suggestions
function showResult(professor, campus){ //Professor name queried and selected campus name
    if(professor.trim().length==0){
        return
    }

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://labmatii.online/QuadroDocente/v2.2/search.php?c='+campus+'&p='+professor, true) // p = professor, c = campus
    xhr.addEventListener('load', ev=>{
        let responses = JSON.parse(xhr.responseText)
        if (responses == "Sem sugestões") {
            buildFailedPanel()
        }else{
            buildBox(responses)
        }
        
    })
    xhr.send()
}

//Create professor list pressing the button "Pesquisar"
function createProfessorList(professor, campus){
    if(professor.trim().length==0 || professor==null){
        return
    }

    xhr.open('GET',"http://labmatii.online/QuadroDocente/v2.2/professores.php?c="+campus+'&p='+professor, true)
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

campusSelect.addEventListener('input', ev=>{
    if (campusSelect.options.selectedIndex == 0) {
        campusInfo.style.display = 'none'
    }else{
        getCampusInfo(campusSelect.options.selectedIndex);
        campusInfo.style.display = 'block'
    }
})

getCampusInfo();

function getCampusInfo(campusid) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://labmatii.online/QuadroDocente/v2.2/campusInfo.php?campusInfo='+campusid)
    xhr.addEventListener('load', ev=>{
        var response = JSON.parse(xhr.response)
        campusTitle.innerText = "Campus " + response[0][0]
        campusPhone.innerText = "Telefone: " + response[0][1]
        campusEnd.href = response[0][2]
    })
    xhr.send()
}

//Timer between user inputs
var searchTimeout

searchProfessor.addEventListener('input', ev=>{
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callServerScript, 500);

})

function callServerScript() {
    showResult(searchProfessor.value, campusSelect.options[campusSelect.selectedIndex].innerText)
}

function buildFailedPanel(){
    removeDivs()
    let div = document.createElement('DIV')
    div.classList = 'panel panel-default erro'
    div.innerText = 'Nenhum professor encontrado'
    resultDropdown.appendChild(div)
}

function buildBox(obj){
    removeDivs()
    for (var i = 0; i < obj.length; i++) {
        var divs = []

        for (var j = 0; j < 7; j++) {
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

        divs[5].classList = 'panel-body'

        divs[6].innerText = 'Horário'
        divs[6].classList = 'panel-body'

        var as = []
        as[0] = document.createElement('A')
        as[1] = document.createElement('A')
        as[0].dataset['toggle'] = 'collapse'
        as[0].href = '#collapse'+i
        as[2] = document.createElement('A')
        as[2].href = obj[i][3]
        as[2].target = '_blank'
        if (obj[i][2] == 'Null') {
            divs[5].innerText = 'Curriculo Lattes: Não informado'
        } else {
            divs[5].innerText = 'Curriculo Lattes'
            as[1].href = obj[i][2]
            as[1].target = '_blank'

        }

        as[1].appendChild(divs[5])
        as[0].appendChild(divs[2])
        as[2].appendChild(divs[6])
        divs[3].appendChild(as[1])
        divs[3].appendChild(as[2])
        divs[3].appendChild(divs[4])
        divs[1].appendChild(as[0])
        divs[1].appendChild(divs[3])
        divs[0].appendChild(divs[1])

        resultDropdown.appendChild(divs[0])
    }
}

function removeDivs() {
    let count = resultDropdown.children.length;
    for (var i = 0; i < count; i++) {
        resultDropdown.children[0].remove();
    }
}

searchProfessor.value = ""