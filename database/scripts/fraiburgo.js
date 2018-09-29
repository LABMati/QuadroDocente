let professores = []
document.querySelectorAll('tbody tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' ,lattes: ''}
    professor.nome = row.querySelector('td').innerText.trim()
    professor.ptd = 'https://drive.google.com/drive/folders/0BxC_zttHORwMQ1k2RkNmcnMzYkE'
    professor.horario = 'https://drive.google.com/drive/folders/0BxC_zttHORwMY3dRLUlHLXdNbnM'
    
    professores.push(professor)
})