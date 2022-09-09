const nombre = ["Grillo", "Mosca", "Cucaracha","Rata","Rana","Hormiga","Zanahoria","Brocoli","Calabaza","Lechuga"];
const aleatorio = nombre[Math.floor(Math.random() * nombre.length)];

const tipo = ["Vegetal", "Animal", "Insecto"];
const aleatorio2 = tipo[Math.floor(Math.random() * tipo.length)];
//console.log(aleatorio2);

const energia = [100,150,120,130,200, 300,400,500];
const aleatorio3 = energia[Math.floor(Math.random() * energia.length)];
//console.log(aleatorio3);

// const alimentos={aleatorio,aleatorio2,aleatorio3}
// console.log(alimentos)

const alimento="Alimento: \n nombre: "+aleatorio +"\n Tipo: "  +aleatorio2+ "\n Energia: "+ aleatorio3
console.log(alimento)
    if(aleatorio3>200){
        setTimeout(function(){
        console.log(` ${aleatorio} tipo ${aleatorio2} entrega mas de 200 calorias`)
    },5000)
}

function Sumatoria(aleatorio2,aleatorio3){
    if(aleatorio2='Vegetal'){
        let suma=0
        suma=aleatorio3+aleatorio3
        console.log(suma)
    }
}
