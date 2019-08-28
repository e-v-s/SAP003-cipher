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
    if (char >= 65 && char <= 90 ) {
      resultText += String.fromCharCode(resultCharCode);
    } else if (char >= 97 && char <= 122) {
      resultCharCode = ((char + offset - 97)%26)+97;
      resultText += String.fromCharCode(resultCharCode);
    } else {
      resultCharCode = ((char + offset - 32)%33)+32;
      resultText += String.fromCharCode(resultCharCode);
    } 
  }
  return resultText;
}

function decode(offset, string) {
  let char;
  let resultCharCode;
  let resultText = "";

  for (let i=0; i < string.length; i++) {
    
    char = string[i].charCodeAt();
    resultCharCode = ((char - offset-90)%26)+90;
    
    if (char >= 65 && char <= 90 ) {
      resultText += String.fromCharCode(resultCharCode);
    } else if (char >= 97 && char <= 122) {
      resultCharCode = ((char - offset - 122)%26)+122;
      resultText += String.fromCharCode(resultCharCode);
    } else {
      resultCharCode = ((char - offset - 64)%33)+64;
      resultText += String.fromCharCode(resultCharCode);
    } 
  }
  return resultText;
}