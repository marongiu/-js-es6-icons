// Creare un array di oggetti: ogni oggetto descriverà una bici
//
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore. Usare for each


// creo array oggetti che descriva una bici

const biciclette = [
  {
    nome: "bici1",
    peso: 9
  },
  {
    nome: "bici2",
    peso: 3
  },
  {
    nome: "bici3",
    peso: 5
  },
  {
    nome: "bici4",
    peso: 1
  },
  {
    nome: "bici5",
    peso: 7
  }
];

let pesoMin = biciclette[0].peso;
let biciMin = biciclette[0].nome;

biciclette.forEach((item) => {
  if (item.peso < pesoMin) {
    pesoMin = item.peso;
    biciMin = item.nome;
  }
});

console.log(`La bici con il peso piu piccolo è ${biciMin} con un peso di ${pesoMin} Kg`);
