const värvid = [
    "#B4DBF6",
    "#AEAFDD",
    "#B59FD3",
    "#CCA1D3",
    "#EFA7D1",
    "#FFA3C0",
    "#FFA58B",
    "#FFDB9C",
    "#F4FDAF",
    "#CAEEAC",
    "#B8E8B2",
    "#BCE9D5"
];

// Käivitatakse siis, kui lehekülg laaditakse
function main() {
    // Loome algul uue tühja tabeli
    uusTabel([]);

    // Ridade lisamise näited (kustuta pärast ära)
    uusRida(["A", "A"], ["A", "2"]);
    uusRida(["A", "A", "B", "B", "B"], ["B", "3"]);
    uusRida(["-", "-", "B", "B", "B"], ["A", "-"]);
    uusRida(["C", "C", "B", "B", "B", "C", "C"], ["C", "4"]);
    arvutus(0.5, 0.5714);
}

window.addEventListener("load", main);


// Loob uue tabeli
function uusTabel() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "";
    let rida = tabel.insertRow();
    rida.insertCell();

    for (let i = 0; i < 50; i++) {
        rida.insertCell().innerHTML = "&nbsp;";
    }

    document.getElementById("arvutused").innerHTML = "";

}


// Loob uue rea tabelisse vastavalt järjendile
function uusRida(järjend, käsk) {
    let tabel = document.getElementById("tabel");
    let rida = tabel.insertRow();
    rida.insertCell().innerHTML = `Samm ${tabel.rows.length - 1} (${käsk})`;
    for (let fail of järjend) {
        let lahter = rida.insertCell();
        if (fail !== "-") {
            lahter.innerHTML = fail;
            lahter.style.backgroundColor = värvid[fail.charCodeAt(0) % värvid.length];
        } else {
            lahter.innerHTML = "&nbsp;";
        }

    }
    for (let i = 0; i < 50 - järjend.length; i++) {
        rida.insertCell().innerHTML = "&nbsp;";
    }
}

// Lisab teksti arvutuste kasti vastavalt antud
// Argumendid võiksid olla ujukomaarvud 0 kuni 1
function arvutus(fragFailSuhe, fragRuumSuhe) {
    fragFailSuhe = (fragFailSuhe * 100).toFixed(2);
    fragRuumSuhe = (fragRuumSuhe * 100).toFixed(2);
    document.getElementById("arvutused").innerHTML =
        `Allesjäänud failidest on fragmenteerunud ${fragFailSuhe}%. 
         Fragmenteerunud failidele kuulub ${fragRuumSuhe}% kasutatud ruumist.`;
}


// Käivitatakse siis, kui "Käivita" nupule vajutatakse
function vajutus() {
    // Leiame valitud järjendi
    let järjend = document.querySelector("input[name=\"järjend\"]:checked").value;
    if (!järjend) {
        järjend = document.getElementById("endaoma").value.trim();
    }

    // Teeme järjendisõnest tähepaari järjendi
    // nt "A,2;B,3;A,-;C,4" => [["A", "2"], ["B", "3"], ["A", "-"], ["C", "4"]]
    järjend = järjend.split(";").map(i => i.split(","));

    uusTabel();
    document.getElementById("arvutused").innerHTML = "Sa unustasid arvutusi teha!";

    // Jooksutame algoritmi
    algoritm(järjend);
}


// Edu sellega
// Järjend tuleb sisse kujul [["A", "2"], ["B", "3"], ["A", "-"], ["C", "4"]]
// Peaks kasutama uusRida() ja arvutus()
function algoritm(järjend) {

}
