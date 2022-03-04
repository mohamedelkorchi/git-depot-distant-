var btn13 = document.getElementById ("btn13");
btn13.addEventListener ("click", clickbtn13);
function clickbtn13 ()
{

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
    
    var permutation = false;
    var intermediaire;
    
    function triBulle()
    {
        InitTab();
        SaisieTab();
    
        console.log("Tableau initiale :\n");
    
        AfficheTab();
    
        changement = false;
        longueur = tableau.length;
    
        for(i = parseInt(0,10); i < longueur; i++)
        {
            for(indice = parseInt(0,10); indice < longueur - 1; indice++)
            {
                if(tableau[indice] > tableau[indice + 1])
                {
                    stock = tableau[indice];
                    tableau[indice] = tableau[indice + 1];
                    tableau[indice + 1] = stock;
    
                    changement = true;
                }
    
            }
        }
        
        console.log("Tableau finale :\n");
    
        AfficheTab();
    }
    
    triBulle();








    
}