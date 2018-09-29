let professores = []

document.querySelectorAll('tbody tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' }
    professor.nome = row.querySelector('td').innerText.trim()
    professor.email = row.querySelector('td:nth-child(3)').innerText.trim()
    const lattesContainer = row.querySelector('td:nth-child(5) a')
    if (lattesContainer)
        professor.lattes = lattesContainer.href

    const riaContainer = row.querySelector('td:nth-child(7) a')
    if (riaContainer)
        professor.ria = riaContainer.href

    const ptdContainer = row.querySelector('td:nth-child(6) a')
    if (ptdContainer)
        professor.ptd = ptdContainer.href

    const horarioContainer = row.querySelector('td:nth-child(4) a')
    if (horarioContainer)
        professor.horario = horarioContainer.href

    if (professor.nome != 'Nome')
        professores.push(professor)
})