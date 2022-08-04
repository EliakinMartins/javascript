
function horario() {

var horaAtual = document.querySelector("body")
var horaAtual = new Date()
var agora = horaAtual.getHours()

var divMsg = document.querySelector("div#msg")

var foto = document.querySelector("img#pic")

//agora = 00

    if(agora >= 00 && agora < 06) {
        divMsg.textContent=("Boa madrugada!!!")
        foto.src="img/madrugada.jpg"
        
    }else if (agora >= 06 && agora < 12) {
        divMsg.textContent=("Bom dia!!!")
        foto.src="img/manha.jpg"
    }else if (agora >= 12 && agora < 18) {
        divMsg.textContent=("Boa tarde!!!")
        foto.src="img/tarde.jpg"
    }else {
        divMsg.textContent=("Boa noite!!!") 
        foto.src="img/noite.jpg"
    }
        
}

addEventListener('load',horario)