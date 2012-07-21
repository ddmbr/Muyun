<?php
    require_once 'SDK/OpenTokSDK.php';
    require_once 'SDK/OpenTokArchive.php';
    require_once 'SDK/OpenTokSession.php';
    require_once 'API_Config.php';
    

    //Staging environment
    $apiObj = new OpenTokSDK(API_Config::API_KEY, API_Config::API_SECRET);

    // Creating Simple Session object 
    // Enable p2p connections
    echo $_SERVER["REMOTE_ADDR"];
    $session = $apiObj->createSession( $_SERVER["REMOTE_ADDR"], array(SessionPropertyConstants::P2P_PREFERENCE=> "enabled") );
    echo $session->getSessionID();
?>
