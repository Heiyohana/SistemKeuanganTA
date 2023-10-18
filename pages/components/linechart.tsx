import { Card, Title, LineChart } from "@tremor/react";
import styles from "@/pages/dashboard/dashboard.module.css"

const chartdata = [
  { date: "2/6", Pemasukan: 2.04, Pengeluaran: 1.53 },
  { date: "3/6", Pemasukan: 2.78, Pengeluaran: 0.45 },
  { date: "4/6", Pemasukan: 3.78, Pengeluaran: 2.3 },
  { date: "5/6", Pemasukan: 4.5, Pengeluaran: 0.31 },
  { date: "6/6", Pemasukan: 2.5, Pengeluaran: 0.9 },
  { date: "7/6", Pemasukan: 1.25, Pengeluaran: 1.23 },
  { date: "8/6", Pemasukan: 2.15, Pengeluaran: 1.67 },
  { date: "9/6", Pemasukan: 3.5, Pengeluaran: 2.3 },
  { date: "10/6", Pemasukan: 3.2, Pengeluaran: 1.0 },
  { date: "11/6", Pemasukan: 2.9, Pengeluaran: 0.2 },
  { date: "12/6", Pemasukan: 2.8, Pengeluaran: 0.9 },
  { date: "13/6", Pemasukan: 2.6, Pengeluaran: 1.2 },
  { date: "14/6", Pemasukan: 3.0, Pengeluaran: 2.2 },
  { date: "15/6", Pemasukan: 3.5, Pengeluaran: 1.41 },
  { date: "16/6", Pemasukan: 4.32, Pengeluaran: 0.89 },
  { date: "17/6", Pemasukan: 3.24, Pengeluaran: 2.87 },
  { date: "18/6", Pemasukan: 3.53, Pengeluaran: 3.12 },
  { date: "19/6", Pemasukan: 2.7, Pengeluaran: 1.89 },
  { date: "20/6", Pemasukan: 3.9, Pengeluaran: 0.2 },
  { date: "21/6", Pemasukan: 3.75, Pengeluaran: 0.16 },
  { date: "22/6", Pemasukan: 3.21, Pengeluaran: 0.75 },
  { date: "23/6", Pemasukan: 4.5, Pengeluaran: 1.53 },
  { date: "24/6", Pemasukan: 4.7, Pengeluaran: 1.53 },
  { date: "25/6", Pemasukan: 4.9, Pengeluaran: 1.53 },
  { date: "26/6", Pemasukan: 5.5, Pengeluaran: 1.53 },
  { date: "27/6", Pemasukan: 6.1, Pengeluaran: 1.53 },
  { date: "28/6", Pemasukan: 6.5, Pengeluaran: 1.53 },
  { date: "29/6", Pemasukan: 6.8, Pengeluaran: 1.53 },
  { date: "23/6", Pemasukan: 7.0, Pengeluaran: 1.53 },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

function linechart() {
  return (
    <Card className="p-3">
      <h2 className={`${styles.h2}`}>Ringkasan Transaksi</h2>
      <LineChart
        className="mt-3"
        data={chartdata}
        index="date"
        categories={["Pemasukan", "Pengeluaran"]}
        colors={["green", "red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={35}
      />
    </Card>
  );
}

export default linechart;
