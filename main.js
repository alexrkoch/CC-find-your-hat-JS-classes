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
    this.gameStatus = "active";
  }
  static generateField() {}
  printField() {
    this.field.forEach((element) => console.log(element.join("")));
  }
  handleInput() {
    // consider adding losing if you go off board.
    let input = prompt("What's your next move? ");
    if ((input === "u") & (this.verticalPosition > 0)) {
      this.verticalPosition--;
    } else if (
      (input === "r") &
      (this.horizontalPosition < this.horizontalLimit - 1)
    ) {
      this.horizontalPosition++;
    } else if (
      (input === "d") &
      (this.verticalPosition < this.verticalLimit - 1)
    ) {
      this.verticalPosition++;
    } else if ((input === "l") & (this.horizontalPosition > 0)) {
      this.horizontalPosition--;
    }
  }
  checkForWin() {
    if (this.field[this.verticalPosition][this.horizontalPosition] === hat) {
      console.log("You found the hat - You win!!");
    }
    this.gameStatus = "over";
  }
  checkForLoss() {
    if (this.field[this.verticalPosition][this.horizontalPosition] === hole) {
      console.log("Whoops you fell in a hole :(");
    }
    this.gameStatus = "over";
  }
  modifyField() {
    if (this.gameStatus === "active") {
      this.field[this.verticalPosition][this.horizontalPosition] = "*";
    }
  }
  playGame() {
    while (this.gameStatus === "active") {
      this.printField();
      this.handleInput();
      this.checkForWin();
      this.checkForLoss();
      this.modifyField();
      this.printField();
    }
  }
}

// const newField = Field.generateField(x, y);
// const myField = new Field(newField);
// myField.gamePlay();

// TESTING PLAYGROUND

const myField = new Field(
  [
    ["*", "^", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
  ],
  3,
  3
);

myField.playGame();
