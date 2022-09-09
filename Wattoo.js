function salarioMensual(licencias=0){
    let salario = (3500000 + 1500000*licencias)*0.95
    console.log(salario)
    return (salario)
}
salarioMensual(1)
salarioMensual(0)
salarioMensual(2)