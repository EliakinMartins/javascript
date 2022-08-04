function consultar(){
    mostrar = document.querySelector("input#txtvel");
    velo = mostrar.value;
    res = document.querySelector("div#res");

    if (velo > 60) {
             res.innerText = `Você está a ${velo} km/h. Está acimada do permitido. MULTADO!`;
     }   else res.innerText=`Você está a ${velo} km/h. Use sempre o cinto de seugurança e boa viagem!`;
 
 }

 
 btn = document.querySelector("input#btn");
 btn.addEventListener('click',consultar)