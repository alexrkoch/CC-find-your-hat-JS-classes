const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
    this.verticalPosition = 0;
    this.horizontalPosition = 0;
    this.verticalLimit = field.length;
    this.horizontalLimit = field[0].length;
    this.gameStatus = "active";
  }
  static generateField(verticalSize, horizontalSize, holeProbability) {
    const totalCells = verticalSize * horizontalSize;
    const holeOccurrence = Math.floor(totalCells * holeProbability);
    let fieldArray = [];
    let hatSelector = Math.floor(Math.random() * (totalCells - 1)) + 1;
    let cellCounter = 0;
    for (let i = 0; i < verticalSize; i++) {
      fieldArray[i] = [];
      for (let j = 0; j < horizontalSize; j++) {
        let randomSelector = Math.floor(Math.random() * totalCells);
        if (cellCounter === hatSelector) {
          fieldArray[i][j] = hat;
          cellCounter++;
        } else if (randomSelector <= holeOccurrence) {
          fieldArray[i][j] = hole;
          cellCounter++;
        } else {
          fieldArray[i][j] = fieldCharacter;
          cellCounter++;
        }
      }
    }
    fieldArray[0][0] = pathCharacter;
    return fieldArray;
  }

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
      this.gameStatus = "over";
    }
  }
  checkForLoss() {
    if (this.field[this.verticalPosition][this.horizontalPosition] === hole) {
      console.log("Whoops you fell in a hole :(");
      this.gameStatus = "over";
    }
  }
  modifyField() {
    this.field[this.verticalPosition][this.horizontalPosition] = "*";
  }
  playGame() {
    this.printField();
    while (this.gameStatus === "active") {
      this.handleInput();
      this.checkForWin();
      this.checkForLoss();
      if (this.gameStatus === "active") {
        this.modifyField();
        this.printField();
      }
    }
  }
}

const newField = Field.generateField(10, 20, 0.4);
const myField = new Field(newField);
myField.playGame();
