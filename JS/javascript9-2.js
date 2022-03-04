




var btn12 = document.getElementById ("btn12");
btn12.addEventListener ("click", clickbtn12);
function clickbtn12 ()
{


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// METHODE NATHAN ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////// EXPLICATION ///////////////////////
//////////////////////////////////////////////////////////

function GetInteger(TextMsg)
{
    var nombre = prompt(TextMsg);
    nombre = parseInt(nombre,10);
    console.log("Vous avez saisi le nombre "+ nombre +".");
    return nombre;
}

function InitTab()
{
    nombre = GetInteger("Veuillez préciser la taille du tableau.");

    tableau = Array(nombre);
}

function SaisieTab()
{
    

        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        tableau[indice] = GetInteger("Veuillez saisir la valeur de l'élément d'indice "+ indice +".");
    }

}

function AfficheTab()
{
        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        console.log(tableau[indice]);
    }
}

//GetInteger();
InitTab();
SaisieTab();
AfficheTab();






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// METHODE LEA //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // var entier=parseInt(prompt("Saisissez un nombre entier :"))
    // var myTableau=[]
    // function GetInteger()
    // {
    //     console.log("function GetInteger")
    //     return(entier)
    // }
    // GetInteger()
    
    // var taille=parseInt(prompt("Entrez la taille :"));
    // function InitTab()
    // {
    //     console.log("function InitTab")
    //     var myTableau= Array(taille)
    //     return(myTableau)
    // }
    // InitTab()
    
    // var c=0
    // function SaisieTab()
    // {
    //     console.log("function SaisieTab")
    //     while(c<taille){
    //         var nombre=parseInt(prompt("Entrez les notes :"));
    //         console.log("Voila votre nombres " + nombre);
    //         myTableau[c]= nombre
    //         c++
    //     }
    //     return(myTableau)
    // }
    // SaisieTab()
    
    // function AfficheTab()
    // {
    //     console.log("function AfficheTab")
    //     alert(myTableau)
    // }
    // AfficheTab()
    
    // function RechercheTab()
    // {
    //     console.log("function RechercheTab")
    //     alert(myTableau[entier])
    //     console.log(entier)
    // }
    // RechercheTab()
    
    // function InfoTab()
    // {
    //     console.log("function InfoTab")
    // var moyenne=0
    // var somme=0
    // var l=myTableau.length //.length calcul la longueur du tableau
    // for(i=0;i<l;i++){
    // somme+=myTableau[i]
    // }
    // moyenne=somme/l
    // console.log(moyenne)
    // alert(moyenne)
    // }
    // InfoTab()
    




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// METHODE JUJU /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
  



// var tableau = [];

// //alert("avt fuction");

// function GetInteger(){   
//     //alert("Dans foction GetInteger");
//     Entier = parseInt(prompt("Ecrire un chiffre entier : "));
//     return(Entier);
// }
// GetInteger();

// var n =parseInt(prompt("Quel sera la taille du tableau : "));

// function InitTab(){
//     //alert("dans foction IniTab");
//     var tableau = Array(n);//n == taille du tableau 
// return(tableau);
// }
// InitTab();

// var nb_valeur = 0;

// function SaisieTab(){
//     //alert("Dans foction SaisieTab");
//     while(nb_valeur <n){

//         var valeur = parseInt(prompt("Entrez les valeurs du tableau : "));
//         tableau[nb_valeur]=valeur;
//         nb_valeur++;
//     }
//         return(tableau);
// }
// SaisieTab();

// function AfficheTab(){
//     //alert("Dans foction AfficheTab");
//     alert(tableau);
//     console.log(tableau);
// }
// AfficheTab();

// function RechercheTab(){
//     //alert("Dans la fonction RechercheTab");
//     alert(tableau[Entier]);
//     console.log(tableau[Entier]);
// }
// RechercheTab();

// function InfoTab(){
//     //alert("Dans la fonction InfoTab");
//     var max = 0;//Maximun du tabeau 
//         for(i=0;i<tableau.length; i++){
//             if (tableau[i]>max){
//                 max = tableau[i];
//             }
//     }
//     console.log(max);
    
//     var moyN = 0;//Moyenne du tableau
//     var n = tableau.length;
//     var s = 0;
//     for(i=0; i<n; i++){
//         s += tableau[i];
//     }
//     var moyN = s / n;
//     console.log(moyN);

//     alert("La valeur maximale est de " + max + "\n" +
//     "La moyenne du tableau est de " + moyN );
// }
// InfoTab();













}