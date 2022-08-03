<?php

if(isset($_GET['produit']) and !empty($_GET['produit'])){
    require_once('./classes/Database.php');

    $produit = Database::query('SELECT * FROM produits WHERE `id` = (:idProd)',[
        ':idProd' => $_GET['produit']
    ]);

    var_dump($produit);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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

    </main>

    <footer>
        
    </footer>

</body>
</html>