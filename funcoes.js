function imprime(texto) {
    console.log("mensagem");
    console.log("texto");
}

imprime("texto teste");

function soma(n1, n2){
   let res = n1 + n2;
   console.log("soma = " + res );
}

soma(5, 10);

function mult(n1, n2){
    let res = n1 * n2;
    return res;
}

console.log(mult(5, 5) );

function calcularIRPF(salario){
    let novoSalario = salario - (salario *0.01);
    return novoSalario;
} 

function calcularINSS(salario){
    let novoSalario = salario - (salario *0.5);
    return novoSalario;
}

function calcularPS(salario, consultas){
    let descConsultas = consultas*10;
    let descPS = salario - 0.02;
    let novoSalario = salario -(descConsultas + descPS);
    return novoSalario;

}
let salario = 2500;

salario = calcularIRPF(salario);
salario = calcularINSS(salario);
salario = calcularPS(salario, 3);

console.log("salario com descontos :" + salario);