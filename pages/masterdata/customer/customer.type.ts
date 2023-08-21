export interface ICustomer {
    id: string;
    nama: string;
    nohp: string;
    alamat: string;
}

export const dummyCustomerList: ICustomer[] = [{
    id: new Date().toJSON().toString(),
    nama: "Andi Purnomo",
    nohp: "08123456789",
    alamat: "PT Mandiri Jaya, Sekincau, Lampung Barat",
},
{
    id: new Date().toJSON().toString(),
    nama: "Astuti Putri",
    nohp: "08987654321",
    alamat: "PT Sejahtera, Pringsewu",
},
{
    id: new Date().toJSON().toString(),
    nama: "Danang Suratno",
    nohp: "081312678123",
    alamat: "CV Jaya Mandiri, Metro",
},
{
    id: new Date().toJSON().toString(),
    nama: "Dwi Antasari",
    nohp: "08316875623",
    alamat: "Institut Teknologi Sumatera",
},
{
    id: new Date().toJSON().toString(),
    nama: "Elena Dwinanda S",
    nohp: "086712241221",
    alamat: "PT Permata Jasa, Banten",
},
{
    id: new Date().toJSON().toString(),
    nama: "Fitri Dwi Lestari",
    nohp: "08673212972",
    alamat: "PT Lestari Abadi, Tanggamus",
},
{
    id: new Date().toJSON().toString(),
    nama: "Hanafi Kurniawan",
    nohp: "08678776321",
    alamat: "Kantor Pusat PT Kurnia",
},
{
    id: new Date().toJSON().toString(),
    nama: "Kuntoro Joyo",
    nohp: "0965643287",
    alamat: "Kantor Cabang Pertamina, Metro",
}
]

export enum PageEnum {
    list,
    add,
    edit
}