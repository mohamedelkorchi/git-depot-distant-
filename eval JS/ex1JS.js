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
    }                                                                                                    ////////////////////////////////////// POURQUOI LE MESSAGEALERTE NE FONCTIONNE PAS ? //////////////////////////////////////
    else if (age>40) }                                                                                   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

