let frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No cuentes los días, haz que los días cuenten.",
  "La mejor manera de predecir el futuro es crearlo.",
  "El conocimiento es poder, pero la práctica lo hace real.",
  "Nunca es tarde para aprender algo nuevo."
];

function obtenerFraseAleatoria() {
  let indice = parseInt(Math.random() * frases.length);
  return frases[indice];
}