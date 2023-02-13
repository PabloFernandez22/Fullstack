

for(let i = 0; i < 5;i++) {
    console.log(i);
}





const x = {
    peras: 3,
    fresas: 20
    };
    for (let key in x) {
    // peras y fresas (en distintas líneas) 
    console.log(key);
    // string y string (en distintas líneas) 
    console.log(typeof(key));
    // 3 y 20 (en distintas líneas) 
    console.log(x[key]);
    // undefined y undefined porque busca la propiedad x.key (2 veces) y no existe 
    console.log(x.key);
    }
    


    const x = { 
        peras: 3,
        fresas: 20
        };
        // claves es un array
        const claves = Object.keys(x);
        // ["peras", "fresas"] 
        console.log(claves);
        // bucle for...of para recorrer un array 
        for (let key of claves) {
        // peras y fresas (en distintas líneas) 
        console.log(key);
        // 3 y 20 (en distintas líneas) 
        console.log(x[key]);
        }
        // bucle for...in para recorrer un array 
        for (let i in claves) {
        // 0 y 1 (en distintas líneas) 
        console.log(i);
        // peras y fresas (en distintas líneas) 
        console.log(claves[i])
        // 3 y 20 (en distintas líneas) 
        console.log(x[claves[i]]);
        }
        
    