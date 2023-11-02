export interface IProduksiHarian {
    id: string;
    tanggal: string;
    materials: string;
    jmlProduksi: number;
    keterangan: string;
}

export const dummyProduksiHarianList: IProduksiHarian[] = [{
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 6 cm",
    jmlProduksi: 20700,
    keterangan: "20 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 8 cm",
    jmlProduksi: 10500,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Cacing 6 cm",
    jmlProduksi: 10380,
    keterangan: "15 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 6 cm",
    jmlProduksi: 9800,
    keterangan: "12 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 10 cm",
    jmlProduksi: 7500,
    keterangan: "8 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 6 cm",
    jmlProduksi: 5060,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 8 cm",
    jmlProduksi: 10500,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Uskup 6 cm",
    jmlProduksi: 1650,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Grass Block 6 cm",
    jmlProduksi: 7500,
    keterangan: "2 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Grass Block 8 cm",
    jmlProduksi: 7500,
    keterangan: "5 rusak",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Hexagon 6 cm",
    jmlProduksi: 4200,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 8 cm",
    jmlProduksi: 12000,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 10 cm",
    jmlProduksi: 5060,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Hebel",
    jmlProduksi: 7500,
    keterangan: "-",
}, {
    id: new Date().toJSON().toString(),
    tanggal: "2022-01-01",
    materials: "Paving Bata 6 cm",
    jmlProduksi: 2500,
    keterangan: "-",
},]

export enum PageEnum {
    list,
    add,
    edit
}
