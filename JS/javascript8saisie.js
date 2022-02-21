var btn6 = document.getElementById ("btn6");
btn6.addEventListener ("click", clickbtn6);
function clickbtn6 () {



var nom 
 
for (var i = 1; i > 0; i++ ) 
{
    nom = window.prompt("Saissisez le prenom N°" + i +"\n" + " ou clic sur Annuler pour arrêter la saisie." );


    //alert("prompt :"+nom+"-");
    console.log(nom)

    if (nom == "" || nom == " " || nom == null )
    break

    // if (nom == "" || nom == " " || nom == null )
    // break
    // else {
    //     nom = window.prompt("Saissisez le prenom N°" + i +"\n" + " ou clic sur Annuler pour arrêter la saisie." );
    //     console.log(nom);
    // } 
  
}







// while (nom == [a-z-A-Z])
// {
//     nom = window.prompt("Saissisez le prenom N°" + i +"\n" + " ou clic sur Annuler pour arrêter la saisie.");
//     i++;
// }
































}