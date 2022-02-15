
// window.alert("bonjour");
// window.alert("chaine de caractères");
// window.alert("bonjour" + " " + "chaine de caractères");

// var rep1 = window.prompt (" votre nom");
// var rep2 = window.prompt ("votre couleur");

// if (window.confirm ("continuer ?") == true )
// {
  
// }

// console.log("coucou");
var btn1 = document.getElementById ("btn1");
btn1.addEventListener ("click", clickbtn1);
function clickbtn1 () {

var nom = window.prompt(" quel est votre nom ?");
var prenom = window.prompt("quel est votre prenom ?");

if (window.confirm ("etes vous un hommes ? ") ==true )
{
    alert("Bonjour Monsieur " + nom + " " + prenom + "\n" + "Bienvenue sur notre site Internet ! ")
}
    else  {
        alert("Bonjour Madame " + nom + " " + prenom + "\n" + "Bienvenue sur notre site Internet ! ")
    };
};
//console.log("Bonjour Monsieur " + nom + " " + prenom );
//alert("Bonjour Monsieur " + nom + " " + prenom + "\n" + "Bienvenue sur notre site Internet ! ") ;