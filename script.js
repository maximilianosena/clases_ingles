document.addEventListener("DOMContentLoaded", function(){
let clases_Presenciales=[
    { dia : "30 junio",
    semana : 1,
    nombre : "Nosi V"
    },
    { dia : "06 julio",
    semana : 2,
    nombre : "Eric M"
    },
    { dia : "18 julio",
    semana : 4,
    nombre : "Vijay D"
    }
]


let clases_Teoricas=["Semana 1", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"]

for (let i=0; i<clases_Presenciales.length; i++)
{

    //creo una variable parrafos, en la que creo un elemento linea de tabla
    let parrafos = document.createElement("tr")

    //creo una variable texto, donde creo el texto a mostrar
    let texto = document.createTextNode ("Profe: " + clases_Presenciales[i].nombre + " --Fecha: " + clases_Presenciales[i].dia + " --Semana: "+ clases_Presenciales[i].semana);

    //a la variable de lineas de tablas, le integro el texto creado (variable texto) 
    parrafos.appendChild(texto);

    //Al id Presencial, encabeza la tabla, le integro la variable parrafos, la cual contiene el texto y es un elemento de linea de tabla
    document.getElementById("presencial").appendChild(parrafos);

    //le integro el estilo de tr de CSS
    parrafos.classList.add("tr");
    }



for (let i=0; i<clases_Teoricas.length; i++){

    //creo una variable parrafos, la cual crea un elemento de item de lista
    let parrafos= document.createElement("li");

    //creo la variable texto, la cual contiene el texto a mostrar
    let texto= document.createTextNode("Realizada en: " + clases_Teoricas[i]);


    //a la variable parrafos, la cual es item de lista, le integro el texto a mostrar
    parrafos.appendChild(texto);

    //al id teorica, el cual es el ul de la lista, le integro la variable parrafos (item de lista con su texto)
    let contenedor= document.getElementById("teorica").appendChild(parrafos)


}


    let numeros= clases_Teoricas.length;
    let texto= document.createTextNode(" Clases realizadas: " + numeros + " teóricas")
 
    document.getElementById("contador").appendChild(texto);
 

    
    let number= clases_Presenciales.length;
    let text= document.createTextNode(" Clases realizadas: " + number + " presenciales")

    document.getElementById("cdad").appendChild(text);


    let valor_teo1= document.getElementById("val_teo1").innerHTML;
let valor_pre1= document.getElementById("val_pre1").innerHTML;



//Clases presenciales hechas y requisito
let obligacion = [{numero: 3, corte: "30 de julio"}, {numero: 7, corte: "3 de setiembre"}]

//
for (let i=0; i<obligacion.length;i++){
    let salto= document.createElement("br")
if (numeros>=obligacion[i].numero){
    let text= document.createTextNode(" Clases teoricas suficientes para el corte del " + obligacion[i].corte);

document.getElementById("aprob_teo").appendChild(text);

} else {
    let text= document.createTextNode(" Faltan " + (obligacion[i].numero-numeros) +" clases teoricas para el corte del "+ obligacion[i].corte );
    
    document.getElementById("aprob_teo").appendChild(text);
}
 // Agregar un salto de línea después de cada resultado (excepto el último)
 if (i < obligacion.length - 1) {
    document.getElementById("aprob_teo").appendChild(salto);

}
}


for (let i=0; i<obligacion.length;i++){
    let salto= document.createElement("br")
if (number>=obligacion[i].numero){
    let text= document.createTextNode(" Clases presenciales suficientes para el corte del " + obligacion[i].corte)

document.getElementById("aprob_pre").appendChild(text);

} else {
    let text= document.createTextNode(" Faltan " + (obligacion[i].numero-number) +" clases presenciales para el corte del " + obligacion[i].corte)

    document.getElementById("aprob_pre").appendChild(text);
}
 // Agregar un salto de línea después de cada resultado (excepto el último)
 if (i < obligacion.length - 1) {
    document.getElementById("aprob_pre").appendChild(salto);

}
}
})