export interface ICustomer {
    id: string;
    nama: string;
    nohp: string;
    alamat: string;
}

export const dummyCustomerList: ICustomer[] = [{
    id: "MC0001", nama: "Andi Purnomo", nohp: "08123456789", alamat: "PT Mandiri Jaya, Sekincau, Lampung Barat",
},
{
    id: "MC0002", nama: "Astuti Putri", nohp: "08987654321", alamat: "PT Sejahtera, Pringsewu",
},
{
    id: "MC0003", nama: "Danang Suratno", nohp: "081312678123", alamat: "CV Jaya Mandiri, Metro",
},
{
    id: "MC0004", nama: "Dwi Antasari", nohp: "08316875623", alamat: "Institut Teknologi Sumatera",
},
{
    id: "MC0005", nama: "Elena Dwinanda S", nohp: "086712241221", alamat: "PT Permata Jasa, Banten",
},
{
    id: "MC0006", nama: "Fitri Dwi Lestari", nohp: "08673212972", alamat: "PT Lestari Abadi, Tanggamus",
},
{
    id: "MC0007", nama: "Hanafi Kurniawan", nohp: "08678776321", alamat: "Kantor Pusat PT Kurnia",
},
{
    id: "MC0008", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
},
{
    id: "MC0009", nama: "Puput Alisha", nohp: "08776312321", alamat: "Hotel Mawar, Kedaton",
},
{
    id: "MC0010", nama: "Raden Saleh", nohp: "086721316723", alamat: "PT Cahya Naluri, Tanjung Bintan",
    },
    {
        id: "MC0010", nama: "Marella Putri", nohp: "08671238231", alamat: "PT IndoApril, Tangerang",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    },
    {
        id: "MC0010", nama: "Kuntoro Joyo", nohp: "0965643287", alamat: "Kantor Cabang Pertamina, Metro",
    }
]

export enum PageEnum {
    list,
    add,
    edit,
    export
}