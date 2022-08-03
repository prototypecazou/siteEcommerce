<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./assets/css/stylePanier.css" rel="stylesheet">
</head>
<body>
<table>
  <thead>
    <tr>
      <th>Nom du produit</th>
      <th>Description du produit</th>
      <th>Prix du produit</th>
      <th>Quantité Produit</th>
      <th>Total</th>
      <th>Supprimer Produit</th>
    </tr>
  </thead>
  <tbody id="tabBody">
    
  </tbody>
  <tfoot>
    <tr>
      
      <th colspan="6" align="right" style="padding-right:5vmin">Total: <span id="prixTotal"></span></th>
    </tr>
  </tfoot>
</table>

<form id="form" action="http://www.guillaume.com/siteEcommerce/paiementStripe.php" method="POST">
  <input id="final" type="hidden" name="test"/>
  <button className='button' type="submit" id="payer">Payer</button>
</form>
</body>


<script src="./assets/js/getPanier.js"></script>
</html>