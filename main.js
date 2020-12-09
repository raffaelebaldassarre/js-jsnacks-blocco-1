$(function() { 

    /* Creare un oggetto palla che abbia le seguenti proprietà.
    Nome = palla
    Peso = 10 */

    // var palla = {
    //     nome: "palla",
    //     peso:10
    // }

    //console.log(palla);

   /*  Attraverso un prompt dare la possibilità all’utente di
    modificare il peso della palla. */
    //var pesoUser = Number(prompt("Inserisci il peso al pallone"));
    
    // palla.peso = pesoUser + " kg";

    // console.log(palla);

   /*  Creare un array di oggetti: ogni oggetto descriverà una bici
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore. */

/*     var bici = [
        {
            nome: "Ktm",
            peso:10
        },
        {
            nome: "Graziella",
            peso:15
        },
        {
            nome: "Bmx",
            peso:61
        }

    ];

    var minPeso = bici[0].peso;
    for(var i=0; i<bici.length;i++){
        if(bici[i].peso < minPeso){
            minPeso = bici[i];
        } else{
            minPeso = bici[0].peso
        }
    }
    console.log(minPeso); */

    /* Creare un oggetto che rappresenti un triangolo rettangolo,
    con le seguenti proprietà: base e altezza.
    Calcolare perimetro e area. */

/*     var triangolo = {
        base : 20,
        altezza : 10 
    }

    var base = triangolo.base;
    var altezza = triangolo.altezza;
    var ipotenusa = Math.floor(Math.sqrt(base**2 + altezza**2));
    var perimetro = "Il perimetro è " + (base + altezza + ipotenusa);
    var area = "L'area è " + ((base * altezza)/2);

    console.log(perimetro, area); */

    /* Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà:
    nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre
    saranno tutte settate a 0. */

/*     var squadre = [
        {
            nome : "milanoCitta",
            puntiFatti : 0,
            falliSubiti : 0
        },
        {
            nome : "virtusEntella",
            puntiFatti : 0,
            falliSubiti : 0
        },
        {
            nome : "palermo",
            puntiFatti : 0 ,
            falliSubiti : 0
        },
        {
            nome : "lodigiano",
            puntiFatti : 0 ,
            falliSubiti : 0
        },

    ] */

    // console.log(squadre);
/*     for (var key in squadre) {
        console.log(squadre[key]);  
        
    } */

    /* Generare numeri random al posto degli 0 nelle proprietà:
    punti fatti e falli subiti */
    
 /*    for(var i = 0; i < squadre.length; i++){
        squadre[i].puntiFatti = Math.floor((Math.random() * 10) + 1);
        squadre[i].falliSubiti = Math.floor((Math.random() * 10) + 1);
    }
  
    for (var key in squadre) {
        console.log(squadre[key]);
    } */

    ///////JSnacks Blocco 5///////

    ///////JSnack 1//////

    // Crea 10 oggetti che rappresentano una zucchina,
    // indicando per ognuna varietà, peso e lunghezza.
    // Calcola quanto pesano tutte le zucchine.

/*     var zucchina1 = {
        varietà : "ZucchinoNeroDiMilano",
        peso : 0.8,
        lunghezza" : 20
    };
    var zucchina2 = {
        varietà : "ZucchinoRomanesco",
        peso : 1.3,
        lunghezza" : 18
    };
    var zucchina3 = {
       varetà : "ZucchinoOrtolanoDiFaenza",
       peso : 1.2,
       lunghzza : 30
    };
    var zucchina4 = {
        varietà : "ZucchinaLungaFiorentina",
        peso : 1.5,
        lunghezza : 25
    };
    var zucchina5 = {
        varietà : "ZucchinoSiciliano",
        peso : 2,
        lunghezza : 32
    };
    var zucchina6 = {
        varietà : "ZucchinaStriataDiNapoli",
        peso : 0.9,
        lunghezza : 28
    };
    var zucchina7 = {
        varietà : "ZucchinaBiancaTriestina",
        peso : 0.6,
        lunghezza : 18
    };
    var zucchina8 = {
        varietà : "ZucchinaRigataPugliese",
        peso : 0.7,
        lunghezza : 20
    };
    var zucchina9 = {
        varietà : "ZucchinoTondoDiPiacenza",
        peso : 1,
        lunghezza : 10
    };
    var zucchina10 = {
        varietà : "ZucchinoTondoDiNizza",
        peso : 0.6,
        lunghezza : 10
    };

    console.log("Il peso complessivo delle zucchine è " + (zucchina1.peso+zucchina2.peso+zucchina3.peso+zucchina4.peso+zucchina5.peso+zucchina6.peso+zucchina7.peso+zucchina8.peso+zucchina9.peso+zucchina10.peso)+ " kg"); */


    ///////JSnack 2//////
    /* Scrivi una funzione che accetti una stringa come
    argomento e la ritorni girata (es. Ciao -> oaiC) */

/*     var textUser = prompt("Type your text and I reverse it for you");
    var reverse;
    function reverseMyText (textReverse){
        reverse = textUser.split("").reverse().join("");
        
        return reverse
    }
    reverseMyText(reverse)
    console.log(reverse); */
    

    ///////JSnack 3///////
    /* Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano
    meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi
    di zucchine */

 /*    var zucchine = [
    {
        varietà : "ZucchinoNeroDiMilano",
        peso : 0.8,
        lunghezza : 13
    },
    {
        varietà : "ZucchinoRomanesco",
        peso : 1.3,
        lunghezza : 12
    },
    {
    varietà: "ZucchinoOrtolanoDiFaenza",
       peso : 1.2,
       lunghezza : 30
    },
    {
        varietà : "ZucchinaLungaFiorentina",
        peso : 1.5,
        lunghezza : 13
    },
    {
        varietà : "ZucchinoSiciliano",
        peso : 2,
        lunghezza : 32
    },
    {
        varietà : "ZucchinaStriataDiNapoli",
        peso : 0.9,
        lunghezza : 28
    },
    {
        varietà : "ZucchinaBiancaTriestina",
        peso : 0.6,
        lunghezza : 18
    },
    {
        varietà : "ZucchinaRigataPugliese",
        peso : 0.7,
        lunghezza : 20
    },
    {
        varietà : "ZucchinoTondoDiPiacenza",
        peso : 1.1,
        lunghezza : 10
    },
    {
        varietà : "ZucchinoTondoDiNizza",
        peso : 0.6,
        lunghezza : 10
    } 
    ]   

    var more15Cm = [];
    var less15Cm = [];
 */
/*     for (var i = 0; i < zucchine.length; i++) {
        if(zucchine[i].lunghezza > 15){
            more15Cm.push(zucchine[i])
        }else{
            less15Cm.push(zucchine[i])
        }
    }
    console.log(more15Cm);
    console.log(less15Cm); */

/*     function minoreMaggiore (minore,maggiore){
        for (var i = 0; i < x.length; i++) {
            if(x[i].lunghezza > n){
                maggiore.push(x[i])
            }else{
                minore.push(x[i])
            }
        }
    }
    var x = zucchine;
    n=15;
    minoreMaggiore(more15Cm,less15Cm)
    console.log(more15Cm,less15Cm);
         */
/*     var pesoTotMore15Cm = 0;   
    for (var j = 0; j < more15Cm.length; j++){
        pesoTotMore15Cm += more15Cm[j].peso;
    }
    console.log(pesoTotMore15Cm + " kg"); */

 /*    var pesoTotMore15Cm = 0;
    for (var key in more15Cm) {
        pesoTotMore15Cm += more15Cm[key].peso;
      }
    console.log(pesoTotMore15Cm + " kg"); */
    
/*     var pesoTotLess15Cm = 0;   
    for (var k = 0; k < less15Cm.length; k++){
        pesoTotLess15Cm += less15Cm[k].peso;
    }
    console.log(pesoTotLess15Cm + " kg"); */

/*     var pesoTotLess15Cm = 0;
    for (var key in less15Cm) {
        pesoTotLess15Cm += less15Cm[key].peso;
      }
    console.log(pesoTotLess15Cm + " kg"); */

    ///////////JSnack 4////////////
    /* Scrivi una funzione che fonda due array (con lo stesso
    numero di elementi) prendendo alternativamente gli
    elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

   /*  var letters = ["a","b","c","d","e","f"];
    var numbers = [1,2,3,4,5,6];
    var lettersNumbers = [];

        function joinAlternative(array1,array2){
        var i = 0;
        while(lettersNumbers.length < (array1.length + array2.length)){
        lettersNumbers.push(letters[i],numbers[i]);
        i++
       }
    }
    joinAlternative(letters,numbers);

    console.log(lettersNumbers); */

    //////////////JSnack 5////////////////////
    /* Scrivi una funzione che accetti tre argomenti:
    un array e due numeri (“a” più piccolo di “b” e “b” grande al
    massimo quanto il numero di elementi dell’array).
    La funzione ritornerà un nuovo array con i valori che
    hanno la posizione compresa tra “a” e “b” */

    var myArray = [1,"macchina",3,"casa","hotel",6,"fabio","boolean","Roma",10];
    var newArray = [];
    var a = 5;
    var b = 8;

    function myFunction (a,b,array){
        if(a<b && b<=myArray.length){
            for(var i=a;i<b;i++){
                newArray.push(array[i]);
            }
        }
    }

    myFunction(a,b,myArray)
    console.log(newArray);

    







})