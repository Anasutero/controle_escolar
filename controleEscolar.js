/*
Desenvolva uma página web para o controle de alunos de uma escola 
a partir dos seguintes requisitos:
-> Leia o nome, nota final e frequência do aluno
   Obs.: A frequancia será lida como um número real, porém, considerada como uma porcentagem.
         Exemplo: 75.00 equivale a 75%
-> A frequência mínima para aprovação é de 75% (caso contrário o aluno estará reprovado).
-> A nota final mínima para aprovação é 6.0
-> Caso o aluno tenha frequência satisfatória e não atinja a nota mínima, será lida uma nota de recuperação
   que também deverá ser igual ou superior a 6.0

*/

// Obtém as referências dos elementos HTML

// let btnCalcular = document.getElementById("btn-calcular")
// btnCalcular.addEventListener("click", calcular)

// let btnLimpar = document.getElementById("btn-limpar")
// btnLimpar.addEventListener("click", limpar)


function verificarAprovacao(){
   let nome = document.getElementById('nome').value;
   let nota = parseFloat(document.getElementById('nota').value);
   let frequencia = parseFloat(document.getElementById('frequencia').value);

   if (frequencia >= 75) {
      if (nota >= 6.0) {
          document.getElementById('resultado').innerHTML = `O aluno ${nome} foi aprovado!`;
      } else {
          let notaRecuperacao = parseFloat(prompt("Digite sua nota de recuperação: "));
          if (notaRecuperacao >= 6.0) {
              document.getElementById('resultado').innerHTML = `O aluno ${nome} foi aprovado na recuperação!`;
          } else {
              document.getElementById('resultado').innerHTML = `O aluno ${nome} foi reprovado!`;
          }
      }
  } else {
      document.getElementById('resultado').innerHTML = `O aluno ${nome} foi reprovado por frequência insuficiente!`;
  }
}





