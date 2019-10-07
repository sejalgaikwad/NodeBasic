class User {

  //constructor
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }


  //Methods
  login() {
    console.log(this.email, " just logged in");
  }
  logout() {
    console.log(this.email, " just logged out");
  }
}

var userOne = new User("sejal", "sejal123@gmail.com");
var userTwo = new User("komal", "komal123@gmail.com");

userOne.login();
userTwo.logout();

console.log(userOne);
console.log(userTwo);