 class User {
    name ;
    password;
    email;
    isLogged;

    constructor(name,password,email){
        this.name = name;
        this.password = password;
        this.email = email;
        this.isLogged = false;

    }

    login(password){
        if(password === this.password){
            this.isLogged = true;
        }
        return this.isLogged;
    }

    logout(){
        this.isLogged = false;
        return this.isLogged;
    } 
  }
