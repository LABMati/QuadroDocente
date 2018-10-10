//1- Nomes e horários --------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p')

let professoresHorario=[]
for (let i = 0; i < 24; i++) {//24 para pegar somente o de 2018
	let nome
	let horario
	if(i!=1){//p vazio
		nome = p[i].innerText.substring(0,p[i].innerText.indexOf('–')).trim()
		if(!nome)
			nome = p[i].innerText.substring(0,p[i].innerText.indexOf('(')).trim()

		horario = p[i].querySelector('a')
		if(horario)
			professoresHorario.push({nome:nome,horario:horario.href})
		else
			professoresHorario.push({nome:nome,horario:''})
	}
}
copy(professoresHorario)

//2- PTD ----------------------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p')

let professoresPTD=[]
for (let i = 0; i < 24; i++) {
	let nome
	let ptd
	if(i!=1){//p vazio
		nome = p[i].innerText.substring(0,p[i].innerText.indexOf('–')).trim()
		if(!nome)
			nome = p[i].innerText.substring(0,p[i].innerText.indexOf('(')).trim()

		ptd = p[i].querySelector('a')
		if(ptd)
			professoresPTD.push({nome:nome,ptd:ptd.href})
		else
			professoresPTD.push({nome:nome,ptd:''})
	}
}
copy(professoresPTD)

//3- RIA ----------------------------------------------------------------------------
const p = document.querySelector('.entry-content').querySelectorAll('p')

let professoresRIA=[]
for (let i = 0; i < 14; i++) {//24 para pegar somente o de 2018
	let nome
	let ria
	if(i!=1){//p vazio
		nome = p[i].innerText.substring(0,p[i].innerText.indexOf('–')).trim()
		if(!nome)
			nome = p[i].innerText.substring(0,p[i].innerText.indexOf('(')).trim()

		ria = p[i].querySelector('a')
		if(ria)
			professoresRIA.push({nome:nome,ria:ria.href})
		else
			professoresRIA.push({nome:nome,ria:''})
	}
}
copy(professoresRIA)

//depois de rodar cada script, de um CTRL+V em algum lugar (irá colar o objeto), depois disso, passe esses 3 objetos para a função abaixo
function mesclarObjetos(horario,ptd,ria){
	let professores=[]
	horario.forEach(h=>{
		let professor = {nome:"",lattes:"",ria:"",ptd:"",email:""}
		professor.nome = h.nome
		professor.horario = h.horario
		ptd.forEach(p=>{
			if(p.nome == h.nome){
				professor.ptd = p.ptd
				return
			}
		})
		ria.forEach(r=>{
			if(r.nome == h.nome){
				professor.ria = r.ria
				return
			}
		})
		professores.push(professor)
	})
	copy(professores)
}

//depois de rodar os códigos acima, executar isso no quadro de email e Lattes
//E-mail e Lattes---------------------------------------------------
document.querySelectorAll('tbody').forEach(table => {
	table.querySelectorAll('tr').forEach(row => {
		let nome = row.querySelector('td').innerText
		nome = nome.substring(nome.lastIndexOf('.') + 1, nome.length).replace(/\r?\n|\r/g, ' ').trim()
		if (nome != 'Nome') {
			__setName(removeAcento(nome), row)
		}
	})
})

function __setName(nome, row) {
	data.forEach(professor => {
		if (removeAcento(professor.nome) == nome) {
			professor.email = row.querySelector('td:nth-child(2)').innerText.trim()
			if (row.querySelector('td:nth-child(4) a'))
				professor.lattes = row.querySelector('td:nth-child(4) a').href
			else
				professor.lattes = ''
			return
		}
	})
}
function __removeAcento(text) {//isso é copiado
	text = text.toLowerCase();
	text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
	text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
	text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
	text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
	text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
	return text;
}
//me descupla por isso