const player1= {
    NAME : "Mario",
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0
};
const player2= {
    NAME: "Luigi",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0
}

async function  rollDice(){
    return Math.floor(Math.random() * 6) +1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result;
    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        
        case random< 0.66:
            result = "CURVA"
            break;
        
        default:
            result = "CONFRONTO"
            break;
    }
    return result
}

async function logRollResult(characterNAME, block, diceResult, attribute){
    console.log(characterNAME, "🎲 rolou um dado de", block, diceResult, "+", attribute, "=", diceResult+attribute)
}

async function playRaceEngine(character1, character2) {
    for(let round=1; round<=5; round++){
        console.log("🏁 Rodada", round)
        // sort block
        let block = await getRandomBlock()
        console.log("bloco:", block)

        // roll dice
        let DiceResult1= await rollDice();
        let DiceResult2= await rollDice();

        // skill test
        let TotalTestSkill1=0;
        let TotalTestSkill2=0;

        if(block === "RETA"){
            TotalTestSkill1 = DiceResult1 + character1.SPEED
            TotalTestSkill2 = DiceResult2 + character2.SPEED
            
            await logRollResult(
            character1.NAME, 
            "VELOCIDADE", 
            DiceResult1, 
            character1.SPEED);
            await logRollResult(
            character2.NAME, 
            "VELOCIDADE", 
            DiceResult2, 
            character2.SPEED);

        } else if(block === "CURVA"){
            TotalTestSkill1 = DiceResult1 + character1.MANEUVERABILITY
            TotalTestSkill2 = DiceResult2 + character2.MANEUVERABILITY
        
            await logRollResult(
            character1.NAME, 
            "MANOBRABILIDADE", 
            DiceResult1, 
            character1.MANEUVERABILITY);
            await logRollResult(
            character2.NAME, 
            "MANOBRABILIDADE", 
            DiceResult2, 
            character2.MANEUVERABILITY);
        } else{
            let PowerResult1 = DiceResult1 + character1.POWER
            let PowerResult2 = DiceResult2 + character2.POWER

            console.log(character1.NAME, "🥊 confrontou com ", character2.NAME,"!")
            await logRollResult(
            character1.NAME, 
            "PODER", 
            DiceResult1, 
            character1.POWER);
            await logRollResult(
            character2.NAME, 
            "PODER", 
            DiceResult2, 
            character2.POWER);

            if(PowerResult1>PowerResult2 && character2.POINTS>0){
                character2.points--
                console.log(character1.NAME, "venceu o confronto!", character2.NAME, "perdeu 1 ponto 🐢")
            }else if(PowerResult2>PowerResult1 && character1.POINTS>0){
                character1.POINTS--
                console.log(character2.NAME, "venceu o confronto!", character1.NAME, "perdeu 1 ponto 🐢")
            }else if(PowerResult1===PowerResult2){
                console.log("Confronto empatado, nenhum ponto perdido")
            }else{
                console.log("Mesmo ganhando, não é possível ter menos que 0 pontos")
            }
        }

        // verifica o vencedor
        if (TotalTestSkill1>TotalTestSkill2){
            console.log(character1.NAME, "marcou um ponto!")
            player1.POINTS++;
        } else if (TotalTestSkill2>TotalTestSkill1){
            console.log(character2.NAME, "marcou um ponto!")
            player2.POINTS++;
        }
        console.log("---------------------------")
        }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:\n", character1.NAME, ":", character1.POINTS,"\n", character2.NAME,":",character2.POINTS)
    if(character1.POINTS>character2.POINTS){
        console.log(character1.NAME, "venceu a corrida! Parabéns! 🏆")
    }else if(character2.POINTS>character1.POINTS){
        console.log(character2.NAME, "venceu a corrida! Parabéns! 🏆")
    }else{
        console.log("A corrida terminou em empate 😞")
    }
}

(async function main() {
    console.log(
        "🏁 Corrida entre", player1.NAME, "e", player2.NAME, "começando...\n");
    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
})()