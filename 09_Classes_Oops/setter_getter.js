class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value.toUpperCase(); //Maximum call stack size exceeded
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value.toUpperCase(); //Maximum call stack size exceeded
    }
}

const chai = new User("Chai@123.com","abc")
console.log(chai.password)
console.log(chai.email)
