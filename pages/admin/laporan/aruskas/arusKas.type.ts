export interface IArusKas {
    id: string;
    tanggal: string;
    kategori: string;
    namapelapor: string;
    keterangan: string;
    qty: number;
    nominal: number;
    bukti: string;
    total: number;
    file: string;
}

export const dummyArusKasList: IArusKas[] = [{
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-04",
    kategori: "Pengeluaran",
    namapelapor: "Pak Jaya",
    keterangan: "Solar 2 Mobil",
    qty: 2,
    nominal: 50000,
    total: 100000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-05",
    kategori: "Pengeluaran",
    namapelapor: "Pak Edi",
    keterangan: "Pulsa Listrik",
    qty: 2,
    nominal: 50000,
    total: 100000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-05",
    kategori: "Pembelian",
    namapelapor: "Pak Jaya",
    keterangan: "Semen Tiga Roda",
    qty: 2,
    nominal: 100000,
    total: 200000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-06",
    kategori: "Pembelian",
    namapelapor: "Yohana",
    keterangan: "Pasir dari Palembang",
    qty: 1,
    nominal: 1000000,
    total: 1000000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-06",
    kategori: "Pengeluaran",
    namapelapor: "Ika Septiana",
    keterangan: "Gaji Buruh",
    qty: 8,
    nominal: 80000,
    total: 8 * 80000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-07",
    kategori: "Pengeluaran",
    namapelapor: "Pak Jaya",
    keterangan: "Solar 4 Truk",
    qty: 4,
    nominal: 80000,
    total: 4 * 80000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-08",
    kategori: "Pengeluaran",
    namapelapor: "Pak Jaya",
    keterangan: "Ambil Kas Laci",
    qty: 1,
    nominal: 1500000,
    total: 1500000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-09",
    kategori: "Pengeluaran",
    namapelapor: "Pak Agus",
    keterangan: "Oli Mesin Pabrik",
    qty: 2,
    nominal: 75000,
    total: 2 * 75000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-12",
    kategori: "Pengeluaran",
    namapelapor: "Ika Septiana",
    keterangan: "Gaji Buruh",
    qty: 8,
    nominal: 200000,
    total: 8 * 200000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
}, {
    id: new Date().toJSON.toString(),
    tanggal: "2023-06-13",
    kategori: "Pengeluaran",
    namapelapor: "Pak Edi",
    keterangan: "Pulsa Kantor",
    qty: 1,
    nominal: 50000,
    total: 50000,
    bukti: "View",
    file: "https://raw.githubusercontent.com/Heiyohana/SistemKeuanganTA/master/assets/elements/buktitf.jpg"
},]