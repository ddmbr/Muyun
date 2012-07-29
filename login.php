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
                <br />
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
        <script>
            $("#loginform").bind("submit", function () {
                $.ajax({
                   url: "http://omegaga.net:8000/login/",
                   type: "post",
                   cache: false,
                   dataType: "json", // for example
                   //data: $(this).serialize(),
                   success: function (data) { // data is the JS object based on the JSON returned
                      if (data.success) {
                         //$(this).fadeOut();
                        alert(data)
                      } else {
                         alert("bad login: "+data.error);
                      }
                   }
                });

                return false;
            });
        </script>
    </body>
</html>
