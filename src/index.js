module.exports = function toReadable (number) {
  const numStr = String(number);
  const processOneCharzcterNum = (num) => {
    switch (num) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  }

  const processTwoCharzcterNum = (num) => {
    switch (num) {
      case '10':
        return 'ten';
      case '11':
        return 'eleven';
      case '12':
        return 'twelve';
      case '13':
        return 'thirteen';
      case '14':
        return 'fourteen';
      case '15':
        return 'fifteen';
      case '16':
        return 'sixteen';
      case '17':
        return 'seventeen';
      case '18':
        return 'eighteen';
      case '19':
        return 'nineteen';
      default:
        return '';
    }
  }

  const processSecondNum = (num) => {
    switch (num) {
      case '2':
        return 'twenty';
      case '3':
        return 'thirty';
      case '4':
        return 'forty';
      case '5':
        return 'fifty';
      case '6':
        return 'sixty';
      case '7':
        return 'seventy';
      case '8':
        return 'eighty';
      case '9':
        return 'ninety';
      default:
        return '';
    }
  }

  const processThirdNum = (num) => {
    switch (num) {
      case '1':
        return 'one hundred';
      case '2':
        return 'two hundred';
      case '3':
        return 'three hundred';
      case '4':
        return 'four hundred';
      case '5':
        return 'five hundred';
      case '6':
        return 'six hundred';
      case '7':
        return 'seven hundred';
      case '8':
        return 'eight hundred';
      case '9':
        return 'nine hundred';
      default:
        return '';
    }
  }

  let result = ''

  if (numStr === '0') {
    return 'zero';
  }
  if (numStr.length === 1) {
    return processOneCharzcterNum(numStr);
  }
  if (numStr.length === 2) {
    if (number < 20) {
      return processTwoCharzcterNum(numStr);
    } else {
      if (numStr[1] == '0') {
        return processSecondNum(numStr[0])
      }else {
        return `${processSecondNum(numStr[0])} ${processOneCharzcterNum(numStr[1])}`
      }
    }
  }

  if (numStr.length === 3) {
    result = result + processThirdNum(numStr[0])
    if (numStr.slice(1) == '00') {
      return result;
    }
    if (numStr[1] == '0') {
      return result + ' ' + processOneCharzcterNum(numStr[2])
    }
    if (numStr[1] == '1') {
      return result + ' ' + processTwoCharzcterNum(numStr.slice(1))
    }
    if (numStr[1] > '1') {
      result = result + ' ' + processSecondNum(numStr[1])
    }
    if (numStr[2] > '0') {
      result = result + ' ' + processOneCharzcterNum(numStr[2])
    }
  }

  return result;
}
