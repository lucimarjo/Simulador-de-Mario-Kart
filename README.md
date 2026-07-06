# Desafio de projeto do Felipão: Mario Kart.js
O desafio era criar uma lógica para simular o jogo Mario Kart levando em consideração as regras e mecânicas dadas pelo professor.

##  Regras e mecânicas
O Computador deve receber dois personagens para disputar a corrida em um objeto cada.

<b>Pistas</b>
<li>Os personagens irão correr em uma pista aleatória de 5 rodadas
<li>A cada rodada será sorteado um bloco da pista que pode ser:
</li>
<b>1. </b> Uma reta, o jogador joga um dado de 6 lados e soma o valor no atributo de <b>VELOCIDADE</b>, quem vencer ganha um ponto.

<b>2.</b> Uma curva, o jogador joga um dado de 6 lados e soma o valor ao atributo de <b>MANOBRABILIDADE</b>, quem vencer ganha um ponto.
<b>3.</b> Um confronto, o jogador joga um dado de 6 lados e soma o valor ao atributo de <b>PODER</b>, quem perder perde 1 ponto.

<b> Condição de vitória</b>
Ao final ganha quem tiver mais pontos

## Personagens

| Mario | Status | Peach | Status | Yoshi | Status |
| :---: | :--- | :---: | :--- | :---: | :--- |
| Mario <br><br> ![Mario](./docs/mario.gif) | Velocidade: 4 <br><br> Manobrabilidade: 3 <br><br> Poder: 3 | Peach <br><br> ![Peach](./docs/peach.gif) | Velocidade: 3 <br><br> Manobrabilidade: 4 <br><br> Poder: 2 | Yoshi <br><br> ![Yoshi](./docs/yoshi.gif) | Velocidade: 2 <br><br> Manobrabilidade: 4 <br><br> Poder: 3 |
| Bowser <br><br> ![Bowser](./docs/bowser.gif) | Velocidade: 5 <br><br> Manobrabilidade: 2 <br><br> Poder: 5 | Luigi <br><br> ![Luigi](./docs/luigi.gif) | Velocidade: 3 <br><br> Manobrabilidade: 4 <br><br> Poder: 4 | Donkey Kong <br><br> ![DK](./docs/dk.gif) | Velocidade: 2 <br><br> Manobrabilidade: 2 <br><br> Poder: 5 |

### Futuras implementações
- [ ] O jogador poder escolher os personagens
- [ ] Sortear aleatoriamente se é um casco (-1 ponto) ou uma bomba (-2 pontos)
- [ ] quem vence o confronto ganha um turbo (+1 ponto) aleatoriamente
- [ ] Escolha de pistas com diferenças entre elas (Pista X tem chance de mais curvas enquanto pista Y tem chance de mais retas)
- [ ] Diferentes veículos que modificam diretamente nos stats. Monster Truck diminui Manobrabilidade mas aumenta Poder