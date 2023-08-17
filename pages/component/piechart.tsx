import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Paving Bata",
    sales: 12000,
  },
  {
    name: "Paving Cacing",
    sales: 9000,
  },
  {
    name: "Paving Hexagon",
    sales: 12000,
  },
  {
    name: "Hebel",
    sales: 5000,
  },
  {
    name: "Uskup",
    sales: 3500,
  },
  {
    name: "Lainnya",
    sales: 2700,
  },
];

function piechart() {
  return (
    <div className="rounded-lg bg-white shadow-sm h-max p-3">
      <div>
        <div className="text-lg font-bold">Diagram Produk Terjual</div>
        <div className="p-0 flex flex-row items-center justify-center">
          <DonutChart
            className="w-2/4 p-0 top-0 right-0"
            data={cities}
            category="sales"
            index="name"
            colors={["red", "yellow", "green", "lime", "cyan", "violet"]}
          />
          {/* Legenda */}
          <div className="w-3/4 p-3 items-center justify-center">
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-red-500"></div>
              <p className="text-sm">Pav Bata</p>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-yellow-300"></div>
              <p className="text-sm">Pav Cacing</p>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-green-300"></div>
              <p className="text-sm">Pav Hexagon</p>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-lime-300"></div>
              <p className="text-sm">Hebel</p>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-cyan-300"></div>
              <p className="text-sm">Uskup</p>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex w-2 h-2 rounded-full mr-3 bg-violet-500"></div>
              <p className="text-sm">Lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default piechart;
