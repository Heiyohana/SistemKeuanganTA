export interface ILaporanPesanan {
  tanggal: string;
  namaCust: string;
  noHpCust: string;
  csDesk: string;
  total: number;
  tglBayar: string;
  tipeBayar: string;
  bukti: string;
  sisaTagihan: number;
  status: string;
}

// export const dummyLaporanPesanan: ILaporanPesanan[]=[{
//     tanggal: "2023-06-01",
//     namaCust: "Andi Purnomo",
//     noHpCust: "08123456789",
//     csDesk: "",
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// },{
//     tanggal: ,
//     namaCust: ,
//     noHpCust: ,
//     csDesk: ,
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// },{
//     tanggal: ,
//     namaCust: ,
//     noHpCust: ,
//     csDesk: ,
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// },{
//     tanggal: ,
//     namaCust: ,
//     noHpCust: ,
//     csDesk: ,
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// },{
//     tanggal: ,
//     namaCust: ,
//     noHpCust: ,
//     csDesk: ,
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// },{
//     tanggal: ,
//     namaCust: ,
//     noHpCust: ,
//     csDesk: ,
//     total: ,
//     tglBayar: ,
//     tipeBayar: ,
//     bukti: ,
//     sisaTagihan: ,
//     status: ,
// }]

export enum PageEnum {
  list,
  add,
  edit,
}
