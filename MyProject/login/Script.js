
        //Register//

        const button = document.getElementById("Create");
        const UserName = document.getElementById("U_name");
        const pw = document.getElementById("Pass");
        const Em = document.getElementById("Email");
        
        button.addEventListener("click",register);

        users = [ ];

        function register() {
        users.push(new User(UserName.value, pw.value, Em.value));
        console.log(users);
       
    }

        //Login//
        const LU = document.getElementById("Luser_name");
        const LP = document.getElementById("lpas");
        const l_btn = document.getElementById("L_log")
        
        l_btn.addEventListener('click',Login);

       function Login(){
           for(i=0; i < users.length; i++){
               if(LU.value == UserName.value && LP.value == pw.value ){
               console.log(UserName + "is logged in")
               alert("Successful");
               }
            else 
            {
               console.log("incorrect user name or password");
               alert("incorrect user name or password");
            }
       }
    }

                
            

  