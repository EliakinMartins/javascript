
function verificar()
{
    idadeBox = document.querySelector("input#idadeBox");
    idade = idadeBox.value;
    res = document.querySelector("p#res");

    if (idade >= 18 && idade <= 65) {
        res.textContent = `Você tem ${idade} anos. Seu voto é Obrigatório.` 
    }else if (idade >= 16 && idade <= 70) {
        res.textContent = `Você tem ${idade} anos. Seu voto é Facultativo.`
        } else {
            res.textContent = `Você tem ${idade} anos. Não vota. `
        }

};
btn = document.querySelector("input#btn");
btn.addEventListener("click",verificar);
