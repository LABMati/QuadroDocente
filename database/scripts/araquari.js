let professores = []

function getProfessores() {
    document.querySelectorAll('tbody:nth-child(2) tr').forEach(row => {
        let professor = { nome: '', horario: '', ptd: '', ria: '', email: '', lattes: ''}
        if (row.querySelector('td:nth-child(3)').innerText == 'Docente'){
            professor.nome = row.querySelector('td:nth-child(2)').innerText.trim()
            professor.email = row.querySelector('td:nth-child(8)').innerText.trim()
            const ptdContainer = row.querySelector('td:nth-child(9) a:last-child')
            if(ptdContainer)
                professor.ptd = ptdContainer.href

            const horarioContainer = row.querySelector('td:nth-child(10) a:last-child')
            if (horarioContainer)
                professor.horario = horarioContainer.href

            const riaContainer = row.querySelector('td:nth-child(11) a:last-child')
            if(riaContainer)
                professor.ria = riaContainer.href

            professores.push(professor)
        }
    })
}
//colar o codigo uma vez e executar a funcao getProfessores para cada página