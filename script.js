let xp = 1000;
let hero = "Rafael";
let elo = "";

//Versão Com switchCase

switch (true) {
  case xp <= 1000:
    elo = "Ferro";
    break;

  case xp >= 1001 && xp <= 2000:
    elo = "Bronze";
    break;

  case xp >= 2001 && xp <= 5000:
    elo = "Prata";
    break;

  case xp >= 5001 && xp <= 7000:
    elo = "Ouro";
    break;

  case xp >= 7001 && xp <= 8000:
    elo = "Platina";
    break;

  case xp >= 8001 && xp <= 9000:
    elo = "Ascendente";
    break;

  case xp >= 9001 && xp <= 10000:
    elo = "Imortal";
    break;

  case xp >= 10000:
    elo = "Radiante";
    break;
}

console.log(`Parabéns ${hero} você alcançou o ranking ${elo}!`);

//Versão Com Array

const lvlRanking = [
  { nome: "Ferro", min: 1, max: 1000 },
  { nome: "Bronze", min: 1001, max: 2000 },
  { nome: "Prata", min: 2000, max: 5000 },
  { nome: "Ouro", min: 5001, max: 7000 },
  { nome: "Platina", min: 7001, max: 8000 },
  { nome: "Ascendente", min: 8001, max: 9000 },
  { nome: "Imortal", min: 9001, max: 10000 },
  { nome: "Radiante", min: 10001, max: 99999 },
];

const nomeRanking = lvlRanking.map((item) => {
  if (xp >= item.min && xp <= item.max) {
    console.log(`Parabéns ${hero} você alcançou o ranking ${item.nome}!`);
    return;
  }
});

if (xp === 0) {
  console.log(
    `${hero} o seu xp:"${xp}" ainda não é o suficiente, continue jogando para adquirir Ranking!`
  );
}
