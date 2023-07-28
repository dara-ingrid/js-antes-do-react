//Nullish Coalescing Operator = operador lógico que retorna seu operando do lado direito quando seu operando do lado esquerdo é nulo ou indefinido e, caso contrário, retorna seu lado esquerdo operando.
/*
const idade = 0;
//const idade = null;

document.body.innerText = "Sua idade é: " + (idade ?? "Nâo informado");
*/

/*OBJETOS

const user = {
  name: "Dara",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 174,
  },
};
*/

/* Manipulação
document.body.innerText = ('name' in user);   //true
document.body.innerText = Object.keys(user) ; //name, idade, address
document.body.innerText = Object.values(user) ; //Dara,27,[object Object]
document.body.innerText = JSON.stringify(Object.values(user)) ; //["Dara",27,{"street":"Rua teste","number":174}]
document.body.innerText = JSON.stringify(Object.entries(user)) ; //[["name","Dara"],["idade",27],["address",{"street":"Rua teste","number":174}]]
*/

/* DESESTRUTURAÇÃO = Conseguir remover parte de um objeto para uma variável à parte, em tudo o que faz referência a um objeto
 */

/* Alterando forma de acessar os campos address, e idade:
const address = user.address; ====> const { address, idade } = user */

/*renomeando variável no código de 'idade' para 'age'
const { address, idade: age, nickname = "Ferreira" } = user;

document.body.innerText = JSON.stringify({ address, age, nickname });
*/

/*==  Desestruturação com função
/*
function mostraIdade(user){
  return user.idade;
}

document.body.innerText = mostraIdade(user);
*/
//forma desestruturada
/*
function mostraIdade({ idade }) {
  return idade;
}
*/
//document.body.innerText = mostraIdade(user);

/*== REST OPERATOR
//const { name, idade, ...rest } = user;
//document.body.innerText = JSON.stringify(rest);


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array;   //salteou o 2
document.body.innerText = JSON.stringify({first, third, rest});
*/

/*
== SHOT SYNTAX
  const name = 'Dara';
  const age = 26;

  const user = {
    name,
    age,
  };

document.body.innerText = JSON.stringify(user);
*/

// == OPTIONAL CHAINING


// ===MÉTODOS DE ARRAY 
//Alguns métodos para percorrer array

//const array = [1, 2, 3, 4, 5];

// for (const i of array){
//   document.body.innerText += i;
// }


// const novoArray = [];
// array.forEach(item => {
//   novoArray.push(item * 2);
// })

//==== MAP
/*O map() sempre retorna o mesmo tamanho do vetor original
utilizado para transformar um array em outro, porém mudando as informações
const novoArray = array.map(item => {
  if (item % 2 === 0) {
    return item * 10;
  }

  return item;
})

document.body.innerText = JSON.stringify(novoArray);
*/

// map, filter, every, some, find, findIndex, reduce

// ==== FILTER
/* const array = [1, 2, 3, 4, 5];

const novoArray =  array
    .filter( item => item % 2 ===0 )
    .map(item => item * 10);

document.body.innerText = JSON.stringify(novoArray);
*/

//==== EVERY - retorna 'true'(se TODOS os itens passarem na condição) ou 'false'
/*
const todosItensSaoNumeros = array.every(item => {
  return typeof item === 'number'});

document.body.innerText = JSON.stringify(todosItensSaoNumeros);
*/

//==== SOME - retorna 'true'( se pelo menos um item satisfaz a condição) ou 'false'
/*const array = [1, 2, 3, 4, 5, 'teste'];

const peloMenosUmItemnaoEUmNumero = array.some(item => {
  return typeof item !== 'number';
})
document.body.innerText = JSON.stringify(peloMenosUmItemnaoEUmNumero);
*/


//=== FIND - Retorna o valor no array
/*
const array = [1, 2, 3, 4, 5, 'teste'];

const par = array.find(item => {
  return item % 2 === 0;
})

document.body.innerText = JSON.stringify(par);
*/

//=== FINDINDEX - Retorna o índice do valor no array
/*const array = [1, 2, 3, 4, 5, 'teste'];

const parIndice = array.findIndex(item => {
  return item % 2 === 0;
})

document.body.innerText = JSON.stringify(parIndice);
*/

// === REDUCE - Utilizar um array e criar uma nova estrutura de dados com base nesse array
/*const array = [1, 2, 3, 4, 5];

// acc => accumulatorn, é objeto que está criando
// item => cada infomrmação do array

const soma = array.reduce( (acc, item ) => {
  //document.body.innerText += acc + ' , ' + item + '--'
  
  return acc + item;
}, 0)


document.body.innerText = JSON.stringify('Soma:' + soma);
*/

//=== TEMPLATE LITERALS=>>  `${ }`
/* 
const name = 'Dara';
const message = `Bem vinda, ${name ? name : 'Visitante'}!`;

document.body.innerText = message;
*/

//=== PROMISES
/** Exemplo Soma dois números
 * .then/ .catch/

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(a + b);   //resolve(a + b); 
      }, 2000);
  });
}

somaDoisNumeros(1, 4)
      .then (soma => {
        document.body.innerText = soma
      })
      .catch(err => {
        console.log(err)
      })
      
*/

/** Exemplo acessando API
 */

//Forma 1 de usar
// fetch('http://api.github.com/users/dara-ingrid')
//       .then( response => {
//         return response.json();
//       })
//       .then(body => {
//         console.log(body);
//       })
//       .catch(err => {
//         console.log(err)
//       })
//       .finally (() => { ///Vai executar independente se a promisse deu certo ou não
//         console.log('Deu')
//       })

//Usando sintaxe de async e await
async function buscaDadosNoGithub() {
  try {
    const response = await fetch('http://api.github.com/users/dara-ingrid');
    const body = await response.json();

    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Deu bom');
  }
}

//buscaDadosNoGithub();

const nome = buscaDadosNoGithub();
console.log(nome);

//Toda função assincrona vira uma Promise automaticamente
//Para buscar o nome do usuário agora tem que ser dessa forma

buscaDadosNoGithub().then(name => {
  console.log(name);
})

