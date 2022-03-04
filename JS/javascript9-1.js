var btn11 = document.getElementById ("btn11");
btn11.addEventListener ("click", clickbtn11);
function clickbtn11 ()
{


    ////////////////////////////////////// ERREUR ///////////////////////////////////////

// var tableau = [];

// while (true)
// {
//     var texte = prompt ("Veuillez saisir une valeur");
//     if (texte == "" || texte == " " )
//         break

// }
// console.log(tableau);
// alert(tableau);







var tableau = [];
// var nb ici c'est mort /// 

while (true)
{
    var texte = prompt ("Veuillez saisir une valeur");
   // var nb = texte.length;
    var nb = tableau.length;
    if (texte != "" )
    {
        tableau.push(texte);
    }
        else
        {
            break;
        }
        if (texte == null)
        {
            break;
        }
}
console.log(tableau);
//alert(tableau);
//console.log(nb);
console.log("le tableau contient  "+nb+" elements");
alert("le tableau contient  "+nb+" elements");

























    

}