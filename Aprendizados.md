# Aprendizados

O que aprendi durante o projeto


### Criar objeto

``` javascript
const player1= {
   NAME : "Mario",
   SPEED: 4,
   MANOBRABILIDADE: 3,
   POWER: 3,
   POINTS: 0
}; 
```

declara o valor junto de chaves, e faz um dicionário dos valores


### Função assíncrona 

*async function* são funções que só vão funcionar quando forem chamadas

o JS é síncrona, tudo roda ao mesmo tempo, por isso existe o ***async***


### Função auto invoke
``` javascript
(async function main() {
   console.log("hello");
})()
```

ao preencher a função em parênteses e um conjunto logo após ela se torna uma função auto invocável. Ao rodar o código não é necessário chama-la para funcionar


### Função Await
``` javascript
await playRaceEngine(player1, player2)
```
serve para o código esperar a função parar de executar para continuar

### Readline
``` javascript
const rl = readline.createInterface({input, output});
...
const answer1 = await rl.question("Digite o nome do Player 1: ")
rl.close();
```

Colocando a primeira linha, já é possível fazer com que o usuário digite o que quiser no terminal.

### CTRL + K + C

Transforma a linha atual em um comentário


### ALT + SHIFT + ↓

Clona a linha atual na linha abaixo

