var deckDiv = document.getElementById("cardDiv");

var card = [
  {
    "cardName" : "Rouge Knight",
    "cardPic" : "url(Images/Knight.jfif)",
    "cardType" : "Attack",
    "HP" : "500",
    "Actions" : ["Sword Slash", "Sword Thrust", "Block"],
    "cardColor" : "Blue"
  },
  {
    "cardName" : "Ancient Cleric",
    "cardPic" : "url(Images/Cleric.png)",
    "cardType" : "Healer/Attack",
    "HP" : "400",
    "Actions" : ["Holy Mace", "Holy Field", "Heal"],
    "cardColor" : "Yellow"
  },
  {
    "cardName" : "Reaper",
    "cardPic" : "url(Images/Reaper2.jfif)",
    "cardType" : "Dark Caster",
    "HP" : "250",
    "Actions" : ["Possession", "Dark Hex", "Posion Slash"],
    "cardColor" : "Purple"
  },
  {
    "cardName" : "Mercenary",
    "cardPic" : "url(Images/Mercenary.jfif)",
    "cardType" : "Attack/Stealth",
    "HP" : "350",
    "Actions" : ["Silent Strike", "Speed Buff", "Sword Slash"],
    "cardColor" : "Green"
  },
  {
    "cardName" : "Warlock",
    "cardPic" : "url(Images/Warlock.jfif)",
    "cardType" : "Caster",
    "HP" : "300",
    "Actions" : ["Attack Buff", "Fire Ball", "Lightning Strike"],
    "cardColor" : "Orange"
  },
  {
    "cardName" : "Elven Hunter",
    "cardPic" : "url(Images/Elf.jfif)",
    "cardType" : "Long Range",
    "HP" : "300",
    "Actions" : ["True Shot", "Focus Buff", "Multi Shot"],
    "cardColor" : "Red"
  }
]

for(var i = 0; i < card.length; i++){
  createDeck(card[i]);
}

function createDeck(cards){
  let cardBase = document.createElement("DIV");
  //Add background
  cardBase.classList.add("cardAttr");
  cardBase.style.backgroundImage = cards["cardPic"];
  cardBase.style.borderColor = cards["cardColor"];

  //Add Info
  let cardInfo = document.createElement("DIV");
  cardInfo.classList.add("cardInfoAttr");
  //Add name to Info
  let cardName = document.createElement("H3");
  cardName.innerHTML = cards["cardName"];
  cardInfo.appendChild(cardName);
  //Add type to Info
  let cardType = document.createElement("P");
  cardType.innerHTML = "Card Type: " + cards["cardType"];
  cardInfo.appendChild(cardType);
  //Add HP to Info
  let cardHP = document.createElement("P");
  cardHP.innerHTML = "Hit Points: " + cards["HP"];
  cardInfo.appendChild(cardHP);
  //Add actions to the card
  let cardActTitle = document.createElement("P");
  cardActTitle.innerHTML = "Actions:";
  let cardActList = document.createElement("UL");
  for(var i = 0; i < cards["Actions"].length; i++){
    let cardAct = document.createElement("LI");
    cardAct.innerHTML = cards["Actions"][i];
    cardActList.appendChild(cardAct);
  }
  cardInfo.appendChild(cardActTitle);
  cardInfo.appendChild(cardActList);

  cardBase.appendChild(cardInfo);
  deckDiv.appendChild(cardBase);
}
