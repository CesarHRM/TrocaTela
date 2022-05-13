var iframe = document.getElementById("tela"); 



var URLs = [
  'https://app.powerbi.com/reportEmbed?reportId=393d85cc-e188-4bfa-a9ad-da9d4005cd3d&autoAuth=true&ctid=e69a713f-2392-4a12-8767-3a3ca2a2f40d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D ',
  'https://app.powerbi.com/reportEmbed?reportId=7b88fe85-4d0a-4b16-83d9-02e6f838aac7&autoAuth=true&ctid=e69a713f-2392-4a12-8767-3a3ca2a2f40d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D',
  'https://app.powerbi.com/reportEmbed?reportId=d827c461-b690-47e9-b43f-53620f16a2a3&autoAuth=true&ctid=e69a713f-2392-4a12-8767-3a3ca2a2f40d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D'
];



var urlAtual= URLs[0];
var urlAtualJson = URLs[0];


var intervalo = 60000;

var ciclo = "";

refresh();

function troca_link(url){   
    iframe.src = url
    console.log(url);
}



function refresh(){
    /*fetch(" https://sheetdb.io/api/v1/7kho44vtmakgm")
    .then(response => response.json() )
    .then(data =>{
        URLs = data
        urlAtualJson= URLs[1];
        urlAtual = urlAtualJson["url"];
        console.log(urlAtual);
        console.log(data)
  /*  })
    .catch(err => console.log(err)) */
}


function trocarTela(){
    var tamanho = URLs.length
   
    var proxUrl = URLs.indexOf(urlAtual) +1;
    if(proxUrl > tamanho -1){ proxUrl=0;}
    //console.log(novaUrl);
    //console.log(tamanho);

    urlAtual =URLs[proxUrl];
    //urlAtual = urlAtualJson["url"];
    console.log(urlAtual)
    troca_link(urlAtual);

    console.log("URL ATUAL: "+ proxUrl);
}


function init(){
    trocarTela();
    ciclo = setInterval(trocarTela,intervalo);
}

function stop(){
    clearInterval(ciclo);
}


function addLink(){
    //console.log('bot press');
    const inputUrl = document.querySelector("#botAdd");
    const valorUrl = inputUrl.value;
    //console.log(valorUrl);
    URLs.push(valorUrl);
    salvarDadosNoStorage();
}

function setTime(){
    
    const inputtemp = document.querySelector("#inputTime");
    const valortemp = inputtemp.value;
    intervalo = valortemp * 1000;
    console.log(intervalo);
    
}


function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  } 
