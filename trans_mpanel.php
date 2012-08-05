<!DOCTYPE html>
<html>
    <head>
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <!-- <script src="http://static.opentok.com/v0.91/js/TB.min.js" ></script> -->
        <script src="assets/js/TB.min.js" ></script>
        <script src="assets/js/bootstrap-dropdown.js" ></script>
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
        <script>
            var session_id, token;
            var username = "<?php echo $_POST['username']?>";
            var address = "<?php echo $_SERVER['REMOTE_ADDR']?>";
            var session;
            var apiKey = "16937882"; 
            var subscribers = {};
            //DEBUG PURPOSE
            var isPublisher = false;
 
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
                            if (data.session_id != ''){
                                token = data.token;
                                session_id = data.session_id;
                                connect();
                            }
                        }
                    })
                },
                3000
            )

            function connect(){
                session = TB.initSession(session_id);
                session.connect(apiKey, token);
                session.addEventListener('streamCreated', streamCreatedHandler);
                session.addEventListener('sessionConnected', sessionConnectedHandler);
                $("#conferencing_area").append("<div class='well' id='publisher' />");
            }

            function addStream(stream) {
                if (stream.connection.connectionId == session.connection.connectionId) {
                    return;
                }
                $("#conferencing_area").append("<div class='well' id='"+stream.streamId+"' />");
                subscribers[stream.streamId] = session.subscribe(stream, stream.streamId);
            }

            function streamCreatedHandler(event) {
                subscribeToStream(event);
            }

            function subscribeToStream(event){
                alert("subscribe stream");
                for (var i = 0; i < event.streams.length; i++) {
                    addStream(event.streams[i]);
                }
            }

            function sessionConnectedHandler(event){
                alert(username+" connected");
                publisher = TB.initPublisher(apiKey, 'publisher', {name: "interpreter"});
                session.publish(publisher);
                if (isPublisher){
                    $.ajax({
                        url: "http://omegaga.net:8000/videoCallTo/",
                        type: "POST",
                        cache: false,
                        dataType: "json",
                        crossDomain: true,
                        data: "username="+username+"&callToUsername="+reciever,
                        success: function(data) {
                        }
                    });
                }
                subscribeToStream(event);
            }
        </script>
    </body>
</html>
