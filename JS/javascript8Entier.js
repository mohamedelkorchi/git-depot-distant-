var btn7 = document.getElementById ("btn7");
btn7.addEventListener ("click", clickbtn7);
function clickbtn7 ()
{

// var N = 25
// N = parseInt
// window.prompt(" Saisissez un nombre");

// while(N<25)
// {
//     window.prompt(" Saisissez un nombre");
//     alert(N);
//     console.log(N);
// }




// var N1 = window.prompt("Saisissez un nombre");
// N = 15
// while (N1<N)
// {
//     console.log(N1--);
//     alert(N1--);
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// METHODE LEA //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// var nombre1 = window.prompt("Saisissez un nombre ");
// var N=0
// var m=""
// while(nombre1 > N){
//     if(nombre1<1){break}
//     nombre1--
//     m= m+nombre1 + ",";
// }
// alert(m)
// console.log(m)




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////DEUXIEME METHODE//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var i              // pas obligé de mettre 0 et POURQUOI ?
var resultat       // valeur du calcul pour décrémenté 

var n=window.prompt("saisissez un nombre");

for (i=0; i=2 ; i--)          // Pourquoi deuxieme " i " n'est pas nul ?

{
    resultat = n - i;
    n--;

    console.log("n = " + n);
    console.log("resultat = " + resultat);
    console.log("i =" + i);
    window.alert(n);
    if (n==0) 
    {
        break
    }
} 


console.log(resultat);
console.log(i);


}