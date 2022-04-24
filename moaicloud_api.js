async function get_lightdata_from_path(pathURL,functionCallBack){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','update/lightData')
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    
    xhr.onload = function() {            
        functionCallBack(xhr)
    }

    var finalData = '"path":"'+pathURL.replaceAll('\\','<separator>')+'"'
    let data = `{
            ${finalData}
        }`;
        console.log('sending data_ ' + data)
    xhr.send(data);
}   



//Returns xhr object 
async function doCallNoJSON(mode,url,functionCallBack){
    let xhr = new XMLHttpRequest();
    xhr.open(mode,url)
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    
    xhr.onload = function() {            
        functionCallBack(xhr);
    }


    var finalData = '"":"'+""+'"'
    let data = `{
            ${finalData}
        }`;

    xhr.send(data);
}

