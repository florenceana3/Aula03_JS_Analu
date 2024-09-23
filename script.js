var lista = ['aluno1', 'aluno2',100];
//consumindo o array

console.log(lista);
//consumindo um elemento específico do array
console.log(lista [2]);

//descobrindo o tamanho do array
console.log(lista.lenght);

//saber se um elemento está ou não no array 
console.log.apply(lista.indexOf('aluno3'));
console.log(lista.indexOf('aluno1'));

//alterar uma informação dentro do array
lista[0]='Ana';
console.log(lista);
lista[1]='Luiza';
console.log(lista);
lista[2]=3
console.log(lista);

//inserir novo elemento dentro do array
lista.push('oi')
console.log(lista);

//excluir o primeiro elemento do array
lista.shift();
console.log(lista);

//excluindo o ultimo elemento array
lista.pop();
console.log(lista);

//retornar os itens de dentro do array com um separador
console.log(lista.join(';'));