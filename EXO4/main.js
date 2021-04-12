        var password = document.getElementById("password");
        var confirm_password = document.getElementById("confirm_password");

        function validatePassword(){
          if (password.value == ''|| confirm_password.value == ''){
        alert ('Veuillez remplir les champs');
      }
          if(password.value !== confirm_password.value) {
            //confirm_password.setCustomValidity("Passwords Don't Match");
            document.getElementById("password").style.border = document.getElementById("confirm_password").style.border = "4px solid red";
            //document.getElementById("confirm_password").style.border = "4px solid red";
          } else {
            //confirm_password.setCustomValidity('');
            document.getElementById("password").style.border = document.getElementById("confirm_password").style.border = "4px solid green";
            //document.getElementById("confirm_password").style.border = "4px solid green";
          }
        }
