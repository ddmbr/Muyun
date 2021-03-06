<!DOCTYPE html>
<?php
    if(!isset($_POST["username"]))
        header( 'Location: login.php?err=1' ) ;
?>
<html>
    <head>
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <script src="assets/js/jquery.min.js" ></script>
        <!-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script> -->
        <script src="http://static.opentok.com/v0.91/js/TB.min.js" ></script>
        <!-- <script src="http://staging.tokbox.com/v0.91/js/TB.min.js" type="text/javascript" charset="utf-8"></script> -->
        <!-- <script src="http://static.opentok.com/v0.92-alpha/js/TB.min.js" type="text/javascript"></script>-->

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
                    <form class="well form-inline" id="add_contact_form">
                        <input type="text" class="input-small" id="new_contact" name="targetUsername" placeholder="New contact..."/>
                        <button type="submit" class="btn btn-primary" id="add_contact_button">Add</button>
                    </form>
                    <div class="well">
                        <ul class="nav nav-list" id="contacts-list">
                            <!-- DEBUG PURPOSE-->
                            <li class="nav-header" id="contacts-list-head">Contacts</li>
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
        <script type="text/javascript" charset="utf-8">

            var session_id, token;
            var username = "<?php echo $_POST['username']?>";
            var address = "<?php echo $_SERVER['REMOTE_ADDR']?>";
            var session;
            var apiKey = 16937882; 
            var target_language=-1;
            var subscribers = {};
            //DEBUG PURPOSE
            var isPublisher = false;
            var isInVideoCall = false;
 
            TB.setLogLevel(TB.INFO);

            // Obtain contacts
            getContact();

            // Obtain the session ID and token
            $.ajax({
                url: "http://omegaga.net:8000/session/",
                type: "POST",
                cache: false,
                dataType: "json",
                crossDomain: true,
                data: "username="+username+"&address="+address,
                success: function(data) {
                    session_id = data.sessionId;
                    //token = data.token;
                    
                    // not necessary now
                    //session.connect(apiKey, token);
                    
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

            $("#start_conference").click(function (){
                isPublisher = true;
                reciever = $("#contacts-list").find(".active").text();
                    $.ajax({
                        url: "http://omegaga.net:8000/videoCallTo/",
                        type: "POST",
                        cache: false,
                        dataType: "json",
                        crossDomain: true,
                        // TODO condition
                        data: "username="+username+"&callToUsername="+reciever+"&language="+target_language,
                        success: function(data) {
                            session_id = data.sessionId;
                            token = data.token;
                            connect();
                        }
                    });
            });

            $(".trans_only_btn").click(function (){
                isPublisher = true;
                target_language = $(this).attr("id");
                    $.ajax({
                        url: "http://omegaga.net:8000/interpreterVideoCallTo/",
                        type: "POST",
                        cache: false,
                        dataType: "json",
                        crossDomain: true,
                        // TODO condition
                        data: "username="+username+"&targetLanguage="+target_language,
                        success: function(data) {
                            session_id = data.sessionId;
                            token = data.token;
                            connect();
                        }
                    });
            });

            function getContact() {
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
            }
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
                alert('hey');
                // Subscribe to the newly created streams
                for (var i = 0; i < event.streams.length; i++) {
                    TB.log("streamCreated - connectionId: " + event.streams[i].connection.connectionId);
                    TB.log("streamCreated - connectionData: " + event.streams[i].connection.data);
                    addStream(event.streams[i]);
                }
            }

            function connectionCreatedHandler(event) {
                alert('hey');
                // TODO
            }

            function sessionConnectedHandler(event){
                alert("hey");
                for (var i = 0; i < event.streams.length; i++) {
                    addStream(event.streams[i]);
                }
                publisher = TB.initPublisher(apiKey, 'publisher', {name:username});
                session.publish(publisher);
            }

            $("#add_contact_form").bind("submit", function () {
                $.ajax({
                    url: "http://omegaga.net:8000/addContact/",
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    crossDomain: true,
                    data: $(this).serialize()+"&username="+username,
                    success: function (data) {
                        getContact();
                    }
                });
                return false;
            });
        </script>
    </body>
</html>
