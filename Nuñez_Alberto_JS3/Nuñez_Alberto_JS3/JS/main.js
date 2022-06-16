
//*********************************SIMULADOR DE DEFINICIONES DE DIFERENTES TIPOS DE BUGS***************************

//**********************ESTE ARRAY CONTIENE LOS TIPOS DE PRUEBAS MAS FRECUENTES EN EL TESTING DE SOFTWARE**********
class tipoDePrueba {
  constructor(nombre, prioridad, dispositivo, funcional) {
      this.nombre = nombre;
      this.prioridad = prioridad;
      this.dispositivo = dispositivo;
      this.funcional = funcional;
  }
}
const pruebas = [];


//*********************************FUNCION PARA DARLE LA BIENVENIDA AL USUARIO*************************************
let nombre =prompt("Como te llamas?");

function saludar (){
  alert ("Buen dia " + nombre + "," + " acompañame para aprender algo sobre testing de software")
}
//*********************************FUNCION PARA DESPEDIRSE DEL USUARIO**********************************************
function despedir(){
  alert ("Gracias por visitarnos " + nombre + "," + " para saber mas sobre testing visita nuestra web: patagoniawise.tech")
}
saludar() //INVOCACION DE LA FUNCION DEDICADA A SALUDAR AL USUARIO

//***********************************INGRESO DE DATOS POR PARTE DEL USUARIO****************************************
let ingreso = prompt(
    "Elige que tipo de bug deseas conocer: \n\n 1-Heisenbug \n 2-Bohrbug \n 3-Mandelbug \n 4-Schroedinbug \n 5-Fantasma \n\n Para salir ingresa CHAU"
  );
  if (ingreso == "CHAU") despedir(); //INVOCACION DE LA FUNCION DEDICADA A DESPEDIR AL USUARIO

//*********************************BUCLE QUE DEVOLVERA LAS DEFINICIONES ELEGIDAS EN CADA CASO***********************  
  while (ingreso != "CHAU") {
    switch (ingreso) {
      case "1":
        pruebas.push(new tipoDePrueba("STRESS", 1 , "DESKTOP", false)); //Agregando el dato ingresado en un Array
        alert("En jerga de programación, un heisenbug es un tipo de bug que parece desaparecer o comportarse de otro modo al intentar ser observado en detalle.El término es un juego de palabras a partir del nombre de Werner Heisenberg, el físico que dedujo el efecto de observación de la mecánica cuántica, según el cual el mero hecho de observar un sistema de una manera determinada altera el estado de este. ");
        break;
      case "2":
        pruebas.push(new tipoDePrueba("INTEGRACION", 2 , "MOBILE", true));//Agregando el dato ingresado en un Array
        alert("Bohrbug. Estos tipos de bugs, llamados así por el modelo atómico de Bohr, son un tipo de error que se encuentra en las antípodas del heisenbug. Es decir, son las fallas informáticas que mantienen su comportamiento sin importar lo que se haga para eliminarlo.");
        break;
      case "3":
        pruebas.push(new tipoDePrueba("ESTATICA", 3 , "TODOS", false));//Agregando el dato ingresado en un Array
        alert("Un Mandelbug (del apellido de Benoît Mandelbrot, matemático famoso por su estudio de fractales) es un bug tan complejo que no se puede encontrar una manera de eliminarlo, o cuyo efecto parece caótico y parece no determinista.");
        break;
      case "4":
        pruebas.push(new tipoDePrueba("REGRESION", 4 , "DESKTOP", true));//Agregando el dato ingresado en un Array
        alert("Schroedinbug es un tipo inusual de error de software que logra pasar los controles de calidad iniciales y solo se encuentra cuando alguien lee manualmente el código del software y se da cuenta de que el programa no debería, y nunca debería haber podido funcionar en primer lugar.");
        break;
      case "5":
        pruebas.push(new tipoDePrueba("ACEPTACION", 5 , "MOBILE", true));//Agregando el dato ingresado en un Array
        alert("Fantasma es un bug que suele esconderse en esas rutinas o subprogramas que rara vez se ejecutan. Su ubicación los hace muy difíciles de identificar durante las pruebas previas al lanzamiento del programa, y puede hacer que un producto fracase estrepitosamente al ser puesto a la venta.");
        break;
  
      default:
        alert("Opción no válida");
        break;
    }
    console.log(pruebas);
 //*******************************SE REALIZA UN FILTRADO (FILTER) SOBRE LOS TIPOS DE PRUEBAS, MOSTRANDO LAS DE PRIORIDAD MENOR A 4 *****************************************
   
 let filtrado = pruebas.filter((el) =>{
      return el.prioridad <= 3;
    });
    console.log(filtrado);             //SE MUESTRA UN ARRAY CON LOS TIPOS DE PRUEBAS QUE TIENEN UNA PRIORIDAD MENOR A 4



    //*******************************EL USUARIO PUEDE VOLVER A INGRESAR DATOS*****************************************
    ingreso = prompt(
      "Ingresa una opción \n 1-Heisenbug \n 2-Bohrbug \n 3-Mandelbug \n 4-Schroedinbug \n 5-Fantasma \n\n Para salir ingresa CHAU"
    );
    if (ingreso == "CHAU") despedir();   //INVOCACION DE LA FUNCION DEDICADA A DESPEDIR AL USUARIO
  } 