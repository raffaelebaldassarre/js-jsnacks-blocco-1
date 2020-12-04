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

    var squadre = [
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

    ]

    // console.log(squadre);
/*     for (var key in squadre) {
        console.log(squadre[key]);  
        
    } */

    /* Generare numeri random al posto degli 0 nelle proprietà:
    punti fatti e falli subiti */

    for(var i = 0; i < squadre.length; i++){
        squadre[i].puntiFatti = Math.floor((Math.random() * 10) + 1);
        squadre[i].falliSubiti = Math.floor((Math.random() * 10) + 1);
    }
  
    for (var key in squadre) {
        console.log(squadre[key]);
    }


})