const frmNumero = document.querySelector("#frmNumero");
const selectNumeros = document.querySelector("#selectNumeros");
const numeros = [];

frmNumero.addEventListener("submit", function(event) {
    event.preventDefault();

    numeros.push(
        Number(document.querySelector("#inpNum").value)
    );

    const opt = document.createElement("option"); //<option></option>
    
    opt.textContent = Number(document.querySelector("#inpNum").value);
    
    selectNumeros.appendChild(opt);

    // <select>
    //     <option></option>
    //     <option></option>
    // </select>

    frmNumero.reset();
});