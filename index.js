//Validación para numeros del 1 al 20 
const regex='^[1-9]$|^0[1-9]$|^1[0-9]$|^20$'

//Función para validar la entrada de datos
const validate = (exp, regex) => {
    const re = new RegExp(`${regex}`, 'gm')
    let flag = false;
    let num = 0;
    do {
        num = prompt(exp);
        flag = re.test(num);
        if (!flag){
            alert('El numero ingresado esta fuera de rango')
        }
    } while (!flag)
    return parseInt(num);
}

//Función Suma
const add =(num)=>{
    for (let i = 1; i <= num; i++) {
        console.log(`${i} X ${num} = ${i*num}`);
        
    }
}

//Función Factorial
const factorial=(num)=>{  
    let fact=1  
    for (let i = 1; i<=num; i++) {                
      fact*=i;
      console.log(`Factorial de ${i} es : ${fact}`); 
    }
}

//Ejecución
const exp ='Ingrese un numero del 1 al 20';
const userOpt=validate(exp,regex);
add(userOpt);
factorial(userOpt);
alert('Todos los resultados se mostrarán por pantalla')
