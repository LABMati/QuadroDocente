let professores = []

document.querySelectorAll('tbody tr').forEach(row => {
    let professor = { nome: '', horario: '', ptd: '', ria: '', email: '' }

    const nomeContainer = row.querySelector('td')
    professor.nome = nomeContainer.innerText.trim()
    const lattesContainer = nomeContainer.querySelector('a')
    if(lattesContainer)
        professor.lattes = lattesContainer.href

    const riaContainer = row.querySelector('td:nth-child(7) a')
    if (riaContainer)
        professor.ria = riaContainer.href

    const ptdContainer = row.querySelector('td:nth-child(8) a')
    if (ptdContainer)
        professor.ptd = ptdContainer.href
    
    professores.push(professor)
})

//Horario ----------------------------------------------------------
const paragraphs = document.querySelector('.entry-content').querySelectorAll('p a')
let professoresHorario = []
paragraphs.forEach(p => {
    if (p.innerText.length>0) {
        professoresHorario.push({
            nome: p.innerText,
            horario: p.href
        })
    }
        
})

function mesclarObjetos(dados, horario) {
    let professores = []
    dados.forEach(prof => {
        let professor = {
            nome: prof.nome,
            lattes: prof.lattes,
            ria: prof.ria,
            ptd: prof.ptd,
            email: "",
            horario: ""
        }
        horario.forEach(h => {
            if (h.nome == prof.nome) {
                professor.horario = h.horario
                return
            }
        })
        professores.push(professor)
    })
    copy(professores)
}

mesclarObjetos(
    [{"nome":"Adalto Aires Parada","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adalto-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adalto-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/9118458749237576"},{"nome":"Adeilma Carneiro Vidal Bastos","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adeilma-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adeilma-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/3639414449707869"},{"nome":"Adriana da Igreja","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adriana-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adriana-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/7938726458534487"},{"nome":"Adriano Silveira Mastella","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Adriano-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/07/Adriano-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/6026875586906042"},{"nome":"Alexandre Pereira de Vasconcellos","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Alexandre-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Alexandre-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1812691650060410"},{"nome":"Amir Tauille","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/4353761443905778"},{"nome":"Anderson Henrique da Silva Marcondes","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/07/Anderson-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Anderson-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/8597354642218321"},{"nome":"Andreia Luciana da Rosa Scharmach","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Andreia-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Andreia-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/8708075021423238"},{"nome":"Camila de Carli","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Camila-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Camila-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/5870102346637158"},{"nome":"Carlos Eduardo Bencke","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Carlos-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Carlos-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1651914444296279"},{"nome":"Cauê Roratto","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Caue-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Cau%C3%AA-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/4219961674167281"},{"nome":"Delma da Silva","horario":"","ptd":"","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Delma-RIA.pdf","email":""},{"nome":"Diogo Amaral de Magalhães","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/5513458595230847"},{"nome":"Eduardo Arceno","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Eduardo-Arceno-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Eduardo-Arceno-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/5043836826920457"},{"nome":"Eduardo Augusto Werneck Ribeiro","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/0958574773546143"},{"nome":"Eduardo Francisco Ferreira","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Eduardo-Ferreira-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Eduardo-Francisco-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/0508004092713180"},{"nome":"Ewerton Luiz Silva","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Ewerton-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Ewerton-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/4735721852261575"},{"nome":"Francisco Rafael Moreira Mota","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/2597518275419304"},{"nome":"Frederson Fogaça","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Frederson-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Frederson-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/5002653886064685"},{"nome":"Gilmar Staviski","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Gilmar-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/07/Gilmar-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/2838997350874360"},{"nome":"Giselle Vanessa Trevisan","horario":"","ptd":"","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Giselle-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1856859365147176"},{"nome":"Harry Erwin Moissa","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/4308129629499273"},{"nome":"Icaro Bittencourt","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Icaro-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Icaro-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/8105634715591920"},{"nome":"Joceli Antônio Andreola","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Joceli-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Joceli-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1345220287739609"},{"nome":"Jonny Ivon Beckert","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Jonny-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Jonny-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/4459319690511124"},{"nome":"Kamila Mariana Devegili","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Kamila-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Kamila-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/6083915271776569"},{"nome":"Karlinne Lisandra Devegili","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Karlinne.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Karlinne-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/9070424216272754"},{"nome":"Karina Eliz Christmann","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/7930276281507403"},{"nome":"Leticia Saragiotto Colpini","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/1503906633383666"},{"nome":"Levon Boligian","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Levon-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Levon-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1273498525862868"},{"nome":"Lucas Knebel Centenaro","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Lucas-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Lucas-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/6102450494708767"},{"nome":"Lucélia Destefani","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Lucelia-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Lucelia-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/4508292844975353"},{"nome":"Luciano Rosa","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Luciano-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Luciano-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/6355102991133961"},{"nome":"Maico João Trombelli","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Maico-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Maico-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/8825160109933726"},{"nome":"Marcio Marcelo Piffer","horario":"","ptd":"","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Marcio-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/1546073662061775"},{"nome":"Mara Terezinha Mariotti","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Mara-PTD.pdf","ria":"","email":"","lattes":"http://lattes.cnpq.br/4902924011163509"},{"nome":"Marina Farias Martins","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/5596394936919671"},{"nome":"Mauro Bittencourt dos Santos","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Mauro-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Mauro-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/7961883197102587"},{"nome":"Neiva de Assis","horario":"","ptd":"","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Neiva-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/8663735636206425"},{"nome":"Nilton Manoel Lacerda Adão","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Nilton-PTD.pdf","ria":"","email":"","lattes":"http://lattes.cnpq.br/1372847763857288"},{"nome":"Patrícia Devantier Neuenfeldt","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Patricia-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Patricia-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/0737647220054283"},{"nome":"Ricardo Reghelin","horario":"","ptd":"","ria":"","email":"","lattes":"http://lattes.cnpq.br/9626455179452726"},{"nome":"Rômulo Schweitzer","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Romulo-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Romulo-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/9421132151291937"},{"nome":"Sandro Augusto Rhoden","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sandro-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sandro-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/0798953595167802"},{"nome":"Sara Regina da Rosa Pinter","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sara-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sara-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/4925672003283544"},{"nome":"Sérgio Ruggiero","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sergio-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Sergio-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/3698605769400131"},{"nome":"Severino Mirandola Júnior","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Severino-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Severino-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/0506738937287155"},{"nome":"Susana Nunes Taulé Piñol","horario":"","ptd":"","ria":"","email":"","lattes":""},{"nome":"Túlio Tibério Quirino de Medeiros","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Tulio-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Tulio-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/5347716354129542"},{"nome":"Ubiratan Ramos","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Ubiratan-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Ubiratan-RIA.pdf","email":""},{"nome":"Vitor Moraes","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Vitor-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Vitor-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/0632197206741240"},{"nome":"Viviani Corrêa Teixeira","horario":"","ptd":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Viviani-PTD.pdf","ria":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/06/Viviani-RIA.pdf","email":"","lattes":"http://lattes.cnpq.br/7959403211618013"}],
    [{"nome":"Adalto Aires Parada","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/Adalto-2018.2.pdf"},{"nome":"Adriana da Igreja ","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/ADRIANA.pdf"},{"nome":"Adriano Mastella","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/ADRIANO.pdf"},{"nome":"Alexandre Pereira de Vasconcellos","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/ALEXANDRE.pdf"},{"nome":"Anderson Henrique da Silva Marcondes","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/ANDERSON.pdf"},{"nome":"Andreia Luciana da Rosa Scharmach","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/ANDREIA-2.pdf"},{"nome":"Camila de Carli","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/CAMILA-2.pdf"},{"nome":"Cauê Roratto","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/CAUE.pdf"},{"nome":"Eduardo Arceno","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/EDUARDO-ARCENO.pdf"},{"nome":"Eduardo Ferreira","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/EDUARDO-FERREIRA.pdf"},{"nome":"Ewerton Luiz da Silva","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/EWERTON.pdf"},{"nome":"Frederson Fogaça","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/FREDERSON.pdf"},{"nome":"Gilmar Staviski","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/GILMAR.pdf"},{"nome":"Giselle Vanessa Trevisan","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/GISELLE.pdf"},{"nome":"Ícaro Bittencourt","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/ICARO-2.pdf"},{"nome":"Joceli Antônio Andreola","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/JOCELI.pdf"},{"nome":"Jonny Ivon Beckert","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/JONNY.pdf"},{"nome":"Juliana Baumhardt","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/JULIANA-2.pdf"},{"nome":"Kamila Mariana Devegili","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/KAMILA-2.pdf"},{"nome":"Karlinne Lisandra Devegili","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/KARLINNE.pdf"},{"nome":"Levon Boligian","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/LEVON.pdf"},{"nome":"Lucas Knebel Centenaro","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/LUCAS-2.pdf"},{"nome":"Lucélia Destefani","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/LUCELIA.pdf"},{"nome":"Luciano Rosa","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/LUCIANO.pdf"},{"nome":"Maico João Trombelli","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/MAICO.pdf"},{"nome":"Mara Terezinha Mariotti","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/MARA.pdf"},{"nome":"Mauro Bittencourt dos Santos","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/MAURO.pdf"},{"nome":"Nilton Manoel Lacerda","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/NILTON-1.pdf"},{"nome":"Patrícia Devantier Neuenfeldt","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/PATRICIA-2.pdf"},{"nome":"Rômulo Schweitzer","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/ROMULO-2.pdf"},{"nome":"Sandro Augusto Rhoden","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/SANDRO-2.pdf"},{"nome":"Sara Pinter","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/SARA.pdf"},{"nome":"Sérgio Ruggiero","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/Horarios-de-atendimento-Sergio-Rugiero.pdf"},{"nome":"Severino Mirandola","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/SEVERINO.pdf"},{"nome":"Susana Nunes Taule Pinol","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/SUSANA.pdf"},{"nome":"Túlio Medeiros","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/TULIO-2.pdf"},{"nome":"Ubiratan Ramos","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/09/UBIRATAN-2.pdf"},{"nome":"Vitor Moraes","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/07/Vitor-horario.pdf"},{"nome":"Viviani Corrêa Teixeira","horario":"https://saofrancisco.ifc.edu.br/wp-content/uploads/2018/05/VIVIANI.pdf"}]
)