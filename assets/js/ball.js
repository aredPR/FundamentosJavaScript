// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    // TODO
    // crear número aleatorio (0 - 7)
    // switch / case para mensajes distintos
    const num = Math.floor(Math.random() * 8);
    switch(num){
        case 0:
            message.innerText = "Cruz Azul"
            break;
        case 1:
            message.innerText = "América"
            break;
        case 2:
            message.innerText = "Pachuca"
            break;
        case 3:
            message.innerText = "Toluca"
            break;
        case 4:
            message.innerText = "Tigres"
            break;
        case 5:
            message.innerText = "Rayados"
            break;
        case 6:
            message.innerText = "Chivas"
            break;
        default:
            console.log("No válido");
    }
}

ball.addEventListener('click', eightBall);