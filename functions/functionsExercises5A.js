// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

function citat() {
    var bazaCitata = ['Inteligencija bez ambicije je poput ptice bez krila. – Salvador Dali',
                    'Ambicija je poslednje utočište neuspehu. – Oskar Vajld',
                    'Žene koje teže da budu jednake muškarcima imaju nedostatak ambicije. – Merlin Monro',
                    'Moja ambicija je da u deset rečenica kažem šta drugi kažu u celoj knjizi. – Fridrih Niče',
                    'Akcije trebaju biti primerene sposobnostima ljudi koji ih trebaju realizovati. – Piter Draker',
                    'Ko nema krila i laktovima se služi da poleti. – Lorens Piter'];
    return bazaCitata[Math.floor(Math.random() * (bazaCitata.length-1))]
}

console.log(citat())

// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

function daLiJePrestupna(godina) {
    if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0)  {
        return 'Godina je prestupna';
    } else {
        return 'Godina nije prestupna';
    }
}

console.log(daLiJePrestupna(2000));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

function slova(rec){
    var countSamo = rec.match(/[aeiou]/gi).length;
    var countSug = rec.match(/(?![aeiou])[a-z]/gi).length;
    
    return 'Ima '+countSamo+' samoglasnika i '+countSug+' suglasnika.';
}

console.log(slova('neka recenica'));

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

function tipPodatka (niz) {
    output=[];
    for (i=0; i<niz.length; i++){
        output.push(typeof niz[i]);
    }
    return output;
}

console.log(tipPodatka(['rec',3478,null,undefined,Infinity,'opet rec']));

// 5. Kreirati funkciju koja prihvata niz stringova kao ulazni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] => rezultat [“pp”].

// function cleanUp(niz){
// check=[];
// output=[];
// for (i=0; i<niz.length; i++){
//     check.push(parseFloat(niz[i]));
// } 
// for (i=0; i<niz.length; i++){
// if (isNaN(check[i])==true){
//     output.push(niz[i]);
// }}
// return output;
// }
// console.log(cleanUp(['12bb','pp', 'as23s', '00sd']));

function cleanUp(niz) {
    output=[];
    for (i=0; i<niz.length; i++){
        if (niz[i].match(/\d/g)==null) {
            output.push(niz[i]);
        } 
    }
    return output;
    }

console.log(cleanUp(['12bb','pp', 'as23s', '00sd','hh','hh6']));


// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
// Primer 1: 'Computer' => [8, 'C', 'r', 'pu', 'not found'] ,
// Primer 2: “Science' => [7, 'S', 'e', 'e', '@ index 5']

function analizaStringa(string) {
    output = [(string.length), string[0], string[(string.length - 1)]];
    if (string.length % 2 == 0) {
        var a = string[(string.length / 2) - 1] + string[string.length / 2];
        output.push(a);
    } else {
        output.push(string[Math.floor(string.length / 2)]);
    }
    var postoji = false;
    for (i = 2; i < string.length; i++) {
        if (string[i] == string[1]) {
            var pozicija = i;
            postoji = true;
            output.push('@ Index ' + pozicija);
            break;
        }
    }
    if (postoji == false) {
        output.push('not found')
    }
    return output;
}

console.log(analizaStringa('Kafica'));

// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.

function checkDouble(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        var j;
        for (j = 0; j < array.length; j++)
            if (i != j && array[i] == array[j])
                break;
        if (j == array.length)
            output.push(array[i]);
    }
    return output;
}

console.log(checkDouble([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// 8.Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]

function mdArray(array,n){
    output=[];
    for (var i = 0; i < array.length; i++){
        for (var j=0; j<n; j++){
            output[i][j]=array[i],array[i+1];
        }
    }

    return output;
}

console.log(mdArray([2, 3, 4, 5],2));

function mdArray(array,n) {
    output = [];
    for (var i = 0; i < Math.floor(array.length/n); i++) {
        var row = []; // create row
        output.push(row);
    }
    for (var j=0; j<array.length; j++){
        for (var k=0; k<n; k++){
            output
        }
    }
    return output;
}

console.log(mdArray([2, 3, 4, 5],2));



function NestedArray(x,y) {
    board = [];
    for (var i = 0; i < x; i++) {
        var arr = []; // create row
        board.push(arr);
        for (var j = 0; j < y; j++) {
           arr.push([]); // create and push cell to row
        }
    }
    console.log(board);
}

NestedArray(5,5);