<?php
// Generated by curl-to-PHP: http://incarnate.github.io/curl-to-php/
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'http://127.0.0.1:22555/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
$opt = "{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listunspent\", \"params\": [] }";
// print_r(json_decode($opt));

$t = (object) array( "jsonrpc" => "1.0" , "id" => "curl" , "method" => "listunspent" , "params" => array());


$funded = "01000000014407ee0fac2063761d477af843d33fd0cbdf0fb213ad7cf571ff1ea95436e8ea0100000000ffffffff06e0451100000000001976a9143fc07f41171fb2f4ca1ba18e9c2af6f64844a3f588ace0451100000000001976a9144aca3a444eaea2bf25a7e573f74537c79b26c81888ace0451100000000001976a91455b33247fa691e6ab553ac5da8c02e3275969eac88ac00000000000000004f6a4c4c68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d634854446b4a2d6251714d266c6973743d5244634854446b4a2d6251714d2673746172745f726164696f3d3100b33f71000000001976a91430d378e39329b7b143eafc6a6ffb9ae998c6f96f88ac6c51bc05000000001976a914121e1c08a1aafdc5de7e64sendd098d8f7cf8423431388ac00000000";

$done = '{"jsonrpc":"1.0","id":"curl","method":"decoderawtransaction","params": [ "01000000014407ee0fac2063761d477af843d33fd0cbdf0fb213ad7cf571ff1ea95436e8ea0100000000ffffffff06e0451100000000001976a9143fc07f41171fb2f4ca1ba18e9c2af6f64844a3f588ace0451100000000001976a9144aca3a444eaea2bf25a7e573f74537c79b26c81888ace0451100000000001976a91455b33247fa691e6ab553ac5da8c02e3275969eac88ac00000000000000004f6a4c4c68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d634854446b4a2d6251714d266c6973743d5244634854446b4a2d6251714d2673746172745f726164696f3d3100b33f71000000001976a91430d378e39329b7b143eafc6a6ffb9ae998c6f96f88ac6c51bc05000000001976a914121e1c08a1aafdc5de7e64sendd098d8f7cf8423431388ac00000000" ] }';

$t = (object) array( "jsonrpc" => "1.0" , "id" => "curl" , "method" => "signrawtransaction" , "params" => array( $funded ));

//echo "--------------------------------------------------\n";
//print_r(json_encode($t));
//echo "--------------------------------------------------\n";

//echo "\ndddddddddddddd\n";
curl_setopt($ch, CURLOPT_POSTFIELDS,$done);
curl_setopt($ch, CURLOPT_USERPWD, 'root' . ':' . 'SECRETPASSWORD');

$headers = array();
$headers[] = 'Content-Type: text/plain;';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
echo $done;
// exit;
$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

echo $result;

