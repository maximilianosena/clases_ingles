 //fecha actual en dia/mes/año
 let tiempo = new Date();
 
 console.log(tiempo)
 //fecha limite en mes/dia/año
 let limite = new Date("11/29/2023 23:59:59")

 
// Calcular la diferencia en milisegundos
const diferenciaEnMilisegundos = limite - tiempo;
let parrafo_dia = document.getElementById("dias");


     if (diferenciaEnMilisegundos<=0){
let aviso= "Ya pasó la fecha de corte";
parrafo_dia.textContent=aviso;
     } else {
         function restar() {
                 // Calcular los días, horas, minutos y segundos restantes

      //1000 milisegundos= 1segundo, 60segundos=1min, 60min=1hr, 24hrs=1d
      //devuelve cuantos días son esos milisegundos, y un resto
 const diasRestantes = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

//diferenciaEnMilisegundos %  toma el resto de la división por el valor que le sigue
//la segunda división, especifica que valor retoma (1000ms*60s*60m)= Cdad hrs
//tomo el resto de la división hasta la unidad a averiguar, ej:
//minutosRestantes  % (1000ms *60s * 60m<- ) / (1000ms*60s <-cuantos minutos son)
 
 const horasRestantes = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

 
 const minutosRestantes = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60)) / (1000 * 60));


 const segundosRestantes = Math.floor((diferenciaEnMilisegundos % (1000 * 60)) / 1000);
     

 
 const texto = `Quedan ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para el siguiente corte`;

 parrafo_dia.textContent = texto;
 }

 restar();

 // Llamar a la función cada segundo para mantener la cuenta regresiva actualizada
 //Valor tiempo está en ms
setInterval(restar,1000);
}
