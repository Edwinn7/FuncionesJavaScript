let CrearAprendiz=(nombre,planeta,edad,estatura,Clasificar)=>{DatosAprendiz={nombre:nombre,planeta:planeta,edad:edad,estatura:estatura}
    Clasificar(DatosAprendiz)
}

CrearAprendiz('gg','tierra',19,1.70,function(aprendiz){
    if(aprendiz.edad>=15){
        console.log("Usted se va para la clase de sable de luz")
    }
    else{
        console.log("Usted se va para la clase de fuerza")
    }
})
