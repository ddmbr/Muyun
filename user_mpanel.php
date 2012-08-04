<!DOCTYPE html>
<?php
    if(!isset($_POST["username"]))
        header( 'Location: login.php' ) ;
?>
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
            <div class="row">
                <div class="span12">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a href="user_mpanel.php">Conferencing</a>
                        </li>
                        <li><a href="user_cpanel.php">Control Panel</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="span8" id="conferencing_area">
                    <button class="btn"><?php echo $_POST["username"]; ?></button>
                    <br />
                </div>
                <div class="span4">
                    <div class="well">
                        <ul class="nav nav-list" id="contacts-list">
                            <!-- DEBUG PURPOSE-->
                            <li class="nav-header" id="contacts-list-head">Contacts</li>
                            <li class="contact">
                                <a><i class="icon-user"></i>Chen Jianlin</a>
                            </li>
                            <li class="contact">
                                <a><i class="icon-book"></i>Young Fan</a>
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-primary" id="start_conference">Start Conference</button>
                    <p />
                    <div class="btn-group">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            Call Translator Only
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- HARD CODED!-->
                            <li id=0 class="trans_only_btn"><a>Chinese</a></li>
                            <li id=1 class="trans_only_btn"><a>English</a></li>
                            <li id=2 class="trans_only_btn"><a>Japanese</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script>

            var session_id, token;
            var username = "<?php echo $_POST['username']?>";
            var address = "<?php echo $_SERVER['REMOTE_ADDR']?>";
            var session, my_session;
            var apiKey = "16937882"; 
            var target_language=-1;
            var subscribers = {};
            //DEBUG PURPOSE
            var isPublisher = false;
 
            TB.setLogLevel(TB.INFO);

            // Obtain contacts
            $.ajax({
                url: "http://omegaga.net:8000/contacts/",
                type: "POST",
                cache: false,
                dataType: "json",
                crossDomain: true,
                data: "username="+username,
                success: function(data) {
                    $.each(data.contacts, function(key,val){
                        $('<li class="contact"><a><i class="icon-user"></i>'+val.username+'</a>').insertAfter($('#contacts-list-head'));
                    });
                    $(".contact").click(function (){
                        if(target = $("#contacts-list").find(".active")){
                            target.removeClass("active");
                        }
                        $(this).addClass("active");
                    });
                }
            });

            // Obtain the session ID and token
            $.ajax({
                url: "http://omegaga.net:8000/session/",
                type: "POST",
                cache: false,
                dataType: "json",
                crossDomain: true,
                data: "username="+username+"&address="+address,
                success: function(data) {
                    session_id = data.session_id;
                    token = data.token;
                    my_session = TB.initSession(session_id);
                    // not necessary now
                    //session.connect(apiKey, token);
                    my_session.addEventListener('sessionConnected', sessionConnectedHandler);
                    my_session.addEventListener('streamCreated', streamCreatedHandler);
                }
            });

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

            $("#start_conference").click(function (){
                session = my_session;
                isPublisher = true;
                session.connect(apiKey, token);
                $("#conferencing_area").append("<div class='well' id='publisher' />");
                reciever = $("#contacts-list").find(".active").text();
            });

            $(".trans_only_btn").click(function (){
                session = my_session;
                isPublisher = true;
                session.connect(apiKey, token);
                $("#conferencing_area").append("<div class='well' id='publisher' />");
                reciever = '';
                target_language = $(this).attr("id");
            });

            function connect(){
                //$("#container").prepend("<div class=\"alert alert-success\">"+session_id+"</div>")
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
                //alert("subscribe stream");
                for (var i = 0; i < event.streams.length; i++) {
                    addStream(event.streams[i]);
                }
            }

            function sessionConnectedHandler(event){
                //alert(username+" connected");
                publisher = TB.initPublisher(apiKey, 'publisher');
                session.publish(publisher);
                if (isPublisher){
                    $.ajax({
                        url: "http://omegaga.net:8000/videoCallTo/",
                        type: "POST",
                        cache: false,
                        dataType: "json",
                        crossDomain: true,
                        // TODO condition
                        data: "username="+username+"&callToUsername="+reciever+"&language="+target_language,
                        success: function(data) {
                        }
                    });
                }
                subscribeToStream(event);
            }
        </script>
    </body>
</html>
