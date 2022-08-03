var blockMarqueH = document.querySelector("#blockMarqueH")
var blockMarqueF = document.querySelector("#blockMarqueF")
var blockCategorieH = document.querySelector("#blockCategorieH")
var blockCategorieF = document.querySelector("#blockCategorieF")
var tableau = [blockCategorieH,blockCategorieF]
var btnHomme = document.querySelector("#btnHomme")
var btnFemme = document.querySelector("#btnFemme")

function createBalise(block,marque){
    var aMarques = document.createElement("a")
    aMarques.textContent = marque['marque']
    aMarques.className="ancreMarque"
    aMarques.value=marque['id']
    block.appendChild(aMarques)
}

function categorieGenre(){
    fetch("./categorie.php") 
    // Quand on recoit une réponse
    .then(function(response) {
        response.json().then( // Renvoie un tableau associatif manipulable par javascript (format json)
            function(json) {
                
                json[0].forEach(categorie => {
                    for(var i =0 ; i < tableau.length; i++){
                        var aCategorie = document.createElement("a")
                        aCategorie.textContent = categorie['categorie']
                        aCategorie.className="ancreCategorie"
                        aCategorie.value=categorie['id']
                        tableau[i].appendChild(aCategorie)
                    }
                })

                json[1].forEach(marque => {
                    if(marque.genre_id == 3){
                        createBalise(blockMarqueH,marque)
                    }else if(marque.genre_id == 4){
                       createBalise(blockMarqueF,marque)
                    }
                });
            })
        })
    }


    function eventMouseOver(boutton,block){
        boutton.addEventListener("mouseover", function(){
            
            var blockCategorie = document.querySelector(block)
            var ancreCategorie = document.querySelectorAll(".ancreCategorie")
            var bouttonValue = this.getAttribute('data-value')
            var ancreMarque = document.querySelectorAll(".ancreMarque")
            blockCategorie.style.display="block" 
    
            ancreCategorie.forEach(element => {
                element.onclick = function(){
                    this.href="./genre.php?categorieGenre="+this.value+"&genre="+bouttonValue
                }
            });
    
            ancreMarque.forEach(element => {
                element.onclick = function(){
                    this.href="./genre.php?marqueGenre="+this.value+"&genre="+bouttonValue
                }
            });
        })
    }
    
    function eventMouseOut(boutton,block){
        boutton.addEventListener("mouseout", function(){
            var blockCategorie = document.querySelector(block)
            blockCategorie.style.display="none"
        })
    }


categorieGenre()
eventMouseOver(btnHomme,"#blockH")
eventMouseOver(btnFemme,"#blockF")
eventMouseOut(btnHomme,"#blockH")
eventMouseOut(btnFemme,"#blockF")





