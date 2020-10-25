module.exports = function toReadable(number) {
    const numbers = number.toString().split('');
    let string;

    if (number < 1) {
        string = 'zero';
    } else if (number < 10) {
        string = checkNumber0_9(parseInt(numbers[0]));
    } else if (number < 100) {
        if (number < 20) {
            string = checkNumber10_19(parseInt(numbers[1]));
        } else {
            string = `${checkNumber20_90(parseInt(numbers[0]))} ${checkNumber0_9(parseInt(numbers[1]))}`;
        }
    } else {
        if (parseInt(numbers[1]) < 1) {
            string = `${checkNumber0_9(parseInt(numbers[0]))} hundred ${checkNumber0_9(parseInt(numbers[2]))}`;
        } else if (parseInt(numbers[1]) < 2) {
            string = `${checkNumber0_9(parseInt(numbers[0]))} hundred ${checkNumber10_19(parseInt(numbers[2]))}`;
        } else {
            string = `${checkNumber0_9(parseInt(numbers[0]))} hundred ${checkNumber20_90(parseInt(numbers[1]))} ${checkNumber0_9(parseInt(numbers[2]))}`;
        }
    }

    return string.trim();
}

function checkNumber0_9(number) {
    let word;
    switch (number) {
        case 0:
            word = '';
            break;
        case 1:
            word = 'one';
            break;
        case 2: 
            word = 'two';
            break;
        case 3:
            word = 'three';
            break;
        case 4:
            word = 'four';
            break;
        case 5:
            word = 'five';
            break;
        case 6:
            word = 'six';
            break;
        case 7:
            word = 'seven';
            break;
        case 8:
            word = 'eight';
            break;
        case 9:
            word = 'nine';
            break;
    }

    return word;
}

function checkNumber10_19(number) {
    let word;
    switch (number) {
        case 0:
            word = 'ten';
            break;
        case 1:
            word = 'eleven';
            break;
        case 2:
            word = 'twelve';
            break;
        case 3:
            word = 'thirteen';
            break;
        case 4:
            word = 'fourteen';
            break;
        case 5:
            word = 'fifteen';
            break;
        case 6:
            word = 'sixteen';
            break;
        case 7:
            word = 'seventeen';
            break;
        case 8:
            word = 'eighteen';
            break;
        case 9:
            word = 'nineteen';
            break;
    }

    return word;
}

function checkNumber20_90(number) {
    let word;
    switch (number) {
        case 2:
            word = 'twenty';
            break;
        case 3:
            word = 'thirty';
            break;
        case 4:
            word = 'forty';
            break;
        case 5:
            word = 'fifty';
            break;
        case 6:
            word = 'sixty';
            break;
        case 7:
            word = 'seventy';
            break;
        case 8:
            word = 'eighty';
            break;
        case 9:
            word = 'ninety';
            break;
    }

    return word;
}
