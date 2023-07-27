//Nullish Coalescing Operator = operador lógico que retorna seu operando do lado direito quando seu operando do lado esquerdo é nulo ou indefinido e, caso contrário, retorna seu lado esquerdo operando.
/*
const idade = 0;
//const idade = null;

document.body.innerText = "Sua idade é: " + (idade ?? "Nâo informado");
*/

//OBJETOS

const user = {
  name: "Dara",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 174,
  },
};

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



//=== REST OPERATOR
//const { name, idade, ...rest } = user;
//document.body.innerText = JSON.stringify(rest);


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array;   //salteou o 2
document.body.innerText = JSON.stringify({first, third, rest});

