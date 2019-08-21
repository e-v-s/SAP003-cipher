//funções de cliques, eventos do DOM
function functionEncode(){
	event.preventDefault();
	offsetEncode = Number(document.getElementById('number-offset').value);
	textEncode = document.getElementById('text').value;

	let resultText = encode(offsetEncode, textEncode);

	document.getElementById('cipher-text-result').innerHTML = resultText;
}
//------------------------------------------------------------------------------------------------//
function functionDecode(){
	event.preventDefault();
	offsetDecode = Number(document.getElementById('offset-decipher').value);
	textDecode = document.getElementById('text-decipher').value;

	let resultText = decode(offsetDecode, textDecode);

	document.getElementById('decipher-text-result').innerHTML = resultText;
}


// TESTE

function selectTab(tabIndex){
	document.getElementById('tab1Content').style.display = 'none';
	document.getElementById('tab2Content').style.display = 'none';

	document.getElementById('tab' + tabIndex + 'Content').style.display = 'block';
}

