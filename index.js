let b = document.getElementsByTagName("div");
let Turn = document.getElementById("Turn");
let OScore = document.getElementById("OScore");
let XScore = document.getElementById("XScore");
let OLetScore = 0;
let XLetScore = 0;
let flag = false;

for (let i = 0; i <= b.length; i++) {
  if (b[i].id == "b") {
    b[i].addEventListener("click", () => {
      //adding x o
      if (flag) {
        if (b[i].innerText == "") {
          b[i].innerText = "X";
          flag = !flag;
        }
      } else {
        if (b[i].innerText == "") {
          b[i].innerText = "O";
          flag = !flag;
        }
      }

      //give the win
      if (
        (b[6].innerText == "X") &
        (b[7].innerText == "X") &
        (b[8].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[6].innerText == "O") &
        (b[7].innerText == "O") &
        (b[8].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[10].innerText == "X") &
        (b[11].innerText == "X") &
        (b[12].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[10].innerText == "O") &
        (b[11].innerText == "O") &
        (b[12].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[14].innerText == "X") &
        (b[15].innerText == "X") &
        (b[16].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[14].innerText == "O") &
        (b[15].innerText == "O") &
        (b[16].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[6].innerText == "X") &
        (b[11].innerText == "X") &
        (b[16].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[6].innerText == "O") &
        (b[11].innerText == "O") &
        (b[16].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[8].innerText == "X") &
        (b[11].innerText == "X") &
        (b[14].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[8].innerText == "O") &
        (b[11].innerText == "O") &
        (b[14].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[6].innerText == "X") &
        (b[10].innerText == "X") &
        (b[14].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[6].innerText == "O") &
        (b[10].innerText == "O") &
        (b[14].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[7].innerText == "X") &
        (b[11].innerText == "X") &
        (b[15].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[7].innerText == "O") &
        (b[11].innerText == "O") &
        (b[15].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      } else if (
        (b[8].innerText == "X") &
        (b[12].innerText == "X") &
        (b[16].innerText == "X")
      ) {
        alert("X Wins");
        restart();
      } else if (
        (b[8].innerText == "O") &
        (b[12].innerText == "O") &
        (b[16].innerText == "O")
      ) {
        alert("O Wins");
        restart();
      }

      //change turns
      if (flag) {
        Turn.innerText = "X's Turn";
      } else {
        Turn.innerText = "O's Turn";
      }
    });
  }
}

function restart() {
  flag = false;
  Turn.innerText = "O's Turn";
  let H_name1 = [
    "ACMilan",
    "Juventus",
    "Napoli",
    "PSG",
    "Tottenham",
    "Bayern Munchen",
    "InterMilan",
  ];
  let H_name2 = [
    "Ajax",
    "Porto",
    "Benfica",
    "Sporting",
  ]
  let H_name3 = [
    "Messi",
    "Cristiano",
    "Giroud",
    "Salah",
    "Modric",
    "Zlatan",
    "Courtois",
    "DiMaria",
    "Ramos",
    "Neymar",
    "Kroos",
    "Casemiro",
    "De Bruyne",
    "Kante",
  ]
    let V_name1 = [
    "Roma",
    "Dortmond",
    "Lyon",
    "Chealse",
    "Arsenal",
    "ManCity",
    "ManUnited",
    "LiverPool",
    "Barcelona",
    "RealMadrid",
    "AtlticoMadrid",
    ];
  let V_name2 = [
    "World Cup",
    "UCL",
    "Euro",
    "Cupa",
  ]
  let V_name3 = [
    "LaLiga",
    "Ligue 1",
    "Seria A",
    "Premier Leage",
    "BundsLiga",
  ]
  for (let i = 0; i <= b.length; i++) {
    if (b[i].id == "b" || b[i].id == "V" || b[i].id == "H") {
      b[i].innerText = "";
    }
    b[2].innerText = H_name1[getRandomInt(0,H_name1.length)]
    b[3].innerText = H_name2[getRandomInt(0,H_name2.length)]
    b[4].innerText = H_name3[getRandomInt(0,H_name3.length)]

    b[5].innerText = V_name1[getRandomInt(0,V_name1.length)]
    b[9].innerText = V_name2[getRandomInt(0,V_name2.length)]
    b[13].innerText = V_name3[getRandomInt(0,V_name3.length)]

  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
