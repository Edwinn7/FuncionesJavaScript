let filtrarPlanos=(planos,arrancarNave)=>{filtro=planos.filter(function(plano){plano >=1 & plano <=10})   
    arrancarNave(filtro)
}

let planos = [-1,100,200,300,400,500]

filtrarPlanos(function(filtro){
    let cuenta =0
    cuenta=filtro.length
    if(cuenta>0){
        console.log("Arrancando la nave")
    }
    else{
        console.log("Buscando los planos")
    }
})
