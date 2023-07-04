var copia = document.querySelector(".btnCopia");
var ingreso = document.querySelector(".textIngreso");
var resultado = document.querySelector(".textResultado");

copia.style.display = "none"


function validacion()
{
	var entrada = document.querySelector(".textIngreso").value;
    var revisa = entrada.match(/^[a-z]*$/);

    if(!revisa || revisa === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encripta(entrada)
{
	var cambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    entrada = entrada.toLowerCase()

    for(var i = 0; i < cambio.length; i++){
        if(entrada.includes(cambio[i][0])){
              entrada = entrada.replaceAll(cambio[i][0], cambio[i][1])

        }

    }
    return entrada;
}


function btnEncri()
{
	    if(!validacion()) {
        var entrada = encripta(ingreso.value)
        resultado.value = entrada
        ingreso.value = "";
        copia.style.display = "block"
    
    }
}


function desencripta(salida)
{
	var cambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    salida = salida.toLowerCase()

    for(var i = 0; i < cambio.length; i++){
        if(salida.includes(cambio[i][1])){
              salida = salida.replaceAll(cambio[i][1], cambio[i][0])

        }

    }
    return salida;

}


function btnDes()
{
		
        var salida = desencripta(ingreso.value)
        resultado.value = salida
        ingreso.value = "";
        copia.style.display = "block"
}



function btnCopy()
{
	resultado.select();
    navigator.clipboard.writeText(resultado.value)
    resultado.value = "";
    alert("Texto Copiado")

}
