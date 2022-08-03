var btnPanier = document.querySelectorAll(".btnPanier")

function saveProd(products){
localStorage.setItem("products",JSON.stringify(products))
} 

function recupereProd(){
   let produits =  localStorage.getItem("products");

   if(produits == null){
       return []
   }else{
    return JSON.parse(produits)
   }

   

}


function ajouterProduit(newProduit){
  let recupere = recupereProd();


  let findId = recupere.find( element => element.id == newProduit.id)

  if(findId == undefined){
    newProduit.quantity = 1
    recupere.push(newProduit)
    
  }else{
      findId.quantity++
  }


  saveProd(recupere)

}

function spanNombreProduit(){

  var nombreProduits = document.querySelector('#nombreProduits')
  nombreProduits.style.display ="flex"
 
  var quantity = 0

  recupereProd().forEach(element => {
    quantity += element.quantity
  });

  if(quantity == 0){
    nombreProduits.style.display="none"
    
  }else{

    nombreProduits.textContent = quantity
  }
 
}

btnPanier.forEach(button => {
    button.onclick = function(){
       
        var parent = this.parentElement
        var nomProduit = parent.children[0].textContent
        var descriptionProduit = parent.children[1].textContent
        var prixProduit = parent.children[2].textContent

        ajouterProduit({id:this.value,nom : nomProduit, description: descriptionProduit, prix: prixProduit})

        spanNombreProduit()

    }

    
});



window.onpageshow = function(){
  spanNombreProduit()
}