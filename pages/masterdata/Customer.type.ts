export interface ICustomer {
  id: string;
  nama: string;
  nohandphone: string;
  alamat: string;
}

export const dummyCustomerList: ICustomer[] = [
  {
    id: new Date().toJSON().toString(),
    nama: "Andi Purnomo",
    nohandphone: "08123456789",
    alamat: "PT Mandiri Jaya, Sekincau, Lampung Barat",
  },
  {
    id: new Date().toJSON().toString(),
    nama: "Astuti Putri",
    nohandphone: "08987654321",
    alamat: "PT Sejahtera, Pringsewu",
  },
  {
    id: new Date().toJSON().toString(),
    nama: "Danang Suratno",
    nohandphone: "081312678123",
    alamat: "CV Jaya Mandiri, Metro",
  }
];

export enum PageEnum {
    list,
    add,
    edit
}