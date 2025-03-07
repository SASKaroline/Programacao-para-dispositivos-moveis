function multiplicar(num){
    const dobro = num * 2;
    const triplo = num * 3;
    const quadrado = num ** 2;
    return { dobro, triplo, quadrado }
}

const numero = 5
const resultados = multiplicar(numero);

console.log(`O dobro de ${numero} é: ${resultados.dobro}`);
console.log(`O triplo de ${numero} é: ${resultados.triplo}`);
console.log(`O quadrado de ${numero} é: ${resultados.quadrado}`);