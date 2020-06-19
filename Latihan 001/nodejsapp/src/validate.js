const validation = {
    validateUsername: (username)=>{
        let rules = /[a-zA-Z0-9]{6}$/;
        if(username.match(rules)){
            console.log(true);
        } else {
            console.log(false);
        }
    },
    validatePassword: (password)=>{
        let rules = /[a-zA-Z0-9]/;
        if(password.match(rules) && (password.length==8)){
            console.log(true)
        } else {
            console.log(false);
        }
    }
} 

module.exports = validation;