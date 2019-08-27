window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, string) {
  let char;
  let resultCharCode;
  let resultText = "";

  for (let i=0; i < string.length; i++) {
    char = string[i].charCodeAt();
		
    resultCharCode = ((char + offset - 65)%26)+65;
    resultText += String.fromCharCode(resultCharCode);
  }
  return resultText;
}

function decode(offset, string) {
  let char;
  let resultCharCode;
  let resultText = "";

  for (let i=0; i < string.length; i++) {
    char = string[i].charCodeAt();

    resultCharCode = (((char - offset)-90)%26)+90;
    resultText += String.fromCharCode(resultCharCode);
  }
  return resultText;
}

