window.cipher = {
  encode: encode,
  decode: decode
};

let offsetEncode;
let textEncode;

function encode(offset, string) {
  event.preventDefault();

  let char;
  let resultCharCode;
  let resultText = "";

  for (let i=0; i < textEncode.length; i++) {
    char = textEncode[i].charCodeAt();
		
    resultCharCode = ((char + offsetEncode - 32)%95)+32;
    resultText += String.fromCharCode(resultCharCode);
  }
  return resultText;
}

let offsetDecode;
let textDecode;

function decode(offset, string) {
  event.preventDefault();

  let char;
  let resultCharCode;
  let resultText = "";

  for (let i=0; i < textDecode.length; i++) {
    char = textDecode[i].charCodeAt();

    resultCharCode = (((char - offsetDecode)-32)%95)+32;
    resultText += String.fromCharCode(resultCharCode);
  }
  return resultText;
}

