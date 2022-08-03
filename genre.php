<?php

require_once("./classes/Database.php");

if(isset($_GET['genre']) and !empty($_GET['genre']) 
and isset($_GET['categorieGenre']) and !empty($_GET['categorieGenre'])){

    $produitsGenre = Database::query("SELECT * FROM produits WHERE `genre_id` = (:idGenre) and `categorie_id` = (:idCategorie) ",
    [':idGenre' => $_GET['genre'],
    ':idCategorie' => $_GET['categorieGenre']
    ]);
}

elseif(isset($_GET['genre']) and !empty($_GET['genre']) 
and isset($_GET['marqueGenre']) and !empty($_GET['marqueGenre'])){

    $produitsGenre = Database::query("SELECT * FROM produits WHERE `genre_id` = (:idGenre) and `marque_id` = (:idMarque)",
    [':idGenre' => $_GET['genre'],
    ':idMarque' => $_GET['marqueGenre']
    ]);
}

elseif(isset($_GET['genre']) and !empty($_GET['genre']) and empty($_GET['categorieGenre'])){


    $produitsGenre = Database::query("SELECT * FROM produits WHERE `genre_id` = (:idGenre) ",[':idGenre' => $_GET['genre']]);


}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./assets/css/style.css" rel="stylesheet">
</head>
<body>

    <header>
        <div style="display:flex;justify-content:space-between;padding:1vmin 4vmin">
            <h1>Site Ecommerce</h1>
            <div>
                <img src="./assets/img/paniers.png" alt="" style="width:4vmin;height:4vmin;">
            </div>
        </div>
    </header>

    <main>
        <section style="display:flex;justify-content:center;flex-wrap:wrap">
            <?php foreach($produitsGenre as $produit) :?>
                <div class="blockProduit">
                    <img>
                    <div>
                        <span><?= $produit['nom']; ?></span>
                        <p><?= $produit['description']; ?></p>
                        <span><?= $produit['prix']; ?></span>
                        <button>Ajouter au panier</button>
                    </div>
                </div>
            <?php endforeach; ?>
        </section>
    </main>

    <footer>

    </footer>

</body>
</html>