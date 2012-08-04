<!DOCTYPE html>
<html>
    <head>
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    </head>
    <body>
        <div class="container">
            <?php
                if(isset($_GET['err']))
                {
                    if($_GET['err'] == 1)
                    {
                        $err_msg = 'Please login first';
                    }
                    echo '<div class="alert alert-error">'.$err_msg.'</div>';
                }
            ?>
            <form class="well" id="loginform">
                <label>Username or Email</label>
                <input type="text" class="input-large" id="username" name="username"/>
                <label>Password</label>
                <input type="password" class="input-large" id="password" name="password"/>
                <br />
                <button type="submit" class="btn btn-primary" id="submit_button">Sign in</button>
            </form>
        </div>
        <script>
            $("#loginform").bind("submit", function () {
                $("#submit_button").addClass("disabled");
                $("#submit_button").html("Loading");
                $.ajax({
                    url: "http://omegaga.net:8000/login/",
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    crossDomain: true,
                    data: $(this).serialize(),
                    success: function (data) {
                        var url = 'user_mpanel.php';
                        var form = $('<form action="' + url + '" method="post">' +
                          '<input type="text" name="username" value="' + data.username + '" />' +
                          '</form>');
                        $('body').append(form);
                        $(form).submit();
                    }
                });
                return false;
            });
        </script>
    </body>
</html>
