var ref = new Firebase("https://dazzling-inferno-751.firebaseio.com");

var checkAuth = function() {  
  ref.authWithOAuthPopup("github", 
    function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        return;
      }
    });
}

// ref.onAuth(function() { 
//   console.log("AUTH COMPLETE");
// });