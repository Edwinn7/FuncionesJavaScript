function salMens(licencias=0){
    let salario = (3500000 + 1500000*licencias)*0.95
    console.log(salario)
    return (salario)
}
salMens(1)
salMens(0)
salMens(2)