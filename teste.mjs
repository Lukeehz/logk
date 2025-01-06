import logk from './logk/index.mjs';  // Importando o módulo 'logk'

// Usando a função criarLog para criar o arquivo de log
logk.criarLog("texte.txt", "./log/teste");

let num = 0;

// Registrando logs em um loop
for (let i = 0; i <= 1000; i++) {
  // Passando corretamente todos os parâmetros para registrar o log
  logk.registrarLog("texte.txt", "./log/teste", `Número ${i} adicionado ao log`);
}
