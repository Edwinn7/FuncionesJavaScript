// declarando la funcion

function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    //let nombre = codigo.split([":"])
    return nombre
}

// llamando la funcion

let resultado=obtenerNombre("1018222597 : Edwin")
console.log(resultado)