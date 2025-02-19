const numeros = [1,2,3,4,5,6];

numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});

const dobrado = numeros.map(num => num * 2);
console.log(dobrado);

const maiorQue8 = dobrado.filter( num=> num > 8);
console.log(maiorQue8);

const maiorQue9 = dobrado.find(num => num >=9);
console.log(maiorQue9);

const todosMaiores2 = dobrado.every(num => num >= 2);
console.log(todosMaiores2);

const algumMaior12 = dobrado.some(num => num > 11);
console.log(algumMaior12);