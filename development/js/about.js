let gestao = document.querySelector('div.panel > a > div.panel-heading').addEventListener('click', ()=>{
    if(document.querySelector('div#collapse1').offsetHeight > 0){
        document.querySelector('div#collapse1').style.height = '0vw'
    }else{
        document.querySelector('div#collapse1').style.height = '210vw'
    }
})

let devs = document.querySelector('div.devs > a > div.panel-heading').addEventListener('click', ()=>{
    if(document.querySelector('div#collapse2').offsetHeight > 0){
        document.querySelector('div#collapse2').style.height = '0vw'
    }else{
        document.querySelector('div#collapse2').style.height = '315vw'
    }
})

let reitoria = document.querySelector('div.reit > div.panel > a > div.panel-heading').addEventListener('click', ()=>{
    if(document.querySelector('div#collapse3').offsetHeight > 0){
        document.querySelector('div#collapse3').style.height = '0vw'
    }else{
        document.querySelector('div#collapse3').style.height = '105vw'
    }
})