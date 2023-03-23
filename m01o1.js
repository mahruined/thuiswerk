let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));
if (gewenste_aantal_autos > 80) {
    verdiepingen = Math.ceil((gewenste_aantal_autos - 80) / 120);
  }
  else verdiepingen = 0

let antwoord = "U heeft " + verdiepingen + " verdiepingen nodig om het gewenste aantal autos kwijt te kunnen.";
document.getElementById("antwoord").innerText = antwoord;
alert(antwoord)

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik " + verdiepingen + " verdiepingen nodig.");