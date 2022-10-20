let opcao = -1;


function menu(){
    while (opcao != 0){

        opcao = prompt("Escolha um exercicio: (Digite 0 para sair)")

        if(opcao == 1){
            ex1()
        }else if(opcao == 2){
            ex2()
        }else if(opcao == 3){
            ex3()
        }else if(opcao == 4){
            ex4()
        }
    }
}

menu();

function ex1(){
    console.log("Exercicio 1: Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. ")
    A = 10;
    B = 20;
    console.log("Primeiro: A= "+ A + " B = " + B)
    C = A;
    A = B;
    B = C;
    console.log("Depois: A= "+ A + " B = " + B)
}

function ex2(){
    console.log("Exercicio 2: Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.")
    num = prompt();
    result = parseFloat(num) - 1;
    console.log(result)
}

function ex3(){
    console.log("Exercicio 3. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. (Base X Altura).")
    base=prompt("Informe a base: ")
    console.log("Base: "+ base)
    altura=prompt("Informe a altura: ")
    console.log("Altura: "+ altura)
    result=parseFloat(base) * parseFloat(altura)
    if(base <= 0 || altura <= 0){
        console.log("Impossivel calcular a area do retangulo com numeros negativos")
    }else{
        console.log("A área do retângulo é: " + result)
    }  
}

function ex4(){
    console.log("Exercicio 4.Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.")
    anos = prompt("Informe quantos anos voce tem: ")
    console.log("Anos " + anos)
    meses = prompt("Informe quantos meses você tem: ")
    console.log("Meses " + meses)
    dias = prompt("Informe em dias: ")
    console.log("Dias " + dias)
    result= (parseFloat(anos) * 365) + (parseFloat(meses) * 30) + parseFloat(dias);
    if ( anos <= 0 || meses <= 0 || dias <= 0){
        console.log("Impossivel calcular com numeros negativos")
    }else{
        console.log("São " + result + " dias de vida")
    }
}

function ex5(){
    console.log("Exercicio 5. Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.")
    




}