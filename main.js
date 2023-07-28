import { soma, subtracao, PI } from "./lib/math";
import sum from './lib/sum'

//Named export
console.log(soma(1, 3))
console.log(subtracao(4, 2))
console.log(PI)

//Default export - Declara a função em outro arquivo como defalt, +
//+ e pode importar aqui sem precisar colocar entre chaves, e com outro nome.
console.log(sum(3, 3))