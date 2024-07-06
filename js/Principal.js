/*La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, 
por el aumento de su cartera de clientes, necesita un sistema automatizado que le 
permita llevar ciertas estadísticas. Para ello por cada cliente que atiende le toma 
los siguientes datos: nombre, tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), 
edad y sexo (1. Masculino o 2. Femenino). Es significativo para la empresa, obtener un 
reporte que contenga: a) Cantidad de clientes femeninas mayores de edad, b) cuál ha sido 
la menor edad atendida, c) promedio de edad de los clientes.

Al ser consultada por la forma como desean que se presente la salida, la empresa 
suministra el siguiente formato, informando que Juan (20 años) tomó servicio corto, 
Ana (19) largo, Lin (18) corto, y Mary (15) largo: 

Cantidad de clientes femeninas mayores de edad: 2 
La menor edad atendida fue de 15 años 
El promedio de edad de los clientes es de 18 años 
*/

import CL_Cliente from "./CL_Cliente.js";
import CL_Empresa from "./CL_Empresa.js";

let cliente1=new CL_Cliente('Juan',2,20,1);
let cliente2=new CL_Cliente('Ana',1,19,2);
let cliente3=new CL_Cliente('Lin',2,18,2);
let cliente4=new CL_Cliente('Mary',1,15,2);

let empresa=new CL_Empresa();

empresa.procesarcliente(cliente1);
empresa.procesarcliente(cliente2);
empresa.procesarcliente(cliente3);
empresa.procesarcliente(cliente4);

let salida=document.getElementById("salida")
salida.innerHTML="Reporte";
salida.innerHTML+="<br>Cantidad de clientes femeninas mayores de edad: "+empresa.contclientasmayoredad;
salida.innerHTML+="<br>La menor edad atendida es: "+empresa.menoredad;
salida.innerHTML+="<br>El promedio de edad de los clientes es: "+empresa.promedadclientes();

