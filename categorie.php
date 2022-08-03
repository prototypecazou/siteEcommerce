<?php
require_once("./classes/Database.php");

$categories = Database::query("SELECT * FROM categories",[]);
$marques = Database::query("SELECT * FROM marques",[]);

echo json_encode([$categories,$marques]);
?>