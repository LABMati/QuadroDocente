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