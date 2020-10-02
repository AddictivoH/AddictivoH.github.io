function calculateStats() {
	// store data of inputs
	const baseHP = document.getElementById('baseHP').innerText;
	const baseATK = document.getElementById('baseATK').innerText;
	const baseDEF = document.getElementById('baseDEF').innerText;
	const baseREC = document.getElementById('baseREC').innerText;
	const baseCD = document.getElementById('baseCD').innerText;
	const baseCR = document.getElementById('baseCR').innerText;
	const gem1 = document.getElementById('gem1').value;
	const gem2 = document.getElementById('gem2').value;
	const gem3 = document.getElementById('gem3').value;
	const gemSet = document.getElementById('gemSet').value;
	const AggrCS = document.getElementById('AggrCS').value;

	// Math for HP
	let calcHP1;	if (gem1 === 'HP') { calcHP1 = Math.round(baseHP * 0.68); } else { calcHP1 = 0.0;	};
	let calcHP2;	if (gem2 === 'HP') { calcHP2 = Math.round(baseHP * 0.68); } else { calcHP2 = 0.0;	};
	let calcHP3;	if (gem3 === 'HP') { calcHP3 = Math.round(baseHP * 0.68); } else { calcHP3 = 0.0;	};
	let calcHP4;	if (gemSet === 'HP') { calcHP4 = Math.round(baseHP * 0.2); } else { calcHP4 = 0.0;	};
	const FinalHP = Math.round(parseInt(baseHP) + parseInt(calcHP1) + parseInt(calcHP2) + parseInt(calcHP3) + parseInt(calcHP4));

	// Math for DEF
	let calcDEF1;	if (gem1 === 'DEF') {		calcDEF1 = Math.round(baseDEF * 0.68);	} else {		calcDEF1 = 0.0;	};
	let calcDEF2;	if (gem2 === 'DEF') {		calcDEF2 = Math.round(baseDEF * 0.68);	} else {		calcDEF2 = 0.0;	};
	let calcDEF3;	if (gem3 === 'DEF') {		calcDEF3 = Math.round(baseDEF * 0.68);	} else {		calcDEF3 = 0.0;	};
	let calcDEF4;	if (gemSet === 'DEF') {		calcDEF4 = Math.round(baseDEF * 0.2);	} else {		calcDEF4 = 0.0;	};
	const FinalDEF = Math.round(parseInt(baseDEF) + parseInt(calcDEF1) + parseInt(calcDEF2) + parseInt(calcDEF3) + parseInt(calcDEF4));

	// Math for REC
	let calcREC1;	if (gem1 === 'REC') {		calcREC1 = Math.round(baseREC * 0.68);	} else {		calcREC1 = 0.0;	};
	let calcREC2;	if (gem2 === 'REC') {		calcREC2 = Math.round(baseREC * 0.68);	} else {		calcREC2 = 0.0;	};
	let calcREC3;	if (gem3 === 'REC') {		calcREC3 = Math.round(baseREC * 0.68);	} else {		calcREC3 = 0.0;	};
	let calcREC4;	if (gemSet === 'REC') {		calcREC4 = Math.round(baseREC * 0.25);	} else {		calcREC4 = 0.0;	};
	const FinalREC = Math.round(parseInt(baseREC) + parseInt(calcREC1) + parseInt(calcREC2) + parseInt(calcREC3) + parseInt(calcREC4));

	// Math for CD
	let calcCD1;	if (gem1 === 'CD') {		calcCD1 = 70;	} else {		calcCD1 = 0.0;	};
	let calcCD2;	if (gem2 === 'CD') {		calcCD2 = 70;	} else {		calcCD2 = 0.0;	};
	let calcCD3;	if (gem3 === 'CD') {		calcCD3 = 70;	} else {		calcCD3 = 0.0;	};
	let calcCD4;	if (gemSet === 'CD') {		calcCD4 = 40;	} else {		calcCD4 = 0.0;	};
	const FinalCD = Math.round(parseInt(baseCD) + calcCD1 + calcCD2 + calcCD3 + calcCD4);

	// Math for CR
	let calcCR1;	if (gem1 === 'CR') {		calcCR1 = 54;	} else {		calcCR1 = 0.0;	};
	let calcCR2;	if (gem2 === 'CR') {		calcCR2 = 54;	} else {		calcCR2 = 0.0;	};
	let calcCR3;	if (gem3 === 'CR') {		calcCR3 = 54;	} else {		calcCR3 = 0.0;	};
	let calcCR4;	if (gemSet === 'CR') {		calcCR4 = 20;	} else {		calcCR4 = 0.0;	};
	const FinalCR = Math.round(parseInt(baseCR) + calcCR1 + calcCR2 + calcCR3 + calcCR4);

	// Math for ATK
	let calcATK1;	if (gem1 === 'ATK') {		calcATK1 = Math.round(baseATK * 0.68);	} else {		calcATK1 = 0.0;	};
	let calcATK2;	if (gem2 === 'ATK') {		calcATK2 = Math.round(baseATK * 0.68);	} else {		calcATK2 = 0.0;	};
	let calcATK3;	if (gem3 === 'ATK') {		calcATK3 = Math.round(baseATK * 0.68);	} else {		calcATK3 = 0.0;	};
	let calcATK4;	if (gemSet === 'ATK') {		calcATK4 = Math.round(baseATK * 0.2);	} else {		calcATK4 = 0.0;	};
	// Aggr & CS
	// let FinalAggrREC = Math.round( FinalREC*6.5 );
	let FinalATK; if (AggrCS === 'CS') {		FinalATK = Math.round( (parseInt(baseATK) + parseInt(calcATK1) + parseInt(calcATK2) + parseInt(calcATK3) + parseInt(calcATK4)) * 6 );
	} else if (AggrCS === 'US') {		FinalATK = Math.round( (parseInt(baseATK) + parseInt(calcATK1) + parseInt(calcATK2) + parseInt(calcATK3) + parseInt(calcATK4)) * 4 );
	} else if (AggrCS === 'HPaggr') {		FinalATK = Math.round(FinalHP * 0.3);
	} else if (AggrCS === 'DEFaggr') {		FinalATK = Math.round(FinalDEF * 4);
	} else if (AggrCS === 'normal') {		FinalATK = Math.round(parseInt(baseATK) + parseInt(calcATK1) + parseInt(calcATK2) + parseInt(calcATK3) + parseInt(calcATK4))
	} ;

	// Display data
	document.getElementById('buildHP').innerText = FinalHP + ' (' + Math.round(FinalHP / (1 - (FinalDEF / (FinalDEF + 1200)))) + ')';
	document.getElementById('buildATK').innerText = FinalATK + ' (' + Math.round(FinalATK + (FinalATK * (FinalCD / 100))) + ')';
	document.getElementById('buildDEF').innerText = FinalDEF + ' (' + Math.round((FinalDEF / (FinalDEF + 1200)) * 100) + '%)';
	document.getElementById('buildREC').innerText = FinalREC + ' (' + Math.round(FinalREC * 4.5) + ')';
	document.getElementById('buildCD').innerText = FinalCD + '%';
	document.getElementById('buildCR').innerText = FinalCR + '%';
  }
  window.addEventListener('load', 
  function() {
	let superc = document.getElementById('supercn').innerText; console.log(superc + 'algo');
    let superg = document.getElementById('supergn').innerText;
    if (superc !== 'undefined') {	document.getElementById('superc').style.display = 'none'; }
    else {document.getElementById('superc').style.display = 'block';};
    if (superg !== 'undefined') {	document.getElementById('superg').style.display = 'none'; }
    else{document.getElementById('superg').style.display = 'block';};
}, false); 
