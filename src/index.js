const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const Characters=[
        {NAME: "MARIO",
        SPEED: 4,
        MANEUVERABILITY: 3,
        POWER: 3,
        POINTS: 0},
        {NAME: "LUIGI",
        SPEED: 3,
        MANEUVERABILITY: 4,
        POWER: 4,
        POINTS: 0},
        {NAME: "PEACH",
        SPEED: 3,
        MANEUVERABILITY: 4,
        POWER: 2,
        POINTS: 0},
        {NAME: "YOSHI",
        SPEED: 2,
        MANEUVERABILITY: 4,
        POWER: 3,
        POINTS: 0},
        {NAME: "DONKEY KONG",
        SPEED: 2,
        MANEUVERABILITY: 2,
        POWER: 5,
        POINTS: 0},
        {NAME: "BOWSER",
        SPEED: 5,
        MANEUVERABILITY: 2,
        POWER: 5,
        POINTS: 0
        }
]

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

async function calcDamage(characterLoser, characterWin,item, random) {
    characterLoser.POINTS-=item.damage
    console.log(characterWin.NAME, "venceu o confronto!", characterLoser.NAME,"foi atingido por um", item.name,"perdeu", item.damage,"ponto(s)")
    if((Math.floor(random)*10)%2===0){
        console.log(characterWin.NAME,"ganhou um turbo (+1 ponto)")
        characterWin.POINTS++;
    }
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

            if(PowerResult1!==PowerResult2){
                let random = Math.random();
                let item={
                    damage: 0,
                    name: ""};
                switch(true){
                    case random<=0.25:
                        item.damage=2;
                        item.name="BOMBA"
                    break;
                    default:
                        item.damage=1;
                        item.name="CASCO"
                    break;
                }
                if(PowerResult1>PowerResult2){
                    await calcDamage(character2, character1, item, random)
                }else{
                    await calcDamage(character1, character2, item, random)
                }
            }else{
                console.log("Confronto empatado, nenhum ponto perdido")
            }


            if(character1.POINTS<=-1){
                character1.POINTS=0;
                console.log("Ninguem pode ficar negativo, pontos de ", character1.NAME," zerados")
            }else if(character2.POINTS<=-1){
                character2.POINTS=0;
                console.log("Ninguem pode ficar negativo, pontos de ", character2.NAME," zerados")
            }
        


        }

        // verifica o vencedor
        if (TotalTestSkill1>TotalTestSkill2){
            console.log(character1.NAME, "marcou um ponto!")
            character1.POINTS++;
        } else if (TotalTestSkill2>TotalTestSkill1){
            console.log(character2.NAME, "marcou um ponto!")
            character2.POINTS++;
        } else if (TotalTestSkill1===TotalTestSkill2 && block!=="CONFRONTO"){
            console.log("Jogadores empataram")
        } console.log("---------------------------")
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

async function findCharacter(name){
    return Characters.find(c=> c.NAME.toLowerCase().trim()===name.toLowerCase().trim())
}
async function chooseCharacter(rl){
    console.log("Escolha os 2 competidores da partida\n", Characters)
    let player1, player2;
    while(!player1 || !player2){
        
        const answer1 = await rl.question("Digite o nome do Player 1: ")
        player1 = await findCharacter(answer1)
        if(!player1){
            console.log("Personagem não encontrado.")
        }
        const answer2 = await rl.question("Digite o nome do player 2: ")
        player2 = await findCharacter(answer2)
        if(!player2){
            console.log("Personagem não encontrado")
        }
        if(player1===player2){
            console.log("Escolham personagens diferentes")
            player1, player2=0
        }
    }
return [player1, player2];
}


(async function main() {
    const rl = readline.createInterface({input, output});
    console.log("Bem vindo ao Simulador de Mario Kart")
    const players = await chooseCharacter(rl)
    if(!players){
        return 0
    }
    rl.close();

    console.log("🏁 Corrida entre", players[0].NAME, "e", players[1].NAME, "começando...\n");
    await playRaceEngine(players[0], players[1])
    await declareWinner(players[0], players[1])
})()