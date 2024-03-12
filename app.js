

let firstNumber = 22;

let secondNumber = 0;

let operation = "/";

let result;

switch(operation){
    case "+" :
    result = firstNumber + secondNumber;
    break;

    case "-":
        result = firstNumber - secondNumber;
        break;

        case "*":
            result = firstNumber * secondNumber;
            break;


            case "/":
              result =firstNumber/secondNumber;
              break;

                default:
                    console.log("undefined");
                    break;
}



console.log("the answwr is ", result)