const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function letterToBinary(symm) {
    if(symm === " ") return "\*\*\*\*\*\*\*\*"
    let morse = [];
    let alphabet = [];
    let ALFABET_TABLE = {};
    let dotDash = '';
    morse = Object.keys(MORSE_TABLE);
    alphabet = morse.map((ch) => MORSE_TABLE[ch]);

    for(let i=0; i < morse.length; i++){
        ALFABET_TABLE[alphabet[i]] = morse[i];
    }

    dotDash = ALFABET_TABLE[symm];
    binstr ='';

    for(let c=0; c < dotDash.length; c++){
        if(dotDash[c] === ".") binstr += '10';
        else binstr += '11';
    }



    let res = "";
    for(let i=0; i < (10 - dotDash.length); i++){
        res += "0";
    }

    return res + binstr;
}

let s = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
console.log(binaryToletter(s));

function binaryToletter(binstr) {
    let arr = binstr.match(/.{1,10}/g);
    arr = arr.map((ch)=>ch.match(/.{1,2}/g).map(
        function(ch){
            switch(ch){
                case "00": return "";
                case "10": return "\.";
                case "11": return "\-";
                case "**": return " ";
            }
        }
        ).join('').trim());
    let sent = "";
    for(sym of arr)
        if(sym === "") sent = sent + " ";
        else sent = sent + MORSE_TABLE[sym];
    return sent;
}


  //  dotDash = dotDash.replace(/\./gi, "10");
  //  dotDash = dotDash.replace(/\-/gi, "11");
  //  dotDash = dotDash.replaceAll('.', "10");
  //  dotDash = dotDash.replaceAll('-', "11");
function decode(expr) {
    return binaryToletter(expr);
}

module.exports = {
    decode
}