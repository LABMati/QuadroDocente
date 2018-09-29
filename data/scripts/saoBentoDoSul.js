//1- Nomes e PTD -------------------------------------------------------------- 
let professoresPTD = []

document.querySelectorAll('tbody tr').forEach(row => {
    let link = row.querySelector('a:last-child')
    if (link)
        link = link.href
    else
        link = ''
    professoresPTD.push({
        nome: row.querySelector('td').innerText,
        ptd: link,
    })
})

copy(professoresPTD)

//2- Horario ----------------------------------------------------------------------------
let professoresHorario = []
document.querySelectorAll('tbody tr').forEach(row => {
    let link = row.querySelector('a:last-child')
    if (link)
        link = link.href
    else
        link=''
    
    professoresHorario.push({
        nome: row.querySelector('td').innerText,
        horario: link,
    })
})
copy(professoresHorario)

//depois de rodar cada script, de um CTRL+V em algum lugar (irá colar o objeto), depois disso, passe esses 3 objetos para a função abaixo
function mesclarObjetos(horario, ptd) {
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
        professores.push(professor)
    })
    copy(professores)
}