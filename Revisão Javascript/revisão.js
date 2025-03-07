//

// objetos
    let pessoa = {
        nome: "Karoline de Souza",
        idade: 18,
        peso: 50,
        altura: 170,
    }
    console.log(pessoa.nome)
    pessoa.idade = 40
    console.log(pessoa.idade)

//desatribuição de objetos

    const { peso, altura } = pessoa
    console.log(peso)
    console.log(altura)

//propagação de objeto
    const endereco = {
        cidade: "Brasília",
        uf: "DF"
    }

    const pessoaCompleto = {
        ...pessoa
        ...endereco
    }

console.log(pessoaCompleto)

//Funções
//Declaração
function somar(numA, numB) {
    const resultado = numA + numB
    console.log(resultado)
}

//uso
somar(2,2)
somar(3,3)
somar(10,5)

//função anonima
const subtrair = function (numA, numB){
    const resultado = numA - numB
    console.log(resultado)
}

subtrair(4,2)

//arrow function
const multiplicar = (numA, numB) => numA * numB

multiplicar(2,2)


//importar uma função de outro arquivo

//No padrão do Node sem projeto não funciona
//o import por modulos
import { calcuarIMC } from "./calculadoraIMC"

//          
const res = calcuarIMC(61,170)
consolelog(res)