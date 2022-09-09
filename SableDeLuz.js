function revisarSables(sables,contar){
    let filtro=sables.filter(function(sable){
        return (sable < 0)
    })
    contar(filtro)
}

let sables = [-1,-5,-8,2,4,-7,-6,-3]
// revisarSables(sables,function(filtro){
//     for (let i = 0; i < filtro.length; i++) {
//         if (filtro < 0) {
//         }
//      console.log("la cantidad de sables con energia negativa fue de: " + filtro);
//     }
// })
function contar(filtro) {
    return filtro.filter(x => x < 0).length
}
console.log("la cantidad de sables con energia negativa fue de: " + contar(sables))

