import { hitung } from "./kalkulator.js";

let hasilTambah = hitung(60, 30, "+");
let hasilKurang = hitung(100, 20, "-");
let hasilKali = hitung(35, 2, "*");
let hasilBagi = hitung(600, 10, "/");

console.log("Hasil penjumlahan 60 + 30 adalah =", hasilTambah);
console.log("Hasil pengurangan 100 - 20 adalah =", hasilKurang);
console.log("Hasil perkalian 35 x 2 adalah =", hasilKali);
console.log("Hasil pembagian 600 : 10 adalah =", hasilBagi);