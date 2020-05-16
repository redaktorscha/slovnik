const readFromFile = (inputLink) => {
    const fs = require('fs');
    return fs.readFileSync(inputLink).toString();
};

const writeToFile = (outputLink, resultText) => {
    const fs = require('fs');
    fs.writeFileSync(outputLink, resultText);
}


const makeStringSet = (str) => {

    const alphabeth = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ы", "ь", "э", "ю", "я"];
    //
    str = str.toLowerCase().replace(/\n/g, " ");

    const arr = str.split(' ')
        .map(el => el.split('')
            .filter(char => alphabeth.includes(char) || char === '-').join(''))
        .filter(word => word.length)
        .sort((a, b) => a > b ? 1 : -1);

    const ret = new Set(arr);
    //console.log(ret);
    return [...ret].join('\n');
}


const makeDiffList = (input, link) => {
    writeToFile(link, input);
}


makeDiffList(makeStringSet(readFromFile('./text.txt')), './text2.txt');