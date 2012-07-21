<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <title>OpenTok Getting Started</title>
  <script src="http://staging.tokbox.com/v0.91/js/TB.min.js"></script>
 
  <script type="text/javascript">
    var apiKey = '1127';
    var sessionId = '14685d1ac5907f4a2814fed28294d3f797f34955';
    var token = 'devtoken';           
 
    TB.setLogLevel(TB.DEBUG); // Set this for helpful debugging messages in console
 
    var session = TB.initSession(sessionId);      
    session.addEventListener('sessionConnected', sessionConnectedHandler);      
    session.connect(apiKey, token);
 
    function sessionConnectedHandler(event) {
      alert('Hello world. I am connected to OpenTok :).');
    }     
  </script>
 
</head>
 
<body>
</body>
</html>
