// // // // const //Criar constante (tipo coisa q nao pode ser alterada)//
// // // // [] //Cria  uma array//

// // // // let casa = {
// // // //     sala: ['sofa', 'tv', 'tapete', 'lareira'],
// // // //     psicina: ['jacuzzi', 'ofuro', 'sauna'],
// // // //     banheiro: ['hidro', 'bide', 'musica']
// // // // } //Cria varias listas... Casa é um objeto e o que ta dentro são listas//
// // // // //casa."nome da lista", mostra somente a lista desejada -  casa."nome da lista".[], pra achar somente um objeto//

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // // //Entrada de dados//
// // // let nome = prompt("Digite aqui seu nome");

// // // //Saída de dados//
// // // alert(nome);
// // // console.log(nome);

// // // //Entrada e saída//
// // // confirm("E aí, aceita ou não ?");

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // let media = Number (prompt("Digite sua média")); //Number pega o valor e transforma em numero//

// // if(media < 0 || media > 10){
// //     alert("Número invalido"); }

// // else if(media >= 7 && media<10){
// //     alert("Aprovado");
// // }
// // else if(media <7 && media >= 7){
// //     alert("Exame");
// // }
// // else{
// //     alert("Reprovado");
// // }

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let nome = "Diego";
let contador = 0;

while(contador<4){ //while = enquanto.. -  então, enquanto o contador for menor do q 4 ele vai imprimir o nome e adicionar +1//
    console.log(nome); //Imprimir a variavel na aba "console" do inspecionar pagina//
    contador++; //Esse ++ é pra adicionar +1 (ou seja, vai imprimir o nome mais uma vez)
}


for(let i=0; i<4; i++){ //O for faz a mesma coisa que o While, só que mais organizado (pode criar a variavel, a condição e o ++ dentro do proprio for, bem mais facil)//
    console.log("Diego");
}

// for in - Percorre os indices da lista ( 1, 2, 3 e etc...)
// for off - Percorre os valores da lista (os nomes no caso)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// .length mostra o tamanho da lista

let signos = ["aries", "touro", "gemeos", "cancer"];

for(let i=0; i<signos.length; i++){ //o signos.length ta imprimindo a lista inteira.. o length é util pra quando vc quer imprimir a lista toda, nao importando a quantidade que estiver nela//
    console.log(signos[i]);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let signos = ["aries", "touro", "gemeos", "cancer"];

for(let valores of signos){ //O let valores of, entra na lista signos e imprime os valores que estão la (pode usar qualquer nome no lugar de valores)
    console.log(valores);
}

for(let valores in signos){ //O let valores in, entra na lista signos e imprime os indices de tudo q esta la (pode usar qualquer nome no lugar de valores)
    console.log(valores);
}

let signos = ["aries", "touro", "gemeos", "cancer"];

for(let valor in signos){
    console.log("O signo no indice "  + valor + " é: " + " " + signos[valor]);
}