var btn14 = document.getElementById ("btn14");
btn14.addEventListener ("click", clickbtn14);
function clickbtn14 ()
{


    var x = prompt("Entrez un nombre ")
    var y = prompt("Entrez un multiplicateur ") 
    
    
    function afficheImg(cheminimage)
    {
        // //console.log(image);
        // var baliseimage = document.createElement("img");
        // var srcimg = document.createAttribute("src");
        // srcimg.value = cheminimage;                            //////////////////////////////////////////////////////
                                                                  ///////////////////// methode marion ///////////////////
                                                                  //////////////// insertion image ////////////////////
        // baliseimage.setAttributeNode(srcimg);                  ////////////////////////////////////////////////////// 

        // // ajoute le nouvel élément créé et son contenu dans le DOM
        // var divpapillon = document.getElementById('imagePapillon');

        // divpapillon.insertAdjacentElement('afterbegin', baliseimage);

        document.getElementById("imagePapillon").innerHTML = '<img src="'+ cheminimage +'">';
        console.log(document.getElementById("imagePapillon").innerHTML);        
    }
    
    chemin = "papillon.jpg" 

    //console.log(chemin);

    afficheImg(chemin);


// img.src = "papillon.jpg";
    
    function carre()
    {
    resulatX = x*x*x;
    return resulatX;
    }
    
    function produit(){
        resultatY = y * x;
        return resultatY;
    }
    
document.getElementById("imagePapillon").innerHTML += "<p>" + "Le cube de " + x + " est égal à " + carre() + " <br/> "  + "Le produit de " + x + " x " + y + " est égal à " + produit() + "</p>";
//document.write ("Le cube de " + x + " est égal à " + carre() + " <br/> "  + "Le produit de " + x + " x " + y + " est égal à " + produit());



}
