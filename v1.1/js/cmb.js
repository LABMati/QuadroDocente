var responses
var search = "Marcelo" //document.querySelector("div.search > input")
function showResult(search){
    if(search.length==0){
        return
    }
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1:8080/search.php?q='+search, true)
    xhr.addEventListener('load', ev=>{
        responses = JSON.parse(xhr.responseText)
        console.log(responses)
    })
    xhr.send()
}
