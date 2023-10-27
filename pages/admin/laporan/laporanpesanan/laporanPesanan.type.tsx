export interface ILaporanPesanan {
  noNota: string;
  tanggal: string;
  namaCust: string;
  noHpCust: string;
  alamatCust: string;
  csDesk: string;
  total: number;
  tglBayar: string;
  tipeBayar: string;
  bukti: string;
  file: string;
  sisaTagihan: string | number;
  status: string;
}

export const dummyLaporanPesanan: ILaporanPesanan[] = [
  {
    noNota: "KMS/06/23/1",
    tanggal: "1/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "08123456789",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "2/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/2",
    tanggal: "1/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "2/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/3",
    tanggal: "1/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "ikasept",
    total: 3981000,
    tglBayar: "1/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/4",
    namaCust: "Puput Alisha",
    tanggal: "2/6/2023",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "ikasept",
    total: 4700000,
    tglBayar: "2/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/5",
    tanggal: "2/6/2023",
    namaCust: "Raden Saleh",
    noHpCust: "086721316723",
    alamatCust: "PT Cahya Naluri, Tanjung Bintan",
    csDesk: "aguswin",
    total: 11325000,
    tglBayar: "2/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: 5000000,
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/6",
    tanggal: "3/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 2750000,
    tglBayar: "3/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/7",
    tanggal: "3/6/2023",
    namaCust: "Puput Alisha",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "aguswin",
    total: 2590000,
    tglBayar: "6/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/8",
    tanggal: "3/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "ikasept",
    total: 15750000,
    tglBayar: "10/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/9",
    tanggal: "4/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 2750000,
    tglBayar: "4/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/10",
    tanggal: "4/6/2023",
    namaCust: "Marella Putri",
    noHpCust: "08671238231",
    alamatCust: "PT IndoApril, Tangerang",
    csDesk: "ikasept",
    total: 15385000,
    tglBayar: "14/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: 6461700,
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/10",
    tanggal: "5/6/2023",
    namaCust: "Puput Alisha",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "aguswin",
    total: 4700000,
    tglBayar: "5/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/11",
    tanggal: "5/6/2023",
    namaCust: "Puput Alisha",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "aguswin",
    total: 4700000,
    tglBayar: "5/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 6700000,
    tglBayar: "7/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "Miahana",
    total: 3400000,
    tglBayar: "7/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/13",
    tanggal: "8/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "0965643287",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "-",
    tipeBayar: "-",
    bukti: "-",
    file: "-",
    sisaTagihan: "1.200.000",
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/10",
    tanggal: "5/6/2023",
    namaCust: "Puput Alisha",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "aguswin",
    total: 4700000,
    tglBayar: "5/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/11",
    tanggal: "5/6/2023",
    namaCust: "Puput Alisha",
    noHpCust: "08776312321",
    alamatCust: "Hotel Mawar, Kedaton",
    csDesk: "aguswin",
    total: 4700000,
    tglBayar: "5/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 6700000,
    tglBayar: "7/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "Miahana",
    total: 3400000,
    tglBayar: "7/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/13",
    tanggal: "8/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "0965643287",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "-",
    tipeBayar: "-",
    bukti: "-",
    file: "-",
    sisaTagihan: "1.200.000",
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 6700000,
    tglBayar: "7/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "Miahana",
    total: 3400000,
    tglBayar: "7/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/13",
    tanggal: "8/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "0965643287",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "-",
    tipeBayar: "-",
    bukti: "-",
    file: "-",
    sisaTagihan: "1.200.000",
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 6700000,
    tglBayar: "7/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "Miahana",
    total: 3400000,
    tglBayar: "7/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "/assets/element/BuktiTransfer.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/13",
    tanggal: "8/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "0965643287",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "-",
    tipeBayar: "-",
    bukti: "-",
    file: "-",
    sisaTagihan: "1.200.000",
    status: "belum lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Astuti Putri",
    noHpCust: "08987654321",
    alamatCust: "PT Sejahtera, Pringsewu",
    csDesk: "Miahana",
    total: 6700000,
    tglBayar: "7/6/2023",
    tipeBayar: "Cash",
    bukti: "view",
    file: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/12",
    tanggal: "7/6/2023",
    namaCust: "Kuntoro Joyo",
    noHpCust: "0965643287",
    alamatCust: "Kantor Cabang Pertamina, Metro",
    csDesk: "Miahana",
    total: 3400000,
    tglBayar: "7/6/2023",
    tipeBayar: "TF",
    bukti: "view",
    file: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
    sisaTagihan: "-",
    status: "lunas",
  },
  {
    noNota: "KMS/06/23/13",
    tanggal: "8/6/2023",
    namaCust: "Andi Purnomo",
    noHpCust: "0965643287",
    alamatCust: "PT Mandiri Jaya, Sekincau, Lampung Barat",
    csDesk: "Miahana",
    total: 1200000,
    tglBayar: "-",
    tipeBayar: "-",
    bukti: "-",
    file: "-",
    sisaTagihan: "1.200.000",
    status: "belum lunas",
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
