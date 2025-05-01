const user = {
    username: "Sahil",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , welcome`)
    }

};

user.WelcomeMessage();
user.username= "Sam";
user.WelcomeMessage();