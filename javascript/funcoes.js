function menu() {

    opcao = prompt("Escolha um exercicio: (De 0 a 25, sendo 0 para sair)")

    switch (opcao) {

        case '0': {
            console.log("Obrigado")
            break;
        }
        case '1':
            ex1();
            break;
        case '2':
            ex2();
            break;
        case '3':
            ex3();
            break;
        case '4':
            ex4();
            break;
        case '5':
            ex5();
            break;
        case '6':
            ex6();
            break;
        case '7':
            ex7();
            break;
        case '8':
            ex8()
            break;
        case '9':
            ex9();
            break;
        case '10':
            ex10();
            break;
        case '11':
            ex11();
            break;
        case '12':
            ex12();
            break;
        case '13':
            ex13();
            break;
        case '14':
            ex14();
            break;
        case '15':
            ex15();
            break;
        case '16':
            ex16();
            break;
        case '17':
            ex17();
            break;
        case '18':
            ex18()
            break;
        case '19':
            ex19();
            break;
        case '20':
            ex20();
            break;
        case '21':
            ex21();
            break;
        case '22':
            ex22();
            break;
        case '23':
            ex23();
            break;
        case '24':
            ex24();
            break;
        case '25':
            ex25();
            break;

        default: {
            console.log("Escolha uma opção válida")
            break;
        }
    }
}

menu();

function ex1() {
    console.log("Exercicio 1: Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. ")
    A = 10;
    B = 20;
    console.log("Primeiro: A= " + A + " B = " + B)
    C = A;
    A = B;
    B = C;
    console.log("Depois: A= " + A + " B = " + B)
}

function ex2() {
    console.log("Exercicio 2: Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.")
    num = prompt();
    result = parseFloat(num) - 1;
    console.log(result)
}

function ex3() {
    console.log("Exercicio 3. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. (Base X Altura).")
    base = prompt("Informe a base: ")
    console.log("Base: " + base)
    altura = prompt("Informe a altura: ")
    console.log("Altura: " + altura)
    result = parseFloat(base) * parseFloat(altura)
    if (base <= 0 || altura <= 0) {
        console.log("Impossivel calcular a area do retangulo com numeros negativos")
    } else {
        console.log("A área do retângulo é: " + result)
    }
}

function ex4() {
    console.log("Exercicio 4.Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.")
    anos = prompt("Informe quantos anos voce tem: ")
    console.log("Anos " + anos)
    meses = prompt("Informe quantos meses você tem: ")
    console.log("Meses " + meses)
    dias = prompt("Informe em dias: ")
    console.log("Dias " + dias)
    result = (parseFloat(anos) * 365) + (parseFloat(meses) * 30) + parseFloat(dias);
    if (anos <= 0 || meses <= 0 || dias <= 0) {
        console.log("Impossivel calcular com numeros negativos")
    } else {
        console.log("São " + result + " dias de vida")
    }
}

function ex5() {
    console.log("Exercicio 5. Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.")
    eleitores = prompt("Informe o numero de eleitores: ")
    console.log("Eleitores : " + eleitores)
    vbranco = prompt("Informe a quantidade de votos em branco: ")
    console.log("Votos em branco: " + vbranco)
    vnulos = prompt("Informe a quantidade de votos nulos: ")
    console.log("Votos nulos: " + vnulos)
    vvalidos = prompt("Informe a quantidade de votos validos: ")
    console.log("Votos validos: " + vvalidos)

    if (vbranco + vnulos + vvalidos != eleitores) {
        console.log("Numero de votos e eleitores não batem!")
    } else {
        console.log("Porcentagem de votos:\n Validos: " + vvalidos / eleitores * 100 + " % \n Brancos: " + vbranco / eleitores * 100 + " % \n Nulos: " + vnulos / eleitores * 100 + " %")
    }
}

function ex6() {
    console.log("Exercicio 6. Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.")
    salario = prompt("Informe o seu salario: ")
    console.log("Salario: " + salario)
    ajuste = prompt("Porcentagem do ajuste salarial: ")
    console.log("Ajuste: " + ajuste + " %")

    result = parseFloat(salario) + (parseFloat(salario) * parseFloat(ajuste)) / 100

    if(salario <= 0 || ajuste <= 0){
        console.log("Valor invalido inserido")
    }else{
        console.log("O valor do salario atualizado: " + result)
    }
}

function ex7(){
    console.log("Exercicio 7: O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.")

    valor = prompt("Insira o valor de fabrica do veiculo: ")

    result = parseFloat(valor) + (parseFloat(valor)*parseFloat(28))/parseFloat(100) + (parseFloat(valor)*parseFloat(45))/parseFloat(100)

    if (valor <= 0){
        console.log("Valor invalido inserido")
    }else{
        console.log("O valor final do veiculo é: " + result )
    }
}

function ex8(){
    console.log("Exercicio 8: Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.")
    A = prompt("Insira a 1ª nota: ")
    console.log("1ª nota: " + A)
    B = prompt("Insira a 2ª nota: ")
    console.log("2ª nota: " + B)
    C = prompt("Insira a 3ª nota: ")
    console.log("3ª nota: " + C)

    result = (parseFloat(A)+parseFloat(B)+parseFloat(C))/3

    if (A < 0 || B < 0 || C < 0 ){
        console.log("Valor invalido inserido")
    }else{
        console.log("A media final do aluno é: " + result)
    }
}

function ex9(){
    console.log("Exercicio 9: As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.")
    maca = prompt("Digite uma quantidade de maçãs:")
    console.log("Maçãs: " + maca)
    if (maca < 0){
        console.log("Valor invalido inserido");
    }else if (maca <12){
        console.log("O valor será de R$" + maca * 1.30);
    }else{
        console.log("O valor será de R$" + maca * 1);
    }
}

function ex10(){
    console.log("Exercicio 10: Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.")
    salario = prompt("Informe o salario fixo: ")
    console.log("Salario fixo: R$" + salario)
    vendas = prompt("Informe o total em vendas: ")
    console.log("Total em vendas: R$" + vendas)

    c3 = (3 * parseFloat(vendas))/100
    c5 = (5 * (parseFloat(vendas)-1500))/100
    result1 = parseFloat(salario) + parseFloat(c3)
    result2 = parseFloat(salario) + parseFloat(c3) + parseFloat(c5)

    if (salario <= 0 || vendas <= 0){
        console.log("Valor invalido inserido")
    }else if (vendas >= 1500){
        console.log("Meta atingida! O valor será de: R$" + result2)
    }else{
        console.log("O valor será de: R$" + result1)
    }
}

function ex11(){
    console.log("Exercicio 11: Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo’.")
    conta = prompt("Informe o numero da sua conta: ")
    console.log("Conta: " + conta)
    saldo = prompt("Informe seu saldo: ")
    console.log("Saldo: " + saldo)
    debito = prompt("Informe seu debito: ")
    console.log("Debito: " + debito)
    credito = prompt("Informe seu credito: ")
    console.log("Credito: " + credito)

    result = parseFloat(saldo) - parseFloat(debito) + parseFloat(credito)

    if(result < 0){
        console.log("Saldo negativo, seu saldo é de R$" + result)
    }else{
        console.log("Saldo positivo, seu saldo é de R$" + result)
    }
}

function ex12(){
    console.log("Exercicio 12: Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.")
    num = prompt("Digite um numero de 1 a 10: ")
    
    if(num <= 0 || num > 10){
        console.log("Valor invalido inserido")
    }else{
        for (i = 0; i <=10; i++){
            msg = num + " * " + i + " = " + parseFloat(num * parseFloat(i))  + "\n"
            console.log(msg)
        } 
    }


}

function ex13(){
    console.log("Exercicio 13: Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.")
    num = prompt("Informe um numero maior que ZERO: ")
    if(num < 0){
        console.log("Valor inserido invalido")
    }else{
        for (i = 0; i <= parseFloat(num-1); i++ ){
            console.log(i+1)
        }
    }
}

function ex14(){
    console.log("Exercicio 14: Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.")
    for(i = 0; i <= 10; i++){
        
    }
}