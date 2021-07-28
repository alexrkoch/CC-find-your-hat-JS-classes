const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field, verticalLimit, horizontalLimit) {
    this.field = field;
    this.verticalPosition = 0;
    this.horizontalPosition = 0;
    this.verticalLimit = verticalLimit;
    this.horizontalLimit = horizontalLimit;
  }
  static generateField() {}
  printField() {
    this.field.forEach((element) => console.log(element.join("")));
  }
  handleInput() {
    let input = prompt("What's your next move? ");
    if ((input === "u") & (this.verticalPosition > 0)) {
      this.verticalPosition--;
    } else if (input === "r") {
      this.horizontalPosition++;
    } else if (input === "d") {
      this.verticalPosition++;
    } else if (input === "l") {
      this.horizontalPosition++;
    }
  }
  checkForInBounds() {}
  checkForWin() {}
  checkForLoss() {}
  modifyField() {}
  gameFlow() {
    this.handleInput();
    this.checkForInBounds();
  }
}

// Your class should take a single argument representing the field:
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
