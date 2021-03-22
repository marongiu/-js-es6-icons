// Usiamo i nuovi metodi degli array foreach o filter


// creo un array di numeri
const arrayNumeri = [1,2,3,4,5,6,7,8,9,10];


  // utilizzo filter
const numeri = (array,a,b) => {
  const ordinati = array.filter((index) => {
    return index >= a && index <= b
  });
  return ordinati;
}

console.log(numeri(arrayNumeri,2,4));
console.log(arrayNumeri);
