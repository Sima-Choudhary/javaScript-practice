class User{
    constructor(username){
        this.username = username;
    }

    static logMe(){
        console.log(`Username is ${this.username}`);
    }

    
}

const chai = new User("Coffee");
//chai.logMe()

class Teacher extends User{
    constructor(username,password){
        super(username);
        this.password = password;
    }
}

const coffee = new Teacher("masala Coffee", "wgdujw")
console.log(coffee)