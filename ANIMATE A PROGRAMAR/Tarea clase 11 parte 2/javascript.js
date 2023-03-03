/*Tarea parte 1*/

let restaurante = "Carne" ;
switch (restaurante) {
case 'Carne':
console.log ("Con la carne, te ofrecemos vino tinto");
break;
case 'Pescado':
console.log ("Con el pescado, te ofrecemos vino blanco");
break;
case 'Verdura':
console. log ("Con la verdura, te ofrecemos agua");
break;
default:
console.log ("No disponible");
}



/*Tarea parte 2*/

let menu = [ "Pastas", "Papas", "Empanadas", "Pizza", "Picadas", "Cazuelas", "Ensaladas",]

for(let abc = 0; abc <  menu.length; abc++) {
    console.log (menu [abc])
}


/*Tarea parte 3*/

let numero = 0
let frase = (numero + " es menor que 11")
while (numero <11) {
 console.log (frase)
    numero++; 
    
}


console.log ("fin")

