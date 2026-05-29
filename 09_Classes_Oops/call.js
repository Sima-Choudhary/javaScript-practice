function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log(username , "called")
}

function createUser(username, email, password){
    SetUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", " chai@123.com", "123456");
console.log(chai)


