let numeroFuncionario = 0;
let total = 0;
while (numeroFuncionario < 20) {
  let pecas = parseInt(prompt("Número de peças do funcionário " + numeroFuncionario));
  let salario = 1000.0;
  if (pecas > 30) {
    let pecasExtras = pecas - 30;
    let salarioExtra = ((salario * 3) / 100) * pecasExtras;
    salario = salario + salarioExtra;
  }
  console.log("Salario do Funcionario " + numeroFuncionario + " é " + salario);

  total = total + salario;
  numeroFuncionario = numeroFuncionario + 1;
}

console("A folha de pagamento é " + total);
