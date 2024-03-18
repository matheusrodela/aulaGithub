
//Select1
document.addEventListener('input', function (event) {

        if (event.target.id !== 'SelectPacotes1') return;

	if (event.target.value === '10anuncios') {
	document.querySelector('#promo1').innerHTML = 250;
        document.querySelector('#price1').innerHTML = 100;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/1IYNQCDV7R";
	} else if (event.target.value === '20anuncios') {
        document.querySelector('#promo1').innerHTML = 350;
        document.querySelector('#price1').innerHTML = 125;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/D9AM5DDDBB";
	} else if (event.target.value === '30anuncios') {
	document.querySelector('#promo1').innerHTML = 450;
        document.querySelector('#price1').innerHTML = 150;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/B92K7DEY9D";
	} else if (event.target.value === '50anuncios') {
	document.querySelector('#promo1').innerHTML = 550;
        document.querySelector('#price1').innerHTML = 200;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/ORXI58FZPI";
	} else if (event.target.value === '100anuncios') {
	document.querySelector('#promo1').innerHTML = 750;
        document.querySelector('#price1').innerHTML = 300;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/RSJJSZJJJC";
	} else if (event.target.value === '200anuncios') {
	document.querySelector('#promo1').innerHTML = 1050;
        document.querySelector('#price1').innerHTML = 400;
        document.querySelector('#button1').href = "https://seguro.imobplace.com.br/r/CRPM1NN1DL";
	}
}, false);

//Select2
document.addEventListener('input', function (event) {

	if (event.target.id !== 'SelectPacotes2') return;

	if (event.target.value === '100imoveis') {
        document.querySelector('#price2').innerHTML = 150;
        document.querySelector('#button2').href = "https://seguro.imobplace.com.br/r/8JYR2W2YCF";
	} else if (event.target.value === '200imoveis') {
        document.querySelector('#price2').innerHTML = 200;
        document.querySelector('#button2').href = "https://seguro.imobplace.com.br/r/RE6ASGXDKA";
	} else if (event.target.value === 'pacote400') {
        document.querySelector('#price2').innerHTML = 250;
        document.querySelector('#button2').href = "https://seguro.imobplace.com.br/r/LP2Y84MMC8";
	}
}, false);

//Select3
document.addEventListener('input', function (event) {

	if (event.target.id !== 'SelectPacotes3') return;

	if (event.target.value === '10anuncios') {
	document.querySelector('#promo2').innerHTML = 300;
        document.querySelector('#price3').innerHTML = 150;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/F4XOUD6Y2B";
	} else if (event.target.value === '20anuncios') {
        document.querySelector('#promo2').innerHTML = 400;
        document.querySelector('#price3').innerHTML = 175;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/7FIXIP00YS";
	} else if (event.target.value === '30anuncios') {
	document.querySelector('#promo2').innerHTML = 500;
        document.querySelector('#price3').innerHTML = 200;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/JYM917FUSL";
	} else if (event.target.value === '50anuncios') {
	document.querySelector('#promo2').innerHTML = 600;
        document.querySelector('#price3').innerHTML = 250;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/95PRTZ37YL";
	} else if (event.target.value === '100anuncios') {
	document.querySelector('#promo2').innerHTML = 900;
        document.querySelector('#price3').innerHTML = 350;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/4QPUGZ9Y56";
	} else if (event.target.value === '200anuncios') {
	document.querySelector('#promo2').innerHTML = 1200;
        document.querySelector('#price3').innerHTML = 450;
        document.querySelector('#button3').href = "https://seguro.imobplace.com.br/r/CXJFWNSO5I";
	}
}, false);