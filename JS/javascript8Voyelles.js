var btn10 = document.getElementById ("btn10");
btn10.addEventListener ("click", clickbtn10);
function clickbtn10 ()
{



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// METHODE JULIETTE /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////// EXPLIQUER ? /////////

var a = prompt("Entrez un mot : ");
var voyelles = ["a", "e", "i", "o", "u", "y"];


    var nb_voyelle = 0;
        for (let i of a.toLowerCase())
        {
            if(voyelles.includes(i))
            {
                nb_voyelle++;
            }
        }    

alert(`La chaine ${a} posssède ${nb_voyelle} voyelles`);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// METHODE LEA //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // let myVar = window.prompt("Saisir un mot");
    // let lenght = console.log(myVar.length);
    // let o = myVar.indexOf('o'); 
    // let e = myVar.indexOf('e');
    // let i = myVar.indexOf('i');
    // let u = myVar.indexOf('u');
    // let y = myVar.indexOf('y');
    // let a = myVar.indexOf('a');
    // console.log(myVar.substring());
    // nmbreVoyelles = 0;

    // while(myVar.substring()>= 'aa')
    // {
    //     nmbreVoyelles++;
    //     break;
    // }

    // while(myVar.substring()>= 'aaa')
    // {
    //     nmbreVoyelles++;
    //     break;
    // } 
    
    // while(e > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // while(i > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // while(o > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // while(u > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // while(y > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // while(a > -1)
    // {
    //     nmbreVoyelles++;
    //     console.log(nmbreVoyelles);
    //     break;
    // }
    
    // alert("Votre mot est composé de " + nmbreVoyelles + " voyelles.");
    
    















    
}