//funções de cliques, eventos do DOM
document.getElementById("btn-text").addEventListener("click", functionEncode);
document.getElementById("btn-text-decipher").addEventListener("click", functionDecode);

function functionEncode() {
  event.preventDefault();
  let offsetEncode = Number(document.getElementById("number-offset").value);
  let textEncode = document.getElementById("text").value;

  let resultText = window.cipher.encode(offsetEncode, textEncode);

  document.getElementById("cipher-text-result").innerHTML = "Mensagem cifrada: " + resultText;
}
//------------------------------------------------------------------------------------------------//
function functionDecode() {
  event.preventDefault();
  let offsetDecode = Number(document.getElementById("offset-decipher").value);
  let textDecode = document.getElementById("text-decipher").value;
  
  let resultText = window.cipher.decode(offsetDecode, textDecode);

  document.getElementById("decipher-text-result").innerHTML = "Mensagem decifrada: " + resultText;
}
// TESTE
function selectTab(tabIndex) {
  event.preventDefault();

  document.getElementById("tab1Content").style.display = "none";
  document.getElementById("tab2Content").style.display = "none";

  document.getElementById("tab" + tabIndex + "Content").style.display = "block";
}

