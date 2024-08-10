// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)


// (function chai(){
//     console.log(`DB CONNECTED`);
// })();



// ( () => {
//     console.log(`DB CONNECTED AGAIN`);
// })();


( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})('Amir');
