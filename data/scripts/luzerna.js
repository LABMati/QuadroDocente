let professores = []

document.querySelectorAll('tbody tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' ,lattes: ''}
    professor.nome = row.querySelector('td').innerText.trim()
    
    const ptdContainer = row.querySelector('td:nth-child(2) a')
    if (ptdContainer)
        professor.ptd = ptdContainer.href

    if (professor.nome != 'Docentes')
        professores.push(professor)
})