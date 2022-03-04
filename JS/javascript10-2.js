var btn15 = document.getElementById ("btn15");
btn15.addEventListener ("click", clickbtn15);
function clickbtn15 ()
{


  
// var phrase;

var test = prompt("saisissez une phrase");
var separateur = prompt ("saisis un separateur");
var n = prompt ("saisissez une position");

function strtok(str1, str2, n) 

{
   console.log(str1);   
   console.log(str2);
   console.log(n);

   // Méthode Marion
   var phrase = test.split(str2);
   console.log(phrase);
   return phrase[n-1];

   // // Ma méthode
   // var phrase = test.split(' ').join(str2);
   //  console.log(phrase);
   // var separateur = phrase.split(str2);
   // console.log(phrase);
   // var choisir = separateur.slice(n-1, n);
   // console.log(choisir);
   // return(choisir);

}


var resultat = strtok(test, separateur, n);
// console.log(phrase);
// alert(phrase); LA VARIABLE NE PASSE PAS (UNDEFINED) car dans le return
console.log(resultat);
alert(resultat);











}