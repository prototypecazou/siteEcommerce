<?php

ini_set('display_errors',1);

use Stripe\Checkout\Session;
use Stripe\Stripe;





class StripePayment{

    public function __construct(readonly private string $clientSecret,readonly private string $webhookSecret = ''){
        Stripe::setApiKey($this->clientSecret);
     
    }

public function startPayment($panier){
    $session = Session::create([
        'line_items'                  => [
            array_map(fn (array $product) => [
                'quantity'   => $product['quantity'],
                'price_data' => [
                    'currency'     => 'EUR',
                    'product_data' => [
                        'name' => $product['nom']
                    ],
                    'unit_amount'  => intval($product['prix'])."00"
                ]
            ],$panier)
          
            
        ],
        'mode'                        => 'payment',
        'success_url'                 => 'http://www.guillaume.com/siteEcommerce/success.php',
        'cancel_url'                  => 'http://localhost:8000/',
        'billing_address_collection'  => 'required',
        'shipping_address_collection' => [
            'allowed_countries' => ['FR']
        ],
        'metadata'                    => [
            'cart_id' => "1"
        ]
    ]);



header('Location:'.$session->url);
}






}







?>