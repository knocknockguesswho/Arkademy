var name = 'John';
const gender = 'male';

console.log(name);



let age = 20;
if(true){
    name = 'Doe'; //variable dideklarasikan ulang
    age = 15;
    const gender = 'female'; //gender tidak berubah
}

console.log(name); //dipanggil lagi dan nilainya menjadi nilai yg kedua
console.log(age);
console.log(gender);