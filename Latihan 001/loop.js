let index = 0;

while(index < 5){
    console.log(index);
    index++;
} //while loop

for(let index=0; index<5; index++){
    console.log(index)
} //for loop

const fruits = ['Apple', "Manggo", 'Banana'];
for(value of fruits){
    console.log(value);
} //iterasi

fruits.forEach((buah, index) =>{
    console.log(buah+" adalah index ke "+index);
}) //forEach

const fruitModified = fruits.map((value, index) => {
    return{ name: value }
}); //map()


const profile = {
    name: 'John',
    age: 20
};

for(key in profile){
    console.log(profile[key]);
} //for in