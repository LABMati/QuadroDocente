/*
    Important variables
*/

let searchProfessor = document.querySelector("div.searchProfessor input")//Search input box
let resultDropdown = document.querySelector("div.searchProfessor div.search-dropdown")//Space for professor boxes
let campusSelect = document.querySelector('div.selectCampus select')//Campus select box
let campusInfo  = document.querySelector('div.campus-info')
let campusTitle = campusInfo.querySelector('div.panel-heading')
let campusPhone = campusInfo.querySelector('div.panel-body')
let campusSite = campusInfo.querySelector('a.site')
let campusEnd = campusInfo.querySelector('a.endereco')
let listAllBut = document.querySelector('span#basic-addon1')
let emailSend 
let x = document.querySelector('div.input-group')
x.style.marginBottom = '5vw'


function onDeviceReady(){
    emailSend = (remetente) => {
        if(cordova.plugins.email.isAvailable){
            cordova.plugins.email.open({
                to:      remetente,
                cc:      '',
                bcc:     ['', ''],
                subject: 'Contato - Seu nome',
                body:    ''
            });
        }else{
            alert("Seu dispotivo não suporta")
        }
    }    
}

/*
    showResult()
    In case of professor parameter is empty, returns the function
    Then opens a XMLHttpRequest, using GET method and passing professor and campus on the URL
    When the request is loaded, receives and parsesa JSON into responses variable
    In case responses is "Sem sugestões", run buildFailedPanel()
    In other cases, run buildBox() with responses as parameter
*/

function showResult(){
    professor = searchProfessor.value
    campus = campusSelect.options[campusSelect.selectedIndex].innerText

    if(professor.trim().length==0){
        removeDivs()
        return
    }

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://www.labmatii.ifc-camboriu.edu.br/search.php?c='+campus+'&p='+professor, true) // p = professor, c = campus
    xhr.addEventListener('load', ()=>{
        let responses = JSON.parse(xhr.responseText)
        if (responses == "Sem sugestões") {
            buildFailedPanel()
        }else{
            buildBox(responses)
        }
        
    })
    xhr.send()
}
/*
	Get all the professors from the selected campus and create an entire list with all the registered
	Stop function if theres no campus selected
*/

function listAllProfessors(campus){
    if(campus == "Todos os Campi"){
        alert("Selecione um Campus")
        return
    }else{
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://www.labmatii.ifc-camboriu.edu.br/listAll.php?c='+campus, true) // c = campus
        xhr.addEventListener('load', ()=>{
            let responses = JSON.parse(xhr.responseText)
            if (responses == "Sem sugestões") {
                buildFailedPanel()
            }else{
                buildBox(responses)
            }
            
        })
        xhr.send()
    }
}
listAllBut.addEventListener('click', ()=>{
    listAllProfessors(campusSelect.options.selectedIndex)
})

campusSelect.addEventListener('input', ()=>{
    if (campusSelect.options.selectedIndex == 0) {
        campusInfo.style.display = 'none'
    }else{
        getCampusInfo(campusSelect.options.selectedIndex);
        campusInfo.style.display = 'block'
    }
})

/* 
getCampusInfo()
Receives a String naming the selected campus for search
Starts a XMLHttpRequest to labmat(i)²'s server, on GET method
Sends the request and waits for a return
If status is 200, changes the campus info based on info received from the database
*/

function getCampusInfo(campusid) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.labmatii.ifc-camboriu.edu.br/campusInfo.php?campusInfo='+campusid)
    xhr.addEventListener('load', ()=>{
        if(xhr.status == 200){       
            var response = JSON.parse(xhr.response)
            campusTitle.innerHTML = "<h5> Campus " + response[0][0] + "</h5> <i class='fas fa-sort-down'></i>"
            campusPhone.innerText = "Telefone: " + response[0][1]
            campusSite.href = response[0][2]
            campusEnd.href = response[0][4]
            campusEnd.firstElementChild.innerText = response[0][3]
            gambiarraCampus();
        }else{
            console.log("Error: "+xhr.status)
        }
    })
    xhr.send()
}

function gambiarraCampus(){
    switch(campusSelect.options.selectedIndex){
        case 1:
            gambiarraPanel("http://abelardoluz.ifc.edu.br/institucional/")
            break
        case 2:
            gambiarraPanel("http://araquari.ifc.edu.br/quadro-de-servidores/")
            break
        case 3:
            gambiarraPanel("http://blumenau.ifc.edu.br/quadro-de-servidores-2/")
            break
        case 6:
            gambiarraPanel("http://concordia.ifc.edu.br/wp-content/uploads/2018/06/2018_06_12_horario-individual-professores.pdf")
            break
        case 7:
            gambiarraPanel("http://professores.fraiburgo.ifc.edu.br/")
            break
        case 8:
            gambiarraPanel("http://ibirama.ifc.edu.br/institucional-quadro-funcional/")
            break
        case 9:
            gambiarraPanel("http://luzerna.ifc.edu.br/grade-e-corpo-docente/")
            break
        case 10:
            gambiarraPanel("http://www.ifc-riodosul.edu.br/site/quadro-funcional/")
            break
        case 11:
            gambiarraPanel("https://drive.google.com/drive/u/0/folders/0B7JZjvR-cxkIbmhXaWpWdUtsMGc?usp=sharing_eid&ts=57065df0")
            break
        case 12:
            gambiarraPanel("http://saobentodosul.ifc.edu.br/quadro-de-docentes/")
            break;
        case 13:
            gambiarraPanel("https://saofrancisco.ifc.edu.br/corpo-docente/")
            break;
        case 14:
            gambiarraPanel("http://sombrio.ifc.edu.br/quadro-de-atividades/")
            break
        case 15:
            gambiarraPanel("https://ptd.videira.ifc.edu.br/")
            break
        default:
            searchProfessor.readOnly = false
            removeDivs()
        break
    }
}

document.addEventListener("deviceready", onDeviceReady)

//Starts variable that will be used as timer for user inputs
var searchTimeout

/* 
    For performance optmization, searchs will only start after a certain amount of time
    When the input event is triggered, the code will check for a timer
    If it's already defined, the timer will be cleared and redefined
    At the time when the timer expires without redefing, showResult() is called
*/
searchProfessor.addEventListener('input', ()=>{
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(showResult, 500);
})


/*
    In case of search have no return, this function will build a fail box
*/

function buildFailedPanel(){
    removeDivs()
    let div = document.createElement('DIV')
    div.classList = 'panel panel-default erro'
    div.innerText = 'Nenhum professor encontrado'
    resultDropdown.appendChild(div)
}

function gambiarraPanel(href){
    removeDivs()
    let linksa = document.createElement('A')
    linksa.href = href
    linksa.target = "_blank"
    let div = document.createElement('DIV')
    div.classList = 'panel panel-default gambiarra'
    div.innerText = 'Seu Campus ainda não está cadastrado, clique aqui para ser redirecionado ao quadro de horários'
    linksa.appendChild(div)
    resultDropdown.appendChild(linksa)
    searchProfessor.readOnly = true
}

/*
    buildBox()
    Receives a JSON Object generated by search.php
    Call removeDivs() to clean searchDropdown
    Then it uses a lot of spaghetti code and DOM manipulation to build a beautiful collapse panel with teachers data
*/

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
        divs[4].addEventListener("click", ()=>{
            emailSend(divs[4].innerText)
        })

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

/* 
    Remove all divs from searchDropdown 
*/


searchProfessor.value = "" //Empty input box on every start page
