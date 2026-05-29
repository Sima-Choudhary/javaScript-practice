class user {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abs`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chia@123.com", "hsagdj");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scenes

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function (){
     return `${this.password}abs`
}

const Tea = new User("tea", "chia@123.com", "hsagdj");
console.log(Tea);
console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());