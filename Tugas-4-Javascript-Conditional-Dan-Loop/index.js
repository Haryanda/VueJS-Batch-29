// soal 1

var nilai = 92;
var grade = "";
if (nilai >= 80) grade = "Indeksnya A";
else if (nilai >= 70 && nilai < 80) grade = "indeksnya B";
else if (nilai >= 60 && nilai < 70) grade = "indeksnya c";
else if (nilai >= 50 && nilai < 60) grade = "indeksnya D";
else grade = "indeksnya E";

console.log(grade);

//soal 2

var tanggal = 14;
var bulan = "11";
var tahun = 1993;

//14 November 1993

var namaBulan = "";

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Febuari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;

  default:
    namaBulan = "Januari";
    break;
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);
