// NOTE: version #1

// const drinkType = process.argv[2];
// const drinkSize = process.argv[3].slice(5);

// let drinkTypePl;

// switch (drinkType) {
//   case "name=juice":
//     drinkTypePl = "sok";
//     break;
//   case "name=coffe":
//     drinkTypePl = "kawę";
//     break;
//   default:
//     console.log("Wybrano nieprawidłową opcję");
// }

// const consoleText = `Przygotowuję ${drinkTypePl} o pojemności ${drinkSize} ml.`;
// console.log(consoleText);

// NOTE: version #2

const options = {};
const arguments = process.argv.splice(2).forEach((argument) => {
  const argumentPart = argument.split("=");
  options[argumentPart[0]] = argumentPart[1];
});

let drink;

switch (options.name) {
  case "juice":
    drink = "sok";
    break;
  case "coffe":
    drink = "kawę";
    break;
  default:
    console.log("Wybrano nieprawidłową opcję");
}

const consoleText = `Przygotowuję ${drink} o pojemności ${options.size} ml.`;
console.log(consoleText);
