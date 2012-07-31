<!DOCTYPE html>
<html>
    <head>
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    </head>
    <body>
        <div class="container">
            <form class="well" id="loginform">
                <label>Username or Email</label>
                <input type="text" class="input-large" id="username" name="username"/>
                <label>Password</label>
                <input type="password" class="input-large" id="password" name="password"/>
                <label>Junk </label>
                <input type="text" class="input-small" name="pushToken" />
                <br />
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
        <script>
            $("#loginform").bind("submit", function () {
                $.ajax({
                    url: "http://omegaga.net:8000/login/",
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    crossDomain: true,
                    data: $(this).serialize(),
                    success: function (data) {
                        alert(data.myInfo.username);
                        var url = 'user_mpanel.php';
                        var form = $('<form action="' + url + '" method="post">' +
                          '<input type="text" name="username" value="' + data.myInfo.username + '" />' +
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
