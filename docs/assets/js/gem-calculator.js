function calculateGem() {
	//store data of inputs
	let gemqualitySet = document.getElementById("gemqualitySet").value;
	let gemqualityForm = document.getElementById("gemqualityForm").value;
	let gemqualityStar = document.getElementById("gemqualityStar").value;
	let gemqualityPlus = document.getElementById("gemqualityPlus").value;
	let Stat0 = document.getElementById("gemqualityStat0").value;
	let Procs0 = document.getElementById("gemqualityProcs0").value;
	let Stat1 = document.getElementById("gemqualityStat1").value;
	//let Procs1 = document.getElementById("gemqualityProcs1").value;
	let Stat2 = document.getElementById("gemqualityStat2").value;
	//let Procs2 = document.getElementById("gemqualityProcs2").value;
	let Stat3 = document.getElementById("gemqualityStat3").value;
	//let Procs3 = document.getElementById("gemqualityProcs3").value;
	let Stat4 = document.getElementById("gemqualityStat4").value;
	//let Procs4 = document.getElementById("gemqualityProcs4").value;

    //Print Missing Procs
    //let missinProcs = Procs0 - Procs1 - Procs2 - Procs3 - Procs4;
   //document.getElementById("missProcs").innerText = missinProcs;
    //Calcs for Sub ( - )
    let calcMissingProc = (4 - Procs0)*2;

    let calcMissingSubREST; if (Stat1 == 'RESTp') {calcMissingSubREST = 0
    } else if (Stat2 == 'RESTp') {calcMissingSubREST = 0
    } else if (Stat3 == 'RESTp') {calcMissingSubREST = 0
    } else if (Stat4 == 'RESTp') {calcMissingSubREST = 0 } else {calcMissingSubREST = 1};

    let calcMainStatFLAT; if (Stat0 == 'HPf') {calcMainStatFLAT = 3
    } else if (Stat0 == 'ATKf') {calcMainStatFLAT = 3
    } else if (Stat0 == 'DEFf') {calcMainStatFLAT = 3
    } else if (Stat0 == 'RECf') {calcMainStatFLAT = 3
    } else if (Stat0 == 'RESTp') {calcMainStatFLAT = 6} else {calcMainStatFLAT = 0};

    let calcMainHP; if (Stat0 == 'HPp') {calcMainHP = 4} else {calcMainHP = 0};
    let calcMainATK; if (Stat0 == 'ATKp') {calcMainATK = 1} else {calcMainATK = 0};
    let calcMainDEF; if (Stat0 == 'DEFp') {calcMainDEF = 4} else {calcMainDEF = 0};
    let calcMainREC; if (Stat0 == 'RECp') {calcMainREC = 1} else {calcMainREC = 0};
    let calcMainCD; if (Stat0 == 'CD') {calcMainCD = 1} else {calcMainCD = 0};
    let calcMainCR; if (Stat0 == 'CR') {calcMainCR = 1} else {calcMainCR = 0};
    
    let calcMissSubCR; if (Stat1 == 'CR') {calcMissSubCR = 0
    } else if (Stat2 == 'CR') {calcMissSubCR = 0
    } else if (Stat3 == 'CR') {calcMissSubCR = 0
    } else if (Stat4 == 'CR') {calcMissSubCR = 0} else {calcMissSubCR = 1};

    //let calcUndSub; if (Stat1 == 'CR') {calcUndSub = 0
   // } else if (Stat2 == 'CR') {calcUndSub = 0
   // } else if (Stat3 == 'CR') {calcUndSub = 0
   // } else if (Stat4 == 'CR') {calcUndSub = 0} else {calcUndSub = 1};
    
    let calcUndHP; if (Stat1 == 'HPp') {calcUndHP = 2} else if (Stat1 == 'HPf') {calcUndHP = 1
    } else if (Stat2 == 'HPp') {calcUndHP = 2} else if (Stat2 == 'HPf') {calcUndHP = 1
    } else if (Stat3 == 'HPp') {calcUndHP = 2} else if (Stat3 == 'HPf') {calcUndHP = 1
    } else if (Stat4 == 'HPp') {calcUndHP = 2} else if (Stat4 == 'HPf') {calcUndHP = 1} else {calcUndHP = 0};

    let calcUndATK; if (Stat1 == 'ATKp') {calcUndATK = 2} else if (Stat1 == 'ATKf') {calcUndATK = 1
    } else if (Stat2 == 'ATKp') {calcUndATK = 2} else if (Stat2 == 'ATKf') {calcUndATK = 1
    } else if (Stat3 == 'ATKp') {calcUndATK = 2} else if (Stat3 == 'ATKf') {calcUndATK = 1
    } else if (Stat4 == 'ATKp') {calcUndATK = 2} else if (Stat4 == 'ATKf') {calcUndATK = 1} else {calcUndATK = 0};

    let calcUndDEF; if (Stat1 == 'DEFp') {calcUndDEF = 2} else if (Stat1 == 'DEFf') {calcUndDEF = 1
    } else if (Stat2 == 'DEFp') {calcUndDEF = 2} else if (Stat2 == 'DEFf') {calcUndDEF = 1
    } else if (Stat3 == 'DEFp') {calcUndDEF = 2} else if (Stat3 == 'DEFf') {calcUndDEF = 1
    } else if (Stat4 == 'DEFp') {calcUndDEF = 2} else if (Stat4 == 'DEFf') {calcUndDEF = 1} else {calcUndDEF = 0};

    let calcUndCD; if (Stat1 == 'CD') {calcUndCD = 2
    } else if (Stat2 == 'CD') {calcUndCD = 2
    } else if (Stat3 == 'CD') {calcUndCD = 2
    } else if (Stat4 == 'CD') {calcUndCD = 2} else {calcUndCD = 0};

    let calcUndCR; if (Stat1 == 'CR') {calcUndCR = 2
    } else if (Stat2 == 'CR') {calcUndCR = 2
    } else if (Stat3 == 'CR') {calcUndCR = 2
    } else if (Stat4 == 'CR') {calcUndCR = 2} else {calcUndCR = 0};

    let calcUndREC; if (Stat1 == 'RECp') {calcUndREC = 2} else if (Stat1 == 'RECf') {calcUndREC = 1
    } else if (Stat2 == 'RECp') {calcUndREC = 2} else if (Stat2 == 'RECf') {calcUndREC = 1
    } else if (Stat3 == 'RECp') {calcUndREC = 2} else if (Stat3 == 'RECf') {calcUndREC = 1
    } else if (Stat4 == 'RECp') {calcUndREC = 2} else if (Stat4 == 'RECf') {calcUndREC = 1} else {calcUndREC = 0};

    //Calcs for ADD ( + )

    //General calc
    //let qualityG = 18 - gemqualityStar - calcMissingProc - calcMissingSubREST - calcMainStatFLAT + 0;
    let qualityA = 15 - gemqualityStar - calcMissingProc - calcMissingSubREST - calcMainStatFLAT - calcMainREC - calcMissSubCR - calcUndREC + calcMainATK + calcUndCD + calcUndATK;
    let qualityH = 15 - gemqualityStar - calcMissingProc - calcMissingSubREST - calcMainStatFLAT - calcMainATK - calcMainCR - calcMainCD - calcUndCD - calcUndCR + calcMainREC + calcUndREC + calcUndHP + calcUndDEF;
    let qualityAH = 15 - gemqualityStar - calcMissingProc - calcMissingSubREST - calcMainStatFLAT - calcMainREC - calcMainDEF - calcMainATK - calcMainCR - calcMainCD - calcMissSubCR - calcUndREC - calcUndATK + calcMainHP + calcUndHP;
    let qualityAD = 15 - gemqualityStar - calcMissingProc - calcMissingSubREST - calcMainStatFLAT - calcMainREC - calcMainHP - calcMainATK - calcMainCR - calcMainCD - calcMissSubCR - calcUndREC - calcUndATK + calcMainDEF + calcUndDEF;
    //document.getElementById("qualityG").innerText = qualityG;
    document.getElementById("qualityA").innerText = qualityA;
    document.getElementById("qualityH").innerText = qualityH;
    document.getElementById("qualityAH").innerText = qualityAH;
    document.getElementById("qualityAD").innerText = qualityAD;
    
    //initial 18? 
    // ------------
    //-Sub 2 per	Missing Substats
    //Sub 2 per	Undesired substats (like REC on an attacker)
    //-Sub 1	Missing REST (For all Class)
    //-Sub 1	Missing CR (only on DPS)
    //-Sub 3	flat mainstat
    //-Sub 6	Resist mainstat
    // +++++++++++++
    //Add 1	4procs Desired substats
    //Add 1	3procs REST or CR
    //Add 2	4procs REST or CR
    //ADD 1 overall	Set Completion
    //ADD 2 overall	RUIN, CONV, INT Set Completion

    //S rank	A rank	B rank	C rank	D rank	E rank F rank
    //20-18 	17-15	14-12	11-9	 8-6	 5-3    2-0
    //S+	S	S-	A+	A	A-
    //17	16	15	14	13	12

    //Show Gem img
    let gemIMG = gemqualitySet+gemqualityForm+gemqualityPlus+'.png';
	let starsIMG = gemqualityStar+'.png';
	
};