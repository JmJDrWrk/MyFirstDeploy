console.log('read_fetch.js joinned')
var data = new Map();

async function fetchread(pathURL,last) {
    fetch(pathURL).then(function(response) {
    return response.text().then(function(text) {
        
        try{
            data.set(pathURL,text);
            try{
                receive_data(pathURL)
            }catch(e){
                console.log('Considere using \n\nreceive_data(pathURL){\n\tconsole.log(data.get(pathURL))\n}')
            }
            try{
                if(last!=null){
                    eval(last)();
                }else{
                    //console.log('yout funtcion name is null??')
                }
            }catch(e){
                console.log('your function ' + last + 'without arguments does not exist')
            }
        }catch(e){
            console.log('error\n'+e)
            }
        });
        return 'make sure you implemented method awaitdata'
    });
}

async function fetchreadbymapkey(pathURL,mapKEY,last) {
    fetch(pathURL).then(function(response) {
    return response.text().then(function(text) {
        
        try{
            data.set(mapKEY,text);
            try{
                receive_data(pathURL)
            }catch(e){
                console.log('Considere using \n\nreceive_data(pathURL){\n\tconsole.log(data.get(pathURL))\n}')
            }
            try{
                if(last!=null){
                    eval(last)();
                }else{
                    //console.log('yout funtcion name is null??')
                }
            }catch(e){
                console.log('your function ' + last + 'without arguments does not exist')
            }
        }catch(e){
            console.log('error\n'+e)
            }
        });
        return 'make sure you implemented method awaitdata'
    });
}

function html_to_element(source){
    var newEl=document.createElement('div')
    newEl.className = 'html_to_element'
    newEl.innerHTML = source
    return newEl
}

function read_fetch_ping(){console.log('congratulations!!')}