//1.buat validasi input untuk parameter yg akan diisi oleh argumen kata String.
//2.masukan string ke dalam variable 'kata' lalu ubah menjadi lowercase
//3.buat variabel 'reverseAlphabet' dengan array kosong
//4.ubah string di variable 'kata' menjadi array tiap huruf dari kata tersebut.
//5.lakukan pengulangan sejumlah huruf dari kata yg diinput
//6.masukkan hasil pengulangan ke dalam variabel baru dengan nama 'reverseAlphabet'
//7.ubah variabel 'kata' dan 'reverseAlphabet' manjadi string
//8.apakah kedua string tsb memiliki nilai yg sama? jika ya maka buat pemberitahuan bahwa nilai yg diinput adalah palindrom. jika tidak maka sebaliknya
function inputKata(param){
    if(param.length < 1){
        console.log("anda belum memberi input!")
    } else {
        let kata = param.toLowerCase();
        let reverseAlphabet = [];
        kata = kata.split("");

        for(let i = (kata.length-1); i >= 0; i--){
            reverseAlphabet.push(kata[i]);
        }    
        kata = kata.join("");
        reverseAlphabet = reverseAlphabet.join("");
    
        if(kata == reverseAlphabet){
            console.log("Kata yang anda input adalah PALINDROM")
        } else {
            console.log("Kata yang anda input bukan PALINDROM")
        }
    }
}

inputKata("Apa");



