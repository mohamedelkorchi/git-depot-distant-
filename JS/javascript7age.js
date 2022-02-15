var btn4 = document.getElementById ("btn4");
btn4.addEventListener ("click", clickbtn4);
function clickbtn4 () {

var annee = window.prompt ("Quelle est votre année de naisance ?");
annee = 2022 - annee

if ( annee <18)
{
    window.alert("vous avez " + annee + "\n" + " vous etes mineur");
}
else // rien mettre a coté
{
    window.alert("vous avez " + annee + "\n" + " vous etes majeur");
}




}