# Desafio de projeto do Felipão: Mario Kart.js
O desafio era criar uma lógica para simular o jogo Mario Kart levando em consideração as regras e mecânicas dadas pelo professor.

##  Regras e mecânicas
O Computador deve receber dois personagens para disputar a corrida em um objeto cada.

<li>Os personagens irão correr em uma pista aleatória de 5 rodadas
<li>A cada rodada será sorteado um bloco da pista que pode ser:

<b>1. </b> Uma reta, o jogador joga um dado de 6 lados e soma o valor no atributo de <b>VELOCIDADE</b>, quem vencer ganha um ponto.

<b>2.</b> Uma curva, o jogador joga um dado de 6 lados e soma o valor ao atributo de <b>MANOBRABILIDADE</b>, quem vencer ganha um ponto.
<b>3.</b> Um confronto, o jogador joga um dado de 6 lados e soma o valor ao atributo de <b>PODER</b>, quem perder perde 1 ponto.

<li> <b> Condição de vitória: </b>
Ao final ganha quem tiver mais pontos.

### Personagens
Cada personagem possui vantagens específicas que influenciam diretamente nas roalgens de dados:

| Mario | Status | Peach | Status | Yoshi | Status |
| :---: | :--- | :---: | :--- | :---: | :--- |
| Mario <br><br> ![Mario](./docs/mario.gif) | Velocidade: 4 <br><br> Manobrabilidade: 3 <br><br> Poder: 3 | Peach <br><br> ![Peach](./docs/peach.gif) | Velocidade: 3 <br><br> Manobrabilidade: 4 <br><br> Poder: 2 | Yoshi <br><br> ![Yoshi](./docs/yoshi.gif) | Velocidade: 2 <br><br> Manobrabilidade: 4 <br><br> Poder: 3 |
| Bowser <br><br> ![Bowser](./docs/bowser.gif) | Velocidade: 5 <br><br> Manobrabilidade: 2 <br><br> Poder: 5 | Luigi <br><br> ![Luigi](./docs/luigi.gif) | Velocidade: 3 <br><br> Manobrabilidade: 4 <br><br> Poder: 4 | Donkey Kong <br><br> ![DK](./docs/dk.gif) | Velocidade: 2 <br><br> Manobrabilidade: 2 <br><br> Poder: 5 |

### Pistas
As pistas alteram dinamicamente a chance de cada tipo de bloco:
* **Rainbow Road:** Foco em **Curvas** (60% de chance).
* **Coconut Mall:** Foco em **Confrontos** (60% de chance).
* **Bowser's Castle:** Foco em Retas (60% de chance).

### Sistema de Confronto e itens
Ao cair em um bloco de confronto, havendo um vencedor um item aleatório é gerado:
* **Bomba (25% de chance):** Retira 2 pontos do adversário.
* **Casco (75% de chance):** Retira 1 ponto do adversário
* **Mecânica de turbo:** O vencedor do confronto tem uma chance baseada em algoritmo modular de ganhar um **Turbo de velocidade (+1 ponto)**

## Tecnologias utilizadas
* **Node.js** (Ambiente de execução)
* **Javascript**

## Como executar o Projeto
**Pré-requisitos**
Certifique-se de ter o [Node.js](https://nodejs.org/pt-br) instalado.

**1. Clone este repositório**
```
https://github.com/lucimarjo/Simulador-de-Mario-Kart.git
```

**2. Navegue até a pasta do projeto:**
``` Bash
cd Simulador-de-Mario-Kart
```

**3. Execute o projeto:**
Por não possuir dependências externas, basta rodar o comando: 
```Bash
node src/index.js
```

### Futuras implementações
- [X] O jogador poder escolher os personagens.
- [X] Sortear aleatoriamente se é um casco (-1 ponto) ou uma bomba (-2 pontos).
- [X] quem vence o confronto ganha um turbo (+1 ponto) aleatoriamente.
- [X] Escolha de pistas com diferenças entre elas (Pista X tem chance de mais curvas enquanto pista Y tem chance de mais retas).
- [ ] Diferentes veículos que modificam diretamente nos stats. Monster Truck diminui Manobrabilidade mas aumenta Poder por exemplo.

## Sobre as implementações
<li><b>Escolha de personagens</b>: Todos os personagens acima podem ser escolhidos, basta digitar seu nome corretamente.
<li><b>Casco ou bomba</b>: Ao entrar em um confronto há 25% de chance de quem perder ser atingido por uma bomba, perdendo 2 pontos ao invés do antigo 1. Entretanto, se o perdedor ter 1 ponto e ser atingido pela bomba ele não ficará com -1, mas sim, com 0.
<li><b>Turbo</b>: Ao acabar a disputa o vencedor tem 50% de chance de pegar um turbo. A chance é baseado no valor dado pela variável responsável por saber se no confronto terá um Casco ou uma Bomba. Se esse valor for par terá turbo, caso não, não terá. 
<li><b>Pistas</b>: Diferentes pistas com grande diferença entre elas. Rainbow Road tem mais curvas, Coconut Mall tem mais confrontos enquanto Bowser's Castle tem mais Retas.
<li><b>Karts</b>: Ainda não foi implementado mas já está com o começo dela.