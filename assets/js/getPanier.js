var produits = localStorage.getItem("products");
var tabBody = document.querySelector("#tabBody")
var tableauPrixTotal = []

function appendChild(tr,propriete,supprime,valeur){
    var element = document.createElement("td")
    element.textContent = propriete
    if(supprime != undefined || valeur != undefined){
        element.className=supprime
        element.value = valeur
    }
    tr.appendChild(element)
}

function aucunProduitAjouter(){
    var trUni = document.createElement("tr")
    tabBody.appendChild(trUni)
    appendChild(trUni,"Aucun produit ajouter")
    var td = document.querySelector('td')
    td.colSpan="6"
    td.align = "center"
    var btnPayer = document.querySelector("#payer")
    btnPayer.disabled=true
}

function createProduitLine(){


if(produits == null || JSON.parse(produits).length == 0){
   aucunProduitAjouter();
  
   
  
}else{
    
    JSON.parse(produits).forEach(element => {
        var tr = document.createElement("tr")
        tr.value = element.id
        appendChild(tr,element.nom)
        appendChild(tr,element.description)
        appendChild(tr,element.prix)
       
        //appendChild(tr,element.quantity)
        var select = document.createElement("select")
        select.value=element.quantity
        
        tr.appendChild(select)
        
        var prix = parseInt(element.prix)
        var quantity = parseInt(element.quantity)
        var total = prix * quantity
    
        appendChild(tr,total + "e","totalUnique")
    
        tableauPrixTotal.push(total)
    
       
    
        for(var i = 0; i <=10; i++){
            var option = document.createElement("option")
            option.value = i
            if(i == 0 ){
                option.textContent = i + " (supprimer)"
            }else{
                option.textContent = i
            }
            
            
            select.appendChild(option)
        }
    
        select.options[element.quantity].selected = "selected"
        appendChild(tr,"X","btnSupprime",element.id)
        tabBody.appendChild(tr)
     
    
    });
}

    
}

createProduitLine();


function prixTotal(){
    var prixTotalDom = document.querySelector("#prixTotal");
    var prixUnique = document.querySelectorAll(".totalUnique")
    var total = 0
    
    for(var i = 0; i < prixUnique.length; i++){
       total += parseInt(prixUnique[i].textContent)
    }

   return prixTotalDom.textContent = total +"e"

}

prixTotal()


function supprimerProduit(){
    var btnSupprime = document.querySelectorAll(".btnSupprime")

    btnSupprime.forEach(button => {
        button.onclick = function(){
            let produitAll = localStorage.getItem("products");

            let foundProd = JSON.parse(produitAll).filter(function(element){return element.id != button.value})
         
            this.parentElement.remove()
            localStorage.setItem("products",JSON.stringify(foundProd));

            prixTotal()

            if(parseInt(prixTotal()) == 0){
                aucunProduitAjouter()
            }
        }
    });
}

supprimerProduit()

function changeQuantity(){
    var select = document.querySelectorAll("select")

    select.forEach(selection => {
        selection.onchange = function(){
          
            
            var produitsAll = JSON.parse(localStorage.getItem("products"));
            var prixUnique = this.previousElementSibling.textContent 
           
          
            this.nextElementSibling.textContent = parseInt(prixUnique)* this.value +"e"
            prixTotal()


            if(this.value == 0){
            let foundProd = produitsAll.filter(function(element){return element.id != selection.parentElement.value})
            localStorage.setItem("products",JSON.stringify(foundProd));
            this.parentElement.remove()
            }else{
                var findProd = produitsAll.find(element => element.id == this.parentElement.value)
                findProd.quantity = this.value
                localStorage.setItem("products",JSON.stringify(produitsAll));
            }
            
            
            if(parseInt(prixTotal()) == 0){
                aucunProduitAjouter()
            }
          
        }
    });
}

changeQuantity()


// envoie du localstorage au back-end (php)

var form = document.querySelector("#form")
var final = document.querySelector("#final")

form.addEventListener("submit", function(e){
  e.preventDefault();

  var panierFinal = localStorage.getItem("products");

  final.value = panierFinal

  form.submit()
});