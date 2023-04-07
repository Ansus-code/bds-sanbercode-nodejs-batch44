console.log("....soal 1");

var biodata = [
  ["0001", "Roma Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function Multidimensional(data) {
  var tampung = "";
  for (var i = 0; i < data.length; i++) {
    tampung += "id Trainer :" + data[i][0] + "\n";
    tampung += "name :" + data[i][1] + "\n";
    tampung += "TTL :" + data[i][2];
    tampung += "TTL " + data[i][3] + "\n";
    tampung += "hoby :" + data[i][4] + "\n";
  }

  return tampung;
}

console.log(Multidimensional(biodata));

console.log("....Soal No. 2");

function balikKata(string) {
  var output = "";

  var panjangString = string.length;
  for (var a = panjangString - 1; a >= 0; a--) {
    output += string[a];
  }
  return output;
}

console.log(balikKata("SanberCode"));
console.log(balikKata("racecar"));
console.log(balikKata("kasur rusak"));
console.log(balikKata("haji ijah"));
console.log(balikKata("I am Sanbers"));
