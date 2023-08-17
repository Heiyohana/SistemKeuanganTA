import React from "react";

function HeadButton() {
  return (
    <div>
      {/* Button */}
      <div className="flex flex-row justify-center p-2 items-center">
        <button className="rounded-lg bg-blue-500 text-white px-4 py-2 mr-2">
          Tambah Data
        </button>
        <input
          className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2"
          type="search"
          name="cari"
          id="cari"
          placeholder="Cari"
        />
        <button className="rounded-lg bg-blue-500 text-white px-4 py-2 mr-2">
          Export Data
        </button>
      </div>
    </div>
  );
}

export default HeadButton;
