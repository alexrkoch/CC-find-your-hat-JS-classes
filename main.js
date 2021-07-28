const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field, verticalLimit, horizontalLimit) {
    this.field = field;
    this.verticalPosition = 1;
    this.horizontalPosition = 1;
    this.verticalLimit = verticalLimit;
    this.horizontalLimit = horizontalLimit;
  }
  static generateField() {}
  printField() {
    this.field.forEach((element) => console.log(element.join("")));
  }
  handleInput() {
    // console.log("initialVerticalPosition: " + this.verticalPosition);
    // console.log("initialHorizontalPosition: " + this.horizontalPosition);
    let input = prompt("What's your next move? ");
    if ((input === "u") & (this.verticalPosition > 1)) {
      this.verticalPosition--;
    } else if (
      (input === "r") &
      (this.horizontalPosition < this.horizontalLimit)
    ) {
      this.horizontalPosition++;
    } else if (input === "d") {
      this.verticalPosition++;
    } else if ((input === "l") & (this.horizontalPosition > 1)) {
      this.horizontalPosition--;
    }
    // console.log("newVerticalPosition: " + this.verticalPosition);
    // console.log("newHorizontalPosition: " + this.horizontalPosition);
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
const myField = new Field(
  [
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
  ],
  3,
  3
);

myField.handleInput();
