var arret = parseInt(100);
var jeunes = 0;
var moyens = 0;
var vieux = 0;
messageAlerte = "";
// console.log (messageAlerte);
var tab = [];

do 
{
age = prompt(" quel âge avez vous ?  ");
console.log (age);
// tab.push(age);

    if (age<20) 
    {
        tab.push(age);
        jeunes++;
        // messageAlerte = messageAlerte + "\n vous etes " +  jeunes +" de moins de 20 ans ";
                                                                                                         ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }                                                                                                    ////////////////////////////////////// POURQUOI LE MESSAGE ALERTE NE FONCTIONNE PAS ? //////////////////////////////////////
    else if (age>40)                                                                                   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        tab.push(age);
        vieux++;
        // messageAlerte = messageAlerte + "\n vous etes " + vieux + " de plus de 40 ans";
    }
    else //(age >= 20 && age <= 40)
    {
        tab.push(age);
        moyens++;
        // messageAlerte = messageAlerte + "\n vous etes " + moyens + " entre 20 et 40 ans"; 
    }
}

while(age < arret){} 
// alert(messageAlerte);
// console.log("age = "+age);
console.log("vous etes " + jeunes + " moins de 20 ans");
// console.log("jeunes++ = " + jeunes++);
console.log("vous etes "+moyens + " entre 20 et 40 ans");
console.log("vous etes "+vieux + " plus de 40 ans");
// console.log(messageAlerte);

document.write("vous etes " + jeunes + " de moins de 20 ans" + "<br>" + "vous etes "+moyens + " entre 20 et 40 ans" + "<br>" + "vous etes "+vieux + " de plus de 40 ans")

alert("vous etes " + jeunes + " de moins de 20 ans");
alert("vous etes "+moyens + " entre 20 et 40 ans");
alert("vous etes "+vieux + " de plus de 40 ans");




// var tabage = [];
// var nbenfant= 0;
// var nbadultes = 0;
// var adultesJeunes = 0;
// var age;
// do {
//     age = parseInt(prompt("Saisissez votre âge ?"))
//     tabage.push(age);
//     console.log(tabage);
//     if (age < 20) {
//          nbenfant++;
//          console.log("Il y a :" + nbenfant + "\nde personnes inférieurs à 20ans");

//         // console.log("Vous avez :" + age + "ans" + "\n vous êtes encore un enfant :smile: !");
//     } else if (age > 40)
//         {
//         nbadultes++;
//         // console.log(nbadultes);

//         console.log("Il y a :" + nbadultes + "\npersonnes supérieurs à 40ans");

//         // console.log("vous avez :" + age + "ans" + "\n vous êtes un adultes !");
//         }
//      else // (age > 20 || age > 40) 
//         {
//             adultesJeunes++;
//             console.log("Il y a "+ adultesJeunes + "\nqui ont un âge entre 40 et 20ans");
//         }
    
    
// }
// while (age < 100) {
    
// }
// console.log("Il y a :" + nbenfant + " personnes\n inférieurs à 20ans");
// console.log("Il y a :" + nbadultes + " personnes\nsupérieurs à 40ans");
// console.log("Il y a "+ adultesJeunes + " personnes\nqui ont un âge entre 40 et 20ans");

