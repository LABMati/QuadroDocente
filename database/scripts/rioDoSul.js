let professores = []

document.querySelectorAll('table#tablepress-8 tbody tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' ,lattes: ''}
    professor.nome = row.querySelector('td').innerText.trim()
    professor.email = row.querySelector('td:nth-child(2)').innerText.trim()

    const riaContainer = row.querySelector('td:nth-child(5) a')
    if (riaContainer)
        professor.ria = riaContainer.href

    const ptdContainer = row.querySelector('td:nth-child(3) a')
    if (ptdContainer)
        professor.ptd = ptdContainer.href

    const horarioContainer = row.querySelector('td:nth-child(4) a')
    if (horarioContainer)
        professor.horario = horarioContainer.href

    if (professor.nome != 'Nome')
        professores.push(professor)
})