let searchProfessor = document.querySelector("div.searchProfessor input")//Search input box
let resultDropdown = document.querySelector("div.searchProfessor div.search-dropdown")//Space for professor boxes

class Requestt{
    constructor(){
        this.response
    }

    async getCampusInfo(index, callback){
        let keys = {
            campus:index
        }

        this.get("getcampusinfo", keys,
            callback,
            async()=>{

            }
        )
    }

    async getProfessor(queryString, campus, callback = ()=>{return true}){
        let keys = {
            professor: queryString,
            campus: campus
        }

        this.get('getprofessor', keys, callback)
    }

    async get(opt, payload, callback = ()=>{return true}, errorCallback = ()=>{return false}){
        let url = "http://www.labmatii.ifc-camboriu.edu.br/quadrodocente/backend/router.php?"
        let option = "option=" + opt;
        let req = await fetch(url + option, 
        {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        if (await req.status === 200) callback(await req.text()) 
        else errorCallback(await req.text())
    }

    gambiarraPanel(href){
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

    
    gambiarraCampus(){
        switch(index){
            case 1:
                this.gambiarraPanel("http://abelardoluz.ifc.edu.br/institucional/")
                break
            case 2:
                this.gambiarraPanel("http://araquari.ifc.edu.br/quadro-de-servidores/")
                break
            case 3:
                this.gambiarraPanel("http://blumenau.ifc.edu.br/quadro-de-servidores-2/")
                break
            case 6:
                this.gambiarraPanel("http://concordia.ifc.edu.br/wp-content/uploads/2018/06/2018_06_12_horario-individual-professores.pdf")
                break
            case 7:
                this.gambiarraPanel("http://professores.fraiburgo.ifc.edu.br/")
                break
            case 8:
                this.gambiarraPanel("http://ibirama.ifc.edu.br/institucional-quadro-funcional/")
                break
            case 9:
                this.gambiarraPanel("http://luzerna.ifc.edu.br/grade-e-corpo-docente/")
                break
            case 10:
                this.gambiarraPanel("http://www.ifc-riodosul.edu.br/site/quadro-funcional/")
                break
            case 11:
                this.gambiarraPanel("https://drive.google.com/drive/u/0/folders/0B7JZjvR-cxkIbmhXaWpWdUtsMGc?usp=sharing_eid&ts=57065df0")
                break
            case 12:
                this.gambiarraPanel("http://saobentodosul.ifc.edu.br/quadro-de-docentes/")
                break;
            case 13:
                this.gambiarraPanel("https://saofrancisco.ifc.edu.br/corpo-docente/")
                break;
            case 14:
                this.gambiarraPanel("http://sombrio.ifc.edu.br/quadro-de-atividades/")
                break
            case 15:
                this.gambiarraPanel("https://ptd.videira.ifc.edu.br/")
                break
            default:
                searchProfessor.readOnly = false
                removeDivs()
            break
        }
    }

    buildBox(obj){
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
}