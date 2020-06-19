let is_login = true;
let price = 100000;


if(is_login){
    console.log('User telah login');
} else {
    console.log('User harus login dulu!');
}


is_login = false;
if(is_login){
    console.log('User telah login');
} else {
    console.log('User harus login dulu!');
}


price = 50000;
if(price>=100000){
    console.log('Harganya mahal');
} else if(price>=50000) {
    console.log('lumayan murah!');
} else {
    console.log('Murah nih!');
}


const day = new Date().getDay();

switch (day) {
    case 0:
        console.log('Minggu');
        break;
    case 1:
        console.log('Senin');
        break;
    case 2:
        console.log('Selasa');
        break;
    case 3:
        console.log('Rabu');
        break;
    default:
        console.log('Hari tidak tercatat')
        break;
}


const day2 = 'Minggu';

switch (day2) {
    case 'Minggu':
        console.log('Minggu');
        break;
    case 'Senin':
        console.log('Senin');
        break;
    case 'Selasa':
        console.log('Selasa');
        break;
    case 'Rabu':
        console.log('Rabu');
        break;
    default:
        console.log('Hari tidak tercatat')
        break;
}


let is_mahal = price > 100000 ? 'Mahal' : 'Murah'; //ternary operator
console.log(is_mahal);


let name = 1;
let pilihNama = name || 'Doe'; // terdiri dari 2 kondisi. akan masuk ke kondisi pertama jika kondisi pertama == true
console.log(pilihNama);