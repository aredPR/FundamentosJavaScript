// if else if else

let age = 18;
if(age >= 18){
    console.log("Es mayor de edad");
} else if (age < 16) {
    console.log("Es menor");
} else {
    console.log("Es niño")
}

// Truthy and Falsy
// myNum = 0 --> false
// myNum > 0 --> true
// myStr = '' --> false
// myStr = 'Hi' -->true

// Asignar Usuario por defecto 
let username ='';
let defaultName;

if(username !== ''){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

if(username){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

defaultName = username || 'Invitado';


/**
 * expr ? true: false:
 */
(age >= 18) 
    ? console.log('SI es mayor')
    : console.log('No es mayor')
    
defaultName = username? username: 'Invitado';
console.log(defaultName);

//switch case 
const day = Math.floor(Math.random() * 7);
switch(day){
    case 1:
        console.log("Es dominnigo");
        break;
    case 2:
        console.log("Es lunes");
        break;
    case 3:
        console.log("Es martes");
        break;
    case 4:
        console.log("Es miércoles");
        break;
    case 5:
        console.log("Es jueves");
        break;
    case 6:
        console.log("Es sabado");
        break;
    case 7:
        console.log("Es domingo");
        break;
    default:
        console.log("Día no válido");
}