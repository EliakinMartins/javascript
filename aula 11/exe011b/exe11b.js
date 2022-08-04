
function confirma() {
    txtBox = document.querySelector("input");
    txt = txtBox.value
    btn = document.querySelector("input#btn");
    res = document.querySelector("div");
    
    if(txt == "Brasil") {
        res.textContent = "Nacional!"
    }else res.textContent = "Estrangeiro. Seja muito bem-vindo ao Brasil!"

}

btn.addEventListener('click',confirma)