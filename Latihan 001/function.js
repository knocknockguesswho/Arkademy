function sum(param1, param2){
    console.log(param1+param2);
}

sum(10,20);

const sumArrow = (param1, param2) => {
    console.log(param1+param2);
}

const profile = {
    name: 'John',
    age: 10,
    sumAge: function(param){
        return this.age+param;
    }
}

console.log(profile.sumAge(10))