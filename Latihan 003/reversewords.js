//1. buat variabel dengan nama 'kalimat' yg diisi string berupa kalimat
//2. ubah variabel kalimat menjadi Array (struktur kalimat adalah gabungan kata dengan WHITE SPACE). jadi, ubah string tersebut menjadi array dengan patokan WHITE SPACE sebagai 'delimiter'.
//3. validasi input; kalimat harus lebih dari 1 kata, jika tidak maka false.
//4. buat variabel kalimat menjadi terbalik
//5. ubah kembali array pada variabel tersebut menjadi string yang berupa kalimat utuh.

function reverseWords(param){
    let kalimat = param;
    kalimat = kalimat.split(" ");
    if(kalimat.length>1){
        kalimat.reverse();
        kalimat = kalimat.join(" ");
        console.log(kalimat);
    } else {
        console.log("input salah!");
    }
}

reverseWords("");