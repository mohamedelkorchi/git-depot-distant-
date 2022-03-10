
document.getElementById("formulaire").addEventListener("submit", function(event)
 {
var societe = document.getElementById("societe").value;
var contacter = document.getElementById("contacter").value;
var adresse = document.getElementById("adresse").value;
var cp = document.getElementById("cp").value;
var ville = document.getElementById("ville").value;
var email = document.getElementById("email").value;
var telephone = document.getElementById("telephone").value;


var messageErreur = ""
console.log(messageErreur);

// event.preventDefault(); //à retirer quand fini

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// SOCIETE //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

    let societeFiltre = new RegExp("^[a-zA-Z]+$");
    var societe = document.getElementById("societe");
    console.log(societe);

    var testsociete = societeFiltre.test(document.getElementById("societe").value);
    console.log(testsociete);

    if(societe.value == "")
    {
        messageErreur = messageErreur +  "Saisissez le nom de votre société.";
        // event.preventDefault() ;
    }
    else if (testsociete != true)
    {
        messageErreur = messageErreur +  "Saisissez correctement le nom de votre société.";

    }

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// PERSONNE A CONTACTER ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

    let contacterFiltre = new RegExp("^[a-zA-Z]+$");
    var contacter = document.getElementById("contacter");
    console.log(contacter.value);

    var testcontacter = contacterFiltre.test(document.getElementById("contacter").value);
    console.log(testcontacter);

    if(contacter.value == "")
    {
        messageErreur = messageErreur +  "\nSaisissez le nom de la personne à contacter svp.";
        // event.preventDefault();
    }
    else if (testcontacter != true)
    {
        messageErreur = messageErreur +  "\nSaisissez correctement le nom de la personne à contacter."
    }

// ////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////// ADRESSE DE L'ENTREPRISE ///////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

    let adresseFiltre = new RegExp("^[a-zA-Z]+$");
    var adresse = document.getElementById("adresse");
    console.log(adresse.value);

    var testadresse = adresseFiltre.test(document.getElementById("adresse").value);
    console.log(testadresse);

    if(adresse.value == "")
    {
        messageErreur = messageErreur +  "\nSaisissez l'adresse de l'entreprise svp !";
        // event.preventDefault();    
    }
    else if (testadresse != true)
    {
        messageErreur = messageErreur +  "\nSaisissez correctement l'adresse de l'entreprise !"
    }

// ////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////// CODE POSTAL ///////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

let cpFiltre = new RegExp("^[0-9]{5}$");
var cp = document.getElementById("cp");
console.log(cp.value);

var testcp = cpFiltre.test(document.getElementById("cp").value);
console.log(testcp);

if(cp.value == "")
{
    messageErreur =  messageErreur + "\nSaisissez votre code postal à 5 chiffres.";
    // event.preventDefault();    
}    
else if (testcp != true)
{
    messageErreur = messageErreur +  "\nSaisissez correctement votre code postal à 5 chiffres."
}

// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////// VILLE ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

let villeFiltre = new RegExp("^[a-zA-Z]+$");
var ville = document.getElementById("ville");
console.log(ville.value);

var testville = villeFiltre.test(document.getElementById("ville").value);
console.log(testville);

if(ville.value =="")
{
    messageErreur = messageErreur +  "\nSaisissez  le nom de votre ville !";
    // event.preventDefault();    
}
else if (testville != true)
{
    messageErreur = messageErreur + "\nSaisissez correctement le nom de votre ville !"
}
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////// EMAIL ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

let emailFiltre = new RegExp("^[a-zA-Z-0-9_.]+@[a-zA-Z-0-9.]+[.]{1}[a-z]{2,4}$");
var email = document.getElementById("email");
console.log(email.value);

var testemail = emailFiltre.test(document.getElementById("email").value);
console.log(testemail);

if(email.value == "")
{
    messageErreur = messageErreur + "\nSaisissez votre email !";
    // event.preventDefault();    
}
else if (testemail != true)
{
    messageErreur = messageErreur + "\nSaisissez correctement votre email !";
}
    
// ////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////// TELEPHONE /////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

let telephoneFiltre = new RegExp("^[0]{1}[0-9]{9}$");   // LE + C'EST POUR DIRE MINIMUM 1 CARACTERE OU PLUS SINON ON DEFINIT LE NOMBRE DE CARACTERE A METTRE AVEC LES ACOLLADES 
var telephone = document.getElementById("telephone");
console.log(telephone.value);

var testtelephone = telephoneFiltre.test(document.getElementById("telephone").value);
console.log(testtelephone);

if(testtelephone != true)
{ // comment dire qu'il faut commencer par un 0 
    messageErreur = messageErreur + "\nVotre numero de telephone doit commencer par 0, comporter 10 chiffres et tout attaché." ;
    // event.preventDefault();    
} 
else if (telephone.value == "")
{
    messageErreur = messageErreur + "\n Veuillez saisir votre n° de telephone. "
}   


// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////// SUJET ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////

let sujetFiltre = new RegExp("^[A-Z-a-z]+$");   
console.log(sujet.value);
var testsujet = sujetFiltre.test(document.getElementById("sujet").value);
console.log(testsujet);
// if(testsujet != true)
// { 
//     alert("Votre numero de telephone doit ookcomporter 10 chiffres et tout attaché" + "<br\>" );
//     event.preventDefault();    
// } 


////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// LISTE /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

let listeFiltre = new RegExp("^[a-zA-Z-0-9.]+@[a-zA-Z-0-9.]+$");
var liste = document.getElementById("liste");
console.log(liste.value);
var testliste = listeFiltre.test(document.getElementById("liste").value);
console.log(testliste);
// if(testliste != true)
// {
//     alert("Saisissez correctement le nom de votre ville !" + "<br\>" + "Prend en compte que les lettres sans aucun caractère special et chiffres");
//     event.preventDefault();    
// }
if (messageErreur == "") {
    
}
else
{
alert(messageErreur);
event.preventDefault();
}

});

document.getElementById("liste").addEventListener("change", function(e) {
    testliste = document.getElementById("liste").value;
    console.log(testliste);
    if (testliste == "autres")
    {
        document.getElementById("sujet").focus();
        //   Quand l'utilisateur saisit la valeurs "Autres" il prend directement le focus sur la saisit "environnement technique du projet".
    } else if (testliste == "Choisissez") {
        document.getElementById("sujet").focus();

    } 
    else 
    {

        var type = document.getElementById("sujet").value;
        document.getElementById("sujet").value = testliste;
        console.log(testliste);
    }
});
