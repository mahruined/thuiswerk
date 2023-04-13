const menu = {
  bier: 2.50,
  wijn: 3.00,
  fris: 2.00
};

const bestellingen = {};

const getElement = id => document.getElementById(id);
const createElement = tag => document.createElement(tag);
const setTextContent = (el, text) => el.textContent = text;

const showError = () => {
  const li = createElement("li");
  setTextContent(li, "Foutmelding: dit ken ik niet.");
  getElement("bestellingen").appendChild(li);
};

const addDrink = (drankje) => {
  if (!menu.hasOwnProperty(drankje)) {
    showError();
    return;
  }
  const aantal = parseInt(prompt(`Hoeveel ${drankje}(s) wilt u bestellen?`));
  if (!isNaN(aantal)) {
    bestellingen[drankje] = (bestellingen[drankje] || 0) + aantal;
    const li = createElement("li");
    setTextContent(li, `U heeft ${bestellingen[drankje]} ${drankje}(n) besteld.`);
    getElement("bestellingen").appendChild(li);
    getElement("bonnetje").disabled = false;
  }
};

const showBill = () => {
  let totaal = 0;
  const bestellingenElement = getElement("bestellingen");
  const totaalElement = getElement("totaal");
  bestellingenElement.innerHTML = "";
  for (let drankje in bestellingen) {
    if (bestellingen.hasOwnProperty(drankje)) {
      const aantal = bestellingen[drankje];
      const prijs = menu[drankje];
      const kosten = aantal * prijs;
      const li = createElement("li");
      setTextContent(li, `${aantal} x ${drankje} = ${kosten.toFixed(2)} euro`);
      bestellingenElement.appendChild(li);
      totaal += kosten;
    }
  }
  setTextContent(totaalElement, `Totaal: ${totaal.toFixed(2)} euro`);
};

getElement("bestellen").addEventListener("click", function() {
  let invoer;
  do {
    invoer = prompt("Wat wilt u bestellen? (bier, wijn of fris, of typ 'done' om af te rekenen)");
    if (invoer === null) {
      return;
    }
    if (invoer.toLowerCase() === "done") {
      showBill();
      return;
    }
    addDrink(invoer);
  } while (true);
});

getElement("bonnetje").addEventListener("click", function() {
  showBill();
});

setInterval(function() {
  getElement("bonnetje").disabled = (Object.keys(bestellingen).length === 0);
}, 100);