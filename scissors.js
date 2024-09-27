// const btnPlay = // apuntar a botón
// const divUser = // apuntar al divdel usuario
// const divMaq = // apuntar al div de la maquina 
// const message = // apuntar al mensaje

// Función para generar la elección del computador 
const generarElección = () => {
  const choices = ["piedra", "papel", "tijeras"];
  const indice = Math.floor(Math.random() * 3);
  return choices[indice];
}

const play = (choiceUser) => {
  choiceUser = choiceUser.toLowerCase(); // Convertir a minúsculas

  const choiceMaq = generarElección();
  const resultado = ganador(choiceUser, choiceMaq);

  document.getElementById('resultado').innerHTML = `
    Usuario eligió: ${choiceUser}<br>
    Computador eligió: ${choiceMaq}<br>
    Resultado: ${resultado}
  `;
}

// Función para determinar el ganador 
const ganador = (choiceUser, choiceMaq) => {
  if (choiceUser === choiceMaq) {
    return "Empate";
  }

  switch (choiceUser) {
    case "piedra":
      if (choiceMaq === "tijeras") {
        return "Ganaste";
      } else {
        return "Perdiste";
      }
    case "papel":
      if (choiceMaq === "piedra") {
        return "Ganaste";
      } else {
        return "Perdiste";
      }
    case "tijeras":
      if (choiceMaq === "papel") {
        return "Ganaste";
      } else {
        return "Perdiste";
      }
  }
}
