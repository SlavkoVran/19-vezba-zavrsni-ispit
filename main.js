const unos = document.getElementById("unos");
const UnosPrikazPodataka = document.getElementById('UnosPrikazPodataka');
const sacuvaj = document.getElementById("sacuvaj");
const prikaz = document.getElementById("prikaz");

function Student(ime, test_1, test_2, odbrana_projekta) {
    this._imeIPrezime = ime;
    this._test1 = test_1;
    this._test2 = test_2;
    this._projekat = odbrana_projekta;
}

Student.prototype.ukupnoPoena = function () {
    ukupno = Number(this._test1 + this._test2 + this._projekat );
    return ukupno;
}

Student.prototype.ispisImena = function () {
    return this._imeIPrezime;
}
Student.prototype.ispisTest1 = function () {
    return this._test1;
}
Student.prototype.ispisTest2 = function () {
    return this._test2;
}
Student.prototype.ispisOdbranaProjekta = function () {
    return this._projekat;
}

niz = [];

function dodajStudenta() {
    
    let ime = document.getElementById("ime").value;
    let test_1 = Number(document.getElementById("unosTest1").value );
    let test_2 = Number(document.getElementById("unosTest2").value );
    let odbrana_projekta = Number(document.getElementById("odbranaProjekta").value );

    if (!validacija(ime, test_1, test_2, odbrana_projekta)) {
        // window.alert("niste uneli podatke")
        return;
    }
    let noviStudent = new Student(ime, test_1, test_2, odbrana_projekta);
   
    niz.push(noviStudent);
    niz[niz.length-1].ukupnoPoena();

    // console.log(x);

}

function prikaziStudenta () {
    var tableHtml = '<table class="table table-striped"><tr><th>Ime i prezime</th><th>Test 1</th><th>Test 2</th><th>Odbrana projekta</th><th>Ukupno bodova</th></tr>';
    niz.sort(function (w1, w2) { return w2.ukupnoPoena() - w1.ukupnoPoena() });
    for (var i = 0; i < niz.length; i++) {
        tableHtml += '<tr><td>' + niz[i].ispisImena() + '</td>'
            + '<td>' + niz[i].ispisTest1() + '</td>' + '<td>' + niz[i].ispisTest2() + '</td>' + '<td>' + niz[i] .ispisOdbranaProjekta() + '</td>' + '<td id="boja">' + niz[i].ukupnoPoena() + '</td></tr>';
            
    }
    tableHtml += '</table>';
    document.getElementById('prikazS').innerHTML = tableHtml;

    console.log(tableHtml)

}





function validacija(vime, vtest1, vtest2, vprojekat) {
    if (vime.length == 0 || vtest1.length == 0 || vtest2.length == 0 || vprojekat.length == 0) {
        return false;
    }
    let n = Number(vtest1);
    let m = Number(vtest2);
    let v = Number(vprojekat);

    document.getElementById('p1').innerHTML = '';
    document.getElementById('p2').innerHTML = '';
    document.getElementById('p3').innerHTML = '';
    

    if (isNaN(n) || 26 <= n) {
        document.getElementById('p1').innerHTML = 'Unestite broj u opsegu od 0 do 25!';
        return false;
    }
    if (isNaN(m) || 26 <= m ) {
        document.getElementById('p2').innerHTML = 'Unestite broj u opsegu od 0 do 25!';
        return false;
    }
    if (isNaN(v) || 51 <= v  ) {
        document.getElementById('p3').innerHTML = 'Unestite broj u opsegu od 0 do 50!';
        return false;
    }
    document.getElementById('p4').innerHTML = 'Uspesno ste sacuvali podatke';
    return true;
}


sacuvaj.addEventListener('click', dodajStudenta);
prikaz.addEventListener('click', prikaziStudenta);


unos.addEventListener('click', function () {
    UnosPrikazPodataka.classList.toggle('hidePrikaz');
});










