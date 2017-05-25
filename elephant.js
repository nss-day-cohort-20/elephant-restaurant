function makeElephant (name, size, color, legCount, weight, tailWeight,
                       tailLength, trunkWeight, trunkLength, bodyWeight, bodyLength) {
  // Create an elephant
  var elephant = {};

  elephant.name = name;
  elephant.size = size;
  elephant.color = color;
  elephant.legCount = legCount;
  elephant.weight = weight;

  elephant.tail = {
    weight: tailWeight,
    length: tailLength
  };

  elephant.trunk = {
    weight: trunkWeight,
    length: trunkLength
  };

  elephant.body = {
    weight: bodyWeight,
    length: bodyLength
  };

  return elephant;
}


function eatElephant (elephantName) {
  delete elephantName.body;
  delete elephantName.tail;
  delete elephantName.trunk;
}


var dumbo = makeElephant("Dumbo", 8, "slategray", 3, 200, 10, 4, 50, 6, 140, 10);
var fluffy = makeElephant("Fluffy", 10, "pink", 4, 270, 10, 4, 50, 6, 140, 10);
var slappy = makeElephant("Slappy", 6, "white", 4, 180, 10, 4, 50, 6, 140, 10);

var elephantMenu = [dumbo, fluffy, slappy];

console.log("Welcome to Eat-a-phant!!!!");
console.log("Take a look at our menu...");

function isElephantAvailableToBeEaten (whichElephant) {
  if (whichElephant.weight >= 200 && whichElephant.legCount === 4) {
    return true;
  }

  return false;
}


function orderElephant (customerPreference) {
  for (var i = 0; i < elephantMenu.length; i++) {
    if (elephantMenu[i].color === customerPreference &&
          isElephantAvailableToBeEaten(elephantMenu[i])) {
      eatElephant(elephantMenu[i]);
      console.log(`${elephantMenu[i].name} was eaten`);
    }
  }
}

var joe = {};
joe.hungryLevel = 10;
joe.money = 30;
joe.preference = "pink";
orderElephant(joe.preference);







var brenda = {};
brenda.hungryLevel = 6;
brenda.money = 70;
brenda.preference = "white";
















