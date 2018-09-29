const search = document.querySelector('main > section > div.input-group > input')
const campusSelect = document.querySelector('select')
const c_panel = new Requestt()
let searchTimeout

search.addEventListener('input', ()=>{
    if (typeof searchTimeout == undefined) {
        searchTimeout = setTimeout(()=>{
            c_panel.getProfessor(search.value, campusSelect.selectedIndex, (response)=>{
                buildPanels(response, document.querySelector('main > section:last-child'))
            })
        }, 500)
    }else{
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(()=>{
            c_panel.getProfessor(search.value, campusSelect.selectedIndex, (response)=>{
                buildPanels(response, document.querySelector('main > section:last-child'))
            })
        }, 500)
    }
})

campusSelect.addEventListener('input', ()=>{
    if (campusSelect.selectedIndex != 0) {   
        c_panel.getCampusInfo(campusSelect.selectedIndex, (response)=>{    
            if (implementationCampus(campusSelect.selectedIndex)) {
                buildCampusPanel(response)
            }   
        })
    }
})

async function implementationCampus(index){
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
            document.querySelector('main > section:last-child').innerHTML = ''
            return true
        break
    }
}

async function gambiarraPanel(href){
    document.querySelector('main > section:last-child').innerHTML = ''
    let linksa = document.createElement('A')
    linksa.href = href
    linksa.target = "_blank"
    let div = document.createElement('DIV')
    div.innerText = 'Seu Campus ainda não está cadastrado, clique aqui para ser redirecionado ao quadro de horários'
    linksa.appendChild(div)
    document.querySelector('main > section:last-child').appendChild(linksa)
}

async function buildCampusPanel(data){
    if(document.querySelector('div.campus'))
        document.querySelector('div.campus').remove()

    data = await JSON.parse(data)
    let container = document.querySelector('main > section')

    let divTodo = document.createElement('div')
    divTodo.classList.add('campus')
    let divHeader = document.createElement('div')

    divTodo.appendChild(divHeader)
    
    let spanTitle = document.createElement('span')
    spanTitle.innerText = 'Informações do campus'

    let icon = document.createElement('i')
    icon.className = 'fas fa-sort-down'

    divHeader.appendChild(spanTitle)
    divHeader.appendChild(icon)

    let divWrap = document.createElement('div')

    let divTelefone = document.createElement('div')
    divTelefone.innerText = data.telefone
    divWrap.appendChild(divTelefone)

    let divLocal = document.createElement('div')
    divLocal.innerText = data.endereco

    let aMaps = document.createElement('a')
    aMaps.target = '_blank'
    aMaps.href = data.maps
    aMaps.appendChild(divLocal)
    divWrap.appendChild(aMaps)
    
    let divSite = document.createElement('div')
    divSite.innerText = 'Site institucional'
    let aSite = document.createElement('a')
    aSite.target = '_blank'
    aSite.href = data.site
    aSite.appendChild(divSite)
    divWrap.appendChild(aSite)

    divHeader.addEventListener('click', ()=>{
        if (divWrap.offsetHeight == 0) {
            divTodo.style.height = '44vw'
            divWrap.style.height = '33vw'
        }else{
            divWrap.style.height = '0vw'
            divTodo.style.height = '11vw'
        }
    })

    divTodo.appendChild(divWrap)
    console.log(container)
    console.log(container.querySelector('input'))
    container.insertBefore(divTodo, container.querySelector('div.input-group:last-child'))
}

async function buildPanels(data, container){

    data = await JSON.parse(data)
    container.innerHTML = ''

    for (const d of data) {

        let divTodo = document.createElement('div')
        let divHeader = document.createElement('div')

        divTodo.appendChild(divHeader)
        
        let spanTitle = document.createElement('span')
        spanTitle.innerText = d.nome

        let icon = document.createElement('i')
        icon.className = 'fas fa-sort-down'

        divHeader.appendChild(spanTitle)
        divHeader.appendChild(icon)

        let divWrap = document.createElement('div')

        let divEmail = document.createElement('div')
        divEmail.innerText = d.email 
        divWrap.appendChild(divEmail)

        let divLattes = document.createElement('div')
        divLattes.innerText = 'Curriculo Lattes'

        let aLattes = document.createElement('a')
        aLattes.target = '_blank'
        aLattes.href = d.lattes
        aLattes.appendChild(divLattes)
        divWrap.appendChild(aLattes)
        
        let divHorario = document.createElement('div')
        divHorario.innerText = 'Horário'
        let aHorario = document.createElement('a')
        aHorario.target = '_blank'
        aHorario.href = d.horario
        aHorario.appendChild(divHorario)
        divWrap.appendChild(aHorario)

        divHeader.addEventListener('click', ()=>{
            if (divWrap.offsetHeight == 0) {
                divTodo.style.height = '44vw'
                divWrap.style.height = '33vw'
            }else{
                divWrap.style.height = '0vw'
                divTodo.style.height = '11vw'
            }
        })

        divTodo.appendChild(divWrap)

        container.appendChild(divTodo)
    }
}
