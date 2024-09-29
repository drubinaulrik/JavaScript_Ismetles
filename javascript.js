function szamitas() {
    let hossz = parseFloat(document.getElementById('hossz').value);
    let szelesseg = parseFloat(document.getElementById('szelesseg').value);
    let magassag = parseFloat(document.getElementById('magassag').value);

    let felszin = 2 * (hossz * szelesseg + szelesseg * magassag + magassag * hossz);
    let terfogat = hossz * szelesseg * magassag;

    document.getElementById('felszin').textContent = felszin.toFixed(2);
    document.getElementById('terfogat').textContent = terfogat.toFixed(2);
}

function szamitasMasodpercek() {
    let aktualisOrak = 14;
    let aktualisPercek = 34;
    let aktualisMasodpercek = 42;

    let masodpercekEgyNapban = 24 * 60 * 60;
    let elteltMasodpercek = (aktualisOrak * 60 * 60) + (aktualisPercek * 60) + aktualisMasodpercek;
    let hatralevoMasodpercek = masodpercekEgyNapban - elteltMasodpercek;

    document.getElementById('hatralevoMasodpercek').textContent = hatralevoMasodpercek;
}

function szamitasBMI() {
    let tomeg = parseFloat(document.getElementById('tomeg').value);
    let magassag = parseFloat(document.getElementById('magassagBMI').value);

    let bmi = tomeg / (magassag * magassag);

    document.getElementById('bmi').textContent = bmi.toFixed(2);
}

function szamitasOsztalyzat() {
    let pontszam = parseFloat(document.getElementById('pontszam').value);
    let osztalyzat;

    if (pontszam >= 85) {
        osztalyzat = 'A';
    } else if (pontszam >= 70) {
        osztalyzat = 'B';
    } else if (pontszam >= 55) {
        osztalyzat = 'C';
    } else if (pontszam >= 45) {
        osztalyzat = 'D';
    } else {
        osztalyzat = 'F';
    }

    document.getElementById('osztalyzat').textContent = osztalyzat;
}

function ellenorizSzokoev() {
    let ev = document.getElementById("ev").value;
    let eredmeny = "";

    if ((ev % 4 === 0 && ev % 100 !== 0) || (ev % 400 === 0)) {
        eredmeny = "Igen";
    } else {
        eredmeny = "Nem";
    }

    document.getElementById("eredmeny").innerText = eredmeny;
}

function jatek() {
    let jatekos1 = parseInt(document.getElementById("jatekos1").value);
    let jatekos2 = parseInt(document.getElementById("jatekos2").value);
    let eredmeny = "";

    if (jatekos1 === jatekos2) {
        eredmeny = "Döntetlen";
    } else if ((jatekos1 === 1 && jatekos2 === 3) || (jatekos1 === 2 && jatekos2 === 1) || (jatekos1 === 3 && jatekos2 === 2)) {
        eredmeny = "Az első játékos nyert";
    } else {
        eredmeny = "A második játékos nyert";
    }

    document.getElementById("eredmenyJatek").innerText = eredmeny;
}

function kiirBetuk() {
    let szoveg = document.getElementById("szoveg").value;
    let betuk = "";

    for (let i = 0; i < szoveg.length; i++) {
        betuk += szoveg[i] + "\n";
    }

    document.getElementById("betuk").innerText = betuk;
}

function szamitasFaktorialis() {
    let szam = parseInt(document.getElementById("szam").value);
    let faktorialis = 1;

    for (let i = 1; i <= szam; i++) {
        faktorialis *= i;
    }

    document.getElementById("faktorialis").innerText = faktorialis;
}

function szamjegyAtlag() {
    let szam = document.getElementById('szam').value;
    let osszeg = 0;
    for (let i = 0; i < szam.length; i++) {
        osszeg += parseInt(szam[i]);
    }
    let atlag = osszeg / szam.length;
    document.getElementById('atlag').innerText = atlag;
}

function negyzetRajzolas() {
    let meret = document.getElementById('meret').value;
    let negyzet = '';
    for (let i = 0; i < meret; i++) {
        for (let j = 0; j < meret; j++) {
            if (i === j || i + j === parseInt(meret) - 1) {
                negyzet += '%';
            } else {
                negyzet += ' ';
            }
        }
        negyzet += '\n';
    }
    document.getElementById('negyzet').innerText = negyzet;
}

function betuKiiras() {
    let szoveg = document.getElementById('szoveg').value;
    let betuk = '';
    for (let i = 0; i < szoveg.length; i++) {
        if (!szoveg[i].match(/[a-zA-Z]/)) {
            break;
        }
        betuk += szoveg[i];
    }
    document.getElementById('betuk').innerText = betuk;
}

function szamokKiirasa() {
    let szamok = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            szamok += i + ', ';
        }
    }
    document.getElementById('szamok').textContent = szamok.slice(0, -2); 
}

function kiirOsztok() {
    let szam = 10;
    let eredmeny = '';
    while (szam <= 30) {
        let osztok = [];
        let i = 1;
        while (i <= szam) {
            if (szam % i === 0) {
                osztok.push(i);
            }
            i++;
        }
        eredmeny += `${szam}: ${osztok.join(', ')},\n`;
        szam++;
    }
    document.getElementById('osztok').textContent = eredmeny;
}

function fizzBuzz() {
    let eredmeny = '';
    let szam = 1;
    while (szam <= 100) {
        if (szam % 3 === 0 && szam % 5 === 0) {
            eredmeny += 'fizzbuzz, ';
        } else if (szam % 3 === 0) {
            eredmeny += 'fizz, ';
        } else if (szam % 5 === 0) {
            eredmeny += 'buzz, ';
        } else {
            eredmeny += szam + ', ';
        }
        szam++;
    }
    document.getElementById('kimenet').textContent = eredmeny.slice(0, -2); 
}




