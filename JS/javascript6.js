var btn2 = document.getElementById ("btn2");
btn2.addEventListener ("click",clickbtn2);
function clickbtn2 () {


var a = "100";
var b = 100;
var c = 1.00;
var d = true; // booleen

document.write("Ceci est une  chaine de caractère : " + a + "<br>");
b--;
console.log (b);
c = c + parseInt(a,10);
console.log(c);
d = !d; // inverser avec le (!)
console.log(d);

alert("Ceci est une chaîne de caractère : " + a + "\n" +  "b = " + b + "\n" + "c = " +  c + "\n" + "d = " +  d);

document.write("b = " + b + "<br>");
document.write(" c = " + c + " <br>");
document.write("d = " + d );






};