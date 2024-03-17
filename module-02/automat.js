const drinkType = process.argv[2];
const drinkSize = process.argv[3].slice(5);

let drinkTypePl;

switch (drinkType) {
  case "name=juice":
    drinkTypePl = "sok";
    break;
  case "name=coffe":
    drinkTypePl = "kawę";
    break;
  default:
    console.log("Wybrano nieprawidłową opcję");
}

console.log(`Przygotowuję ${drinkTypePl} o pojemności ${drinkSize} ml.`);
