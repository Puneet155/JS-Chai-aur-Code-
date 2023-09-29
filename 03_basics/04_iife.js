// Immediately Invoked Function Expression(IIFE)


(function chai(){
    //named iife
    console.log((` DB CONNECTED`));
})();


//()()   First if for writing the function & sewcond is for execution of the program
//; is used to stop the execution of the function 
//Why is iife used 
// it is used for imediately invoking the function & to ignore the pollutin from the global variables

( (name) => {
    // unnamed iife
    console.log(` DB CONNECTED TWO ${name} `);
})('Puneet');

