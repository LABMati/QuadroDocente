var tr = {} = document.querySelectorAll('tr')
var queries = []
var i = 1
var hiddenElement = document.createElement('a')

hiddenElement.href = 'data:attachment/text,'
while(i < tr.length){
    if(i != 68){
        queries[i] = tr[i].children[0].innerText + " ; " + tr[i].children[1].innerText  + " ; " 
        + tr[i].children[2].querySelector('a').href  + " ; " + tr[i].children[3].querySelector('a').href  
        + " ; " + tr[i].children[4].querySelector('a').href  + " ; " + tr[i].children[5].querySelector('a').href 
        + " ; " + tr[i].children[6].querySelector('a').href + ' ; '     
        hiddenElement.href += encodeURI(queries[i]) 
    }
    i++;
}

hiddenElement.target = '_blank';
hiddenElement.download = 'quadroDocente.txt';
hiddenElement.click();
