//1- Nomes e horários --------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p a')

let professoresHorario = []
p.forEach(prof => {
    let nome
    nome = prof.innerText.substring(0, prof.innerText.indexOf(' at')).trim()
    if(!nome)
        nome = prof.innerText.substring(0, prof.innerText.indexOf(' At')).trim()
    if (!nome)
        nome = prof.innerText.trim()
    if(nome){
        if (prof.href)
            professoresHorario.push({ nome: nome, horario: prof.href })
        else
            professoresHorario.push({ nome: nome, horario: '' })
    }
})
for (let i = 0; i < professoresHorario.length-1; i++){//remove pessoas iguais
    if (professoresHorario[i].nome == professoresHorario[i + 1].nome) {
        professoresHorario.splice(i, 1)
        i--
    }
}
copy(professoresHorario)

//2- PTD ----------------------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p a')

let professoresPTD = []
p.forEach(prof => {
    let nome
        nome = prof.innerText.trim()
    if (nome) {
        if (prof.href)
            professoresPTD.push({ nome: nome, ptd: prof.href })
        else
            professoresPTD.push({ nome: nome, ptd: '' })
    }
})
copy(professoresPTD)

//3- RIA ----------------------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p a')

let professoresRIA = []
p.forEach(prof => {
    let nome
    nome = prof.innerText.trim()
    if (nome) {
        if (prof.href)
            professoresRIA.push({ nome: nome, ria: prof.href })
        else
            professoresRIA.push({ nome: nome, ria: '' })
    }
})

copy(professoresRIA)

//depois de rodar cada script, de um CTRL+V em algum lugar (irá colar o objeto), depois disso, passe esses 3 objetos para a função abaixo
function mesclarObjetos(horario, ptd, ria) {
    let professores = []
    horario.forEach(h => {
        let professor = { nome: "", lattes: "", ria: "", ptd: "", email: "" }
        professor.nome = h.nome
        professor.horario = h.horario
        ptd.forEach(p => {
            if (p.nome == h.nome) {
                professor.ptd = p.ptd
                return
            }
        })
        ria.forEach(r => {
            if (r.nome == h.nome) {
                professor.ria = r.ria
                return
            }
        })
        professores.push(professor)
    })
    copy(professores)
}