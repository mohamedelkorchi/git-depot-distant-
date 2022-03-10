let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let nom = prompt("entrez un nom");
let a = tab.indexOf(nom);
if (a > -1)
{
    console.log(tab);
    tab.splice(a,1);
    tab.push(" ");
    console.log(tab);
}
else 
{
    alert("votre prénom est introuvable");
}
  