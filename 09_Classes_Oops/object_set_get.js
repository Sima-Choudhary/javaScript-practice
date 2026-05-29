const user ={
    _email: 'sima@123',
    _password: '123',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },
}

const tea = Object.create(user)
console.log(tea.email)

