let professores = []

document.querySelectorAll('tbody.row-hover tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' ,lattes: ''}
    professor.nome = row.querySelector('td').innerText.trim()
    const ptdContainer = row.querySelector('td:nth-child(2) a:last-child')
    if(ptdContainer)    
        professor.ptd = ptdContainer.href
    professores.push(professor)
})