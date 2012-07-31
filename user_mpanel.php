<!DOCTYPE html>
<html>
    <head>
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    </head>
    <body>
        <div class="container">
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
                <div class="span8">
                    <button class="btn"><?php echo $_POST["username"]; ?></button>
                </div>
                <div class="span4">
                    <div class="well">
                        <ul class="nav nav-list">
                            <!-- DEBUG PURPOSE-->
                            <li class="nav-header" id="contacts-list-head">Contacts</li>
                            <li class="active">
                                <a href="#"><i class="icon-user"></i> Chen Jianlin</a>
                            </li>
                            <li>
                                <a href="#"><i class="icon-book"></i> Young Fan</a>
                            </li>
                            <li class="nav-header">Translaror</li>
                            <li>
                                <a href="#"><i class="icon-book"></i> Young Fan</a>
                            </li>
                            <li class="active">
                                <a href="#"><i class="icon-user"></i> Chen Jianlin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $.ajax({
                url: "http://omegaga.net:8000/contacts/",
                type: "POST",
                cache: false,
                dataType: "json",
                crossDomain: true,
                data: "username=<?php echo $_POST["username"] ?>",
                success: function(data) {
                $.each(data.contacts, function(key,val){
                    $('<li><a href="#"><i class="icon-user"></i> '+val.username+'</a>').insertAfter($('#contacts-list-head'));
                });
                }
            })
        </script>
    </body>
</html>
