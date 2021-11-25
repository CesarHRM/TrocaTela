var iframe = document.getElementById("tela"); 
var URLs = ['https://g1.globo.com/', 'https://globo.com/']
var urlAtual= URLs[1];

var intervalo = 12000;

function troca_link(url){   
    iframe.src = url
    console.log("executou");
}


function trocarTela(){
    var proxUrl = URLs.indexOf(urlAtual) +1;
    var tamanho = URLs.length
    if(proxUrl > tamanho -1){ proxUrl=0;}
    //console.log(novaUrl);
    //console.log(tamanho);
    //console.log(urlAtual);
    urlAtual=URLs[proxUrl];
    troca_link(urlAtual);
}

function teste(){console.log('testwe');}


setInterval(trocarTela,intervalo);


function addLink(){
    console.log('bot press');
    const inputUrl = document.querySelector("#botAdd");
    const valorUrl = inputUrl.value;
    console.log(valorUrl);

    URLs.push(valorUrl);
}

function setarTempo(){
    
}