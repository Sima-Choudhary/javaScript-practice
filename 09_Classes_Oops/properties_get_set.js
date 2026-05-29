function user(email,password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email
        },

        set: function(email) {    
            this._email = email
            
        }
    })
    Object.defineProperty(this, "password", {
        get: function() {
            return this._password
        },

        set: function(password) {
            this._password = password
        }
    })

}
const chai = new user("chai@gmail.com", "dtr2@12")
console.log(chai.email)
console.log(chai.password)

