function revisarSables(sables,contar){
    let filtro=sables.filter(function(sable){
        return (sable < 0)
    })
    contar(filtro)
}
let sables = [-1,-5,-8,2,4,-7,-6]
function contar(filtro) {
    return filtro.filter(energia => energia < 0).length
}
console.log("la cantidad de sables con energia negativa fue de: " + contar(sables))