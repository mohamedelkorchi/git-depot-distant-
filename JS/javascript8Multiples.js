var btn9 = document.getElementById ("btn9");
btn9.addEventListener ("click", clickbtn9);
function clickbtn9 ()
{


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// METHODE LEA //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var c=prompt("Saisissez le nombre entier de votre choix :");
var stop=prompt("Saisissez le nombre de multiplication :");
var resultat = ""

for(i=1; i<=parseInt(stop); i++){
    console.log("Total : " + i + "*" + c + "=" + resultat);
    resultat = resultat + (i + "x" + c +"=" + c*i) +"\n";
}
alert(resultat);


















}