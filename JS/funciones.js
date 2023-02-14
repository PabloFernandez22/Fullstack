//function sumar(a, b) { 
 //   console.log(a + b);  }
    // 5
 //   sumar(2, 3);
    // NaN (undefined + undefined) 
//    sumar();
    // 3
//    sumar(1, 2);
    // 3
//    sumar(1, 2, 3, 4);
    // 12
//    sumar('1', 2);
    // 12
//    sumar(1, '2');


//Función anónima:

//const sumar = function(a, b) {
//  console.log(a + b);  };
//      5
//   sumar(2, 3);

//Función método

// const a =
// {
//   f: function() {
//    console.log('Hola'); }
// };
   // invocación utilizando la notación punto 
//    a.f();
    // invocación utilizando la notación con corchetes 
//    a['f']()



//Constructor de objetos 
// function hacerAlgo(a, b) { 
//    this.atr1 = a;
//    this.atr2 = b;
//    }
    // creación del objeto
//    const objetoAlgo = new hacerAlgo(1,2);//objeto algo 
    // error porque objetoAlgo es un objeto 
//    objetoAlgo();
    // 1 
//    console.log(objetoAlgo.atr1);
    // 2 
//    console.log(objetoAlgo.atr2);
    // undefined 
//    console.log(this.atr2);

// función de flecha

//const funcion1 = (altura) => { 
//    return 5 * altura / 2;  };

// forma simplificada de la función de flecha 
//const funcion2 = altura => 5 * altura / 2; 




//EJERCICIO 1,2

//  const sumar = (num1,num2) => {
//   return num1 + num2;
//  };
//  console.log(sumar(2,5));


//  const restar = (num1,num2) => {
//   return num1 - num2;
//  };
//  console.log(restar(7,2));


//  const multiplicar = (num1,num2) => {
//    return num1 * num2;
// };
//  console.log(multiplicar(6,25));


//  const dividir = (num1,num2) => {
//   return num1 / num2;
//  };
//   console.log(dividir(18,4));



//EJERCICIO 3 Y 4 

// const sumar = (num1,num2,callback) => {
//     callback(num1+num2);
// };
// sumar (2,5,(resultado) => {
// console.log(resultado);
// });

// const restar = (num1,num2,callback) => {
//     callback(num1-num2);
// };
// restar (7,5,(resultado) => {
// console.log(resultado);
// });

// const multiplicar = (num1,num2,callback) => {
//     callback(num1*num2);
// };
// multiplicar (23,58,(resultado) => {
// console.log(resultado);
// });

// const dividir = (num1,num2,callback) => {
//     callback(num1/num2);
// };
// dividir (19,4,(resultado) => {
// console.log(resultado);
// });


//SET TIMEOUT


// setTimeout(() => {
//     console.log('Esta instrucción se ejecuta después de 5 segundos');
//     }, 5000);


// setTimeout(() => {
//     console.log('Hola');
//  setTimeout(() => { 
//     console.log('Adiós');
//  }, 500);
//  }, 1000)
// setTimeout(() => { 
//     console.log('Buenas tardes');
//     }, 100)
//     console.log('Buenos días')


//SET INTERVAL


// setInterval(() => {
//     console.log('Esta instrucción se ejecuta cada 3 segundos');
//     }, 3000);
//  sumar (2,5,(resultado) =>);
    // setTimeout((sumar) => {
    //     console.log(resultado);
    // }, 500);

    
// const restar = (num1,num2,callback) => {
//         callback(num1-num2);
//     };
//     restar (7,5,(resultado) => {
//     console.log(resultado);
//     });
    
//     const multiplicar = (num1,num2,callback) => {
//         callback(num1*num2);
//     };
//     multiplicar (23,58,(resultado) => {
//     console.log(resultado);
//     });
    
//     const dividir = (num1,num2,callback) => {
//         callback(num1/num2);
//     };
//     dividir (19,4,(resultado) => {
//     console.log(resultado);
//     }); 