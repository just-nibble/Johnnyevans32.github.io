function calc(){
	
	let amount = parseInt(document.getElementById('amount').value);

	let time = parseInt(document.getElementById('period').value);

	let plan = document.getElementById('plan').value;

	let text = "Your interest amount is ";

	let currency = " NAIRA";


	if (plan  === 'Piggybank') {
		let interest = 10;
		document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency;
	}
	if (plan  === 'Safelock') {
		let interest = 15.5;
		document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100  + currency;
	}
	if (plan  === 'Target') {
		let interest = 10;
		document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100 + currency;
	}
	if (plan  === 'Flex') {
		let interest = 10;
		document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100 + currency;
	}
	if (plan  === 'Flex_Dollar') {
		let interest = 6;
		document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency;
	}
	if (plan  === 'Investify') {
		let interest = 25;
		document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency;
	}
	
}
