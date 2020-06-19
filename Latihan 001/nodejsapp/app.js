const identity = require('./src/identity');
const validation = require('./src/validate')


function identityFunc(){
    console.log(identity)
}
identityFunc();

validation.validateUsername("123456"); //>5 char of length
validation.validatePassword("12345678"); // == 8 char of length