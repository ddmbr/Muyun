<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
    <head>
        <?php
            require_once 'API_Config.php';
            require_once 'test_server.php';
        ?>
        <title>OpenTok Getting Started</title>
        <script src="http://staging.tokbox.com/v0.91/js/TB.min.js"></script>

        <script type="text/javascript">
            var apiKey = '<?php echo API_Config::API_KEY?>';
            var sessionId = '<?php echo $sessionID ?>';
            var token = '<?php echo $token ?>';           
            var basicStreams = [];

            TB.setLogLevel(TB.DEBUG); // Set this for helpful debugging messages in console

            var session = TB.initSession(sessionId);      
            session.addEventListener('sessionConnected', sessionConnectedHandler);      
            session.connect(apiKey, token);

            function sessionConnectedHandler(event) {
                alert('Hello world. I am connected to OpenTok :).');
                session.publish();
                for (var i = 0; i < event.streams.length; i++) {
                    if (event.streams[i].type == "basic") {
                        subscribeToStream(event.target, event.streams[i]);
                        basicStreams[event.streams[i].streamId] = event.streams[i];
                    }
                }
            }

            function subscribeToStream(session, stream) {
                // Create a div for the subscriber to replace
                var parentDiv = document.getElementById("subscribers");
                var subscriberDiv = document.createElement("div");
                subscriberDiv.id = "opentok_subscriber_" + stream.streamId;
                parentDiv.appendChild(subscriberDiv);
                
                session.subscribe(stream, subscriberDiv.id);
            }
        </script>

    </head>

    <body>
    </body>
</html>
