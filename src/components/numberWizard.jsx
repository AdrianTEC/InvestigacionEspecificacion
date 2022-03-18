
export default class numberWizard{

    /**
     * Retorna un un numero entre 0 y maxNumber
     * @param {*} maxNumber 
     * @returns 
     */
    giveARandomNumber(maxNumber){
        return Math.floor(Math.random() * maxNumber);
    }

    /**
     * Sucesion de Fibonacci
     * @returns 
     */
    giveFibonacci(number){
        var fibonacci = []; //crea array vacio
        fibonacci[0] = 0;   //establezco los primeros valores
        fibonacci[1] = 1;
        //itero siguiendo la sucesion de fibonacci
        for (var i = 2; i < number; i++) {
          fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci
    }



}