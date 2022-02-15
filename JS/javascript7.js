var btn3 = document.getElementById ("btn3");
btn3.addEventListener ('click', clickbtn3);
function clickbtn3 () {


var nombre =  window.prompt ("choisissez un nombre")

if ( nombre % 2 == 0 ) // modulo et non division
{
    console.log("nombre pair");
    window.alert(" Votre nombre est pair");

}
else
{
    console.log("nombre impair");
    window.alert("Votre nombre est impair");
};






}