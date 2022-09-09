let promedio = (temperaturas) => {

    let tempMaxima = Math.max(...temperaturas)
    let tempMinima = Math.min(...temperaturas)
    let promedio = (Math.max(...temperaturas) + Math.min(...temperaturas)) / 2

    console.log("El promedio de temperatura fue de: " + promedio);
}
promedio([17, 35, 26, 65])
