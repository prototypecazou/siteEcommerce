<?php

ini_set("display_errors",1);

if(isset($_POST['recherche']) and !empty($_POST['recherche'])){

    require_once("./classes/Database.php");



    $recherche = Database::query("SELECT * FROM produits WHERE REPLACE(nom, '-', '') LIKE (:test) OR nom LIKE (:test)",[":test"=>'%'.$_POST['recherche'].'%']);

    var_dump($recherche);
    //SELECT * FROM produits WHERE nom LIKE concat('%t','-','shirt%') OR nom LIKE '%tshirt%'; 
}

?>