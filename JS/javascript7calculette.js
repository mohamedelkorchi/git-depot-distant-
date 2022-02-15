var btn5 = document.getElementById ("btn5");
btn5.addEventListener ("click", clickbtn5);
function clickbtn5 () {

var n1 = window.prompt ("veuillez saisir un premier nombre"); // prompt pour declarer une valeur en type caractere 
var n2 = window.prompt (" veuillez saisir un second nombre");
var operateur = window.prompt (" saisisez un operateur");
//var resultat 
console.log(operateur);

// resultat = parseInt(resultat,10);
n2 = parseInt (n2,10);
n1 = parseInt (n1,10);

while (operateur != "+" && operateur!= "-" && operateur != "*" && operateur!= "/")
{
    operateur = window.prompt("veuillez saisir un operateur correct svp");
    console.log(operateur);
}

// resultat = (n1 + operateur + n2); 
// alert(resultat);

if (operateur== "+") 
{
    alert(n1+n2);
    console.log(n1+n2);
}

if (operateur== "-")
{
    alert(n1-n2);
    console.log(n1-n2);
}

if (operateur== "*")
{
    alert(n1*n2);
    console.log(n1*n2);
}

if ( operateur== "/" && n2==0)
{
    alert("impossible de diviser par 0");
}
else
{
    alert(n1/n2);
    console.log(n1/n2);
}



//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// BON ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// if (operateur== "/" && n2>0)
// {
//     alert(n1/n2);
//     console.log(n1/n2);
// }
// else 
// {
//     alert("impossible de divisier par 0");
// }

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////erreur///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// else if (operateur== "/")
// {
//     if (nb2==0)
//     {
//         alert("impossible de diviser par 0");
        
//     }
//     // alert(n1/n2);
//     // console.log(n1/n2);

// else 
// {
//     alert(n1/n2);
//     console.log(n1/n2);
// }
// }
































///////////////////////// methode differente pour mettre une base 10 ( numerique ) au prompt ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//parseInt (n1,n2,10);
// parseInt (n1,10);
// parseInt (n2,10);
//alert(parseInt(n1) + parseInt (n2) );









    
}