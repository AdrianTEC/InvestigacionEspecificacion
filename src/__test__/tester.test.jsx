import React from "react";
import Tester from "../components/testImage";
import numberWizard from "../components/numberWizard"
import {render} from "@testing-library/react"

/**
 * Hecho por Adrian Gonzalez Jimenez y Sebastian Calderon Yock
 * El siguiente codigo  busca de manera sumamente sencilla probar unos pequeños test utilizando 
 * Jest
 * 
 */



/**
 * 
 * La sintaxis para una prueba depende exactamente de que se quiera hacer aunque 
 * hagan lo mismo,
 * en este caso para nuestras pruebas unitarias utilizamos test
 * le agregamos un titulo y una funcion de flecha que contiene 
 * el codigo que queremos probar
 * 
 * Para este caso vamos a probar que la divison que desplegamos en el localHost
 * se pueda visualizar correctamente comprobando que contenga un string que nostros
 * le insertamos como parametro
 * 
 */
test("Renderizar imagen sin errores",()=>{
    const {getByTestId} =render(<Tester value="testLabel"></Tester>) //asocio el render a la funcion getByTestId
    
    //Busco el elementro con la data-testid=container
    //llamo a la funcino expect, que recibe un valor
    // posteriormente con verifico si tiene un contenido de texto igual a testLabel
    expect(getByTestId('container')).toHaveTextContent('testLabel') 
})

/**
 * Test para comprobar que una funcion de numeros aleatoria 
 * retorna un numero menor que el rango ingresado
 */
test("Comprobar numero menor que 5",()=>{
    const instance = new numberWizard(); //creo una instancia de nuestro sujeto de pruebas 
    const result = instance.giveARandomNumber(5) //llamo al metodo y le inserto un valor
    //espero que mi resultado sea menor al que ingresé
    expect(result<5).toBe(true)


})
/**
 * Verificar que la funcion de fibonacci este correcta
 */
test("Comprobar sucesion de fibonacci de 5",()=>{
    const instance = new numberWizard();//creo una instancia de nuestro sujeto de pruebas 
    const result = instance.giveFibonacci(5) //llamo al metodo con un valor
    expect(result).toStrictEqual([0,1,1,2,3]); //comparo la lista resultante

})

/**
 * Prueba que integra la prueba del numero aleatorio junto
 * a la sucesion de fibonacci 
 */
test("Comprobar extension sucesion de fibonacci de acuerdo a un numero",()=>{
    const instance = new numberWizard();//creo una instancia de nuestro sujeto de pruebas 
    const large = instance.giveARandomNumber(5)  //consigo un numero aleatorio menor que cinco
    const fibonacci = instance.giveFibonacci(large) //creo una secuencia de fibonacci con ese numero
    //espero que minimo sea igual que 2, pero que sea en todo caso mayor que el largo mas 2
    expect(fibonacci.length>=2 && fibonacci.length<large+2).toBe(true)
})