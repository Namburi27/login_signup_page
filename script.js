document.getElementById("signupToLogin").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("sign").style.display = "none";
            document.getElementById("login").style.display = "block";
        });
document.getElementById("loginToSignup").addEventListener("click", function(event) {
     event.preventDefault();
     document.getElementById("login").style.display = "none";
     document.getElementById("sign").style.display = "block";
});