

var tableau = [];

while (true)
{

    var texte = parseInt(prompt("Saisissez un nombre"));
    console.log(texte);
    var nbr = tableau.length;
    if(texte != null && texte > 0)
    {
        tableau.push(texte);
    }
    else
    {
        break
    }
    // if (texte == 0 || texte == null)
    // {
    //     break
    // }
}

function moyenne(moy, ArrayLen)
{
    //ArrayLen = tableau.length;
    return moy / ArrayLen;
}
//console.log(moyenne);

function sommes(tab)
{
console.log(tab)

    var i=0;
    var somme =0;
    tableauTaille = tab.length;
 while(i<tableauTaille)
 {
    somme = somme + tab[i++];
    //  parseInt pour le texte ligne 12, si il est pas mis je dois changer le calcul en faisant  somme = somme + tab[i];
    // i++;
    
 }
 return somme;
}

var total = sommes(tableau);
console.log("Total = " + total);

let longueur = tableau.length;
var a = moyenne(total, longueur);
console.log("Moyenne = " + a);
// var b = sommes(tab)
// console.log(texte)
// console.log("La somme du tableau est de : "+b)
// console.log("La moyenne du tableau est de : " +a);


// console.log(somme);
console.log(tableau);
console.log("le tableau contient  "+nbr+" elements");
alert("le tableau contient  "+nbr+" elements");





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// METHODE THOMAS /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let tab = [];
// let numbers;

//   while(numbers != 0)
//   {
//       let numbers =parseInt(prompt("Saisissez une valeur"));
//     //   tab.push(numbers);
//       if(numbers == 0){
//         // alert("Vous avez saisi 0")
//         break;
//     }tab.push(numbers);
//   };
// function moyenne(tab){
//     var i=0;
//     var somme =0;
//     tableauTaille = tab.length;
//  while(i<tableauTaille){
//      somme = somme + tab[i++];
//  }
//  return somme / tableauTaille;
 
// }
// function sommes(tab){
//     var i=0;
//     var somme =0;
//     tableauTaille = tab.length;
//  while(i<tableauTaille){
//      somme = somme + tab[i++];
//  }
//  return somme;
// }
// var a = moyenne(tab)
// var b = sommes(tab)
// console.log(numbers)
// console.log("La somme du tableau est de : "+b)
// console.log("La moyenne du tableau est de : " +a);
// console.log("Le tableau fait une taille de : "+ tableauTaille);


