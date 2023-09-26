    export interface IProduk {
        id: string;
        kategori: string;
        nama: string;
        ukuran: string;
        luas: number;
        jumlahm2: number;
        hargam2: number;
    };

    let counter = 1;
    function generateID(){
        return `MP${counter++}`;
    };


    export const dummyProdukList: IProduk[] = [{
        id: generateID(), kategori: "Layanan", nama: "Jasa Pasang", ukuran: "-", luas: 1, jumlahm2: 1, hargam2: 25000
    }, {
        id: generateID(), kategori: "Layanan", nama: "Jasa Pengiriman", ukuran: "-", luas: 1, jumlahm2: 1, hargam2: 15000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Bata 6 cm", ukuran: "6 x 10,5 x 21", luas: 1, jumlahm2: 44, hargam2: 80000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Bata 8 cm", ukuran: "8 x 10,5 x 21", luas: 1, jumlahm2: 44, hargam2: 90000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Bata 10 cm", ukuran: "10 x 10,5 x 21", luas: 1, jumlahm2: 44, hargam2: 130000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Cacing 6 cm", ukuran: "6 x 11,2 x 22,5", luas: 1, jumlahm2: 39, hargam2: 80000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Cacing 8 cm", ukuran: "8 x 11,2 x 22,5", luas: 1, jumlahm2: 39, hargam2: 90000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Hexagon 6 cm", ukuran: "6 x 24 x 30", luas: 1, jumlahm2: 28, hargam2: 80000
    }, {
        id: generateID(), kategori: "Materials", nama: "Paving Hexagon 8 cm", ukuran: "8 x 24 x 30", luas: 1, jumlahm2: 28, hargam2: 80000
    }, {
        id: generateID(), kategori: "Materials", nama: "Hebel / Bata Ringan", ukuran: "7,5 x 20 x 60", luas: 1, jumlahm2: 15, hargam2: 70000
    }, {
        id: generateID(), kategori: "Materials", nama: "Grass Block 6 cm", ukuran: "6 x 30 x 45", luas: 1, jumlahm2: 7.5, hargam2: 100000
    }, {
        id: generateID(), kategori: "Materials", nama: "Grass Block 8 cm", ukuran: "8 x 30 x 45", luas: 1, jumlahm2: 7.5, hargam2: 130000
    }, {
        id: generateID(), kategori: "Materials", nama: "Uskup 8 cm", ukuran: "8 x 20 x 45", luas: 1, jumlahm2: 22, hargam2: 107500
    }, 
    ];

    export enum PageEnum {
        list,
        add,
    };