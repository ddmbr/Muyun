<!DOCTYPE html>
<html>
    <head>
        <!-- <script src="http://static.opentok.com/v0.92-alpha/js/TB.min.js" type="text/javascript"></script>-->
        <!-- <script src="http://staging.tokbox.com/v0.91/js/TB.min.js" type="text/javascript" charset="utf-8"></script> -->
        <script src="http://static.opentok.com/v0.91/js/TB.min.js" ></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <!-- <script src="http://static.opentok.com/v0.91/js/TB.min.js" ></script> -->
        <script src="assets/js/bootstrap-dropdown.js" ></script>
        <link href="assets/css/bootstrap.css" rel="stylesheet">
    </head>
    <body>
        <div class="container" id="container">
            <div class-"row">
                <div class="span12">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a href="trans_mpanel.php">Working Space</a>
                        </li>
                        <li><a href="trans_cpanel.php">Control Panel</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="span8" id="conferencing_area">
                </div>
            </div>
        </div>
        <script type="text/javascript" charset="utf-8">
            var session_id, token;
            var username = "<?php echo $_POST['username']?>";
            var address = "<?php echo $_SERVER['REMOTE_ADDR']?>";
            var session;
            var apiKey = "16937882"; 
            var subscribers = {};
            //DEBUG PURPOSE
            var isPublisher = false;
            var isInVideoCall = false;
 
            TB.setLogLevel(TB.INFO);

            // Check comming call
            setInterval(function () {
                    $.ajax({
                        url: "http://omegaga.net:8000/answerVideoCall/",
                        type: "POST",
                        cache: false,
                        dataType: "json",
                        crossDomain: true,
                        data: "username="+username,
                        success: function(data) {
                            if (data.sessionId != '' && isInVideoCall==false){
                                token = data.token; 
                                session_id = data.sessionId;
                                isInVideoCall = true;
                                connect();
                            }
                        }
                    })
                },
                3000
            )

            function connect(){
                isInVideoCall = true
                session = TB.initSession(session_id);
                session.addEventListener('sessionConnected', sessionConnectedHandler);
                session.addEventListener('connectionCreated', connectionCreatedHandler);
                session.addEventListener('streamCreated', streamCreatedHandler);
                $("#conferencing_area").append("<div id='publisher' />");
                session.connect(apiKey, token);
            }

            function addStream(stream) {
                if (stream.connection.connectionId == session.connection.connectionId) {
                    return;
                }
                $("#conferencing_area").append("<div id='"+stream.streamId+"' />");
                subscribers[stream.streamId] = session.subscribe(stream, stream.streamId);
            }

            function streamCreatedHandler(event) {
                for (var i = 0; i < event.streams.length; i++) {
                    TB.log("streamCreated - connectionId: " + event.streams[i].connection.connectionId);
                    TB.log("streamCreated - connectionData: " + event.streams[i].connection.data);
                    addStream(event.streams[i]);
            }
}

            function subscribeToStream(event){
                alert("subscribe stream");
                for (var i = 0; i < event.streams.length; i++) {
                    addStream(event.streams[i]);
                }
            }

            function connectionCreatedHandler(event) {
                // TODO
            }

            function sessionConnectedHandler(event){
                //alert(username+" connected");
                
                
                for (var i = 0; i < event.streams.length; i++) {
                    addStream(event.streams[i]);
                }
                publisher = TB.initPublisher(apiKey, 'publisher', {name:"interpreter"});
                session.publish(publisher);
            }
        </script>
    </body>
</html>
