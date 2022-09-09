function promedio(temperaturas){
    let tempMaxima = Math.max(...temperaturas)
    let tempMinima = Math.min(...temperaturas)
    let promedio = (tempMaxima + tempMinima) / 2
    console.log("El promedio de temperatura fue de: " + promedio);
}
promedio([24,6,20,40])