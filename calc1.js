window.onload = function(){
	fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(response => response.json())
    .then(data => loadForm(data) && calc());
}

function loadForm(data) {
	let rates = data.rates;
	let x = "";
	let elem = document.getElementById("n2");
	for (x in rates) {
		var option = document.createElement("option");
		option.text = rates[x].name + " (" + rates[x].unit + " " + ")";
		option.value = rates[x].value;
		elem.add(option);	
	}
}// loadForm

function calc(){
   var n1 = parseFloat(document.getElementById('n1').value);
   var n2 = parseFloat(document.getElementById('n2').value);
   var oper = document.getElementById('operator').value;
   document.getElementById('message').innerHTML = n1 + " BitCoin(s) = " + n1*n2;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}            

            
