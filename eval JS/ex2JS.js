var tableMultiplication = parseInt (prompt("choisir le chiffre à muliplier"))

for(let i=0 ;i<=10000;i++) 
{
    resultat = tableMultiplication * i;
    // console.log(resultat);
    // alert(resultat);
    document.write(tableMultiplication + " * " + i + " = " + resultat + "<br>")
    console.log(tableMultiplication + " * " + i + " = " + resultat);
}

// alert(tableMultiplication + " * " + i + " = " + resultat + "<br>")