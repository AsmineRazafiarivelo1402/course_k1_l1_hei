


export  const encodage = (messages) => {
  let messagesDecode = "";
  if (!messages) {
    return "";
  } else {
    for (let i = 0; i < messages.length; i++) {
      switch (messages[i]) {
        case "A":
          messagesDecode += "G";
          break;
        case "a":
          messagesDecode += "g";
          break;
        case "G":
          messagesDecode += "A";
          break;
        case "g":
          messagesDecode += "a";
          break;
        case "D":
          messagesDecode += "E";
          break;
        case "d":
          messagesDecode += "e";
          break;
        case "E":
          messagesDecode += "D";
          break;
        case "e":
          messagesDecode += "d";
          break;
        case "R":
          messagesDecode += "Y";
          break;
        case "r":
          messagesDecode += "y";
          break;
        case "Y":
          messagesDecode += "R";
          break;
        case "y":
          messagesDecode += "r";
          break;
        case "P":
          messagesDecode += "O";
          break;
        case "p":
          messagesDecode += "o";
          break;
        case "O":
          messagesDecode += "P";
          break;
        case "o":
          messagesDecode += "p";
          break;

        case "L":
          messagesDecode += "U";
          break;
        case "l":
          messagesDecode += "u";
          break;
        case "U":
          messagesDecode += "L";
          break;
        case "u":
          messagesDecode += "l";
          break;
           case "K":
          messagesDecode += "I";
          break;
        case "k":
          messagesDecode += "i";
          break;
        case "I":
          messagesDecode += "K";
          break;
        case "i":
          messagesDecode += "k";
          break;
          default:
            messagesDecode+=messages[i]
          break;
      }
    }
  }
 return messagesDecode
};
