import React from 'react'

const deletewarn = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full">
      <div className="w-80 p-5flex flex-col bg-neutral-50 rounded-md items-center justify-center relative">
        <p className="justify-center items-center text-center p-3">
          Apakah Anda yakin ingin menghapus data ini?
        </p>
        <div className="flex flex-row gap-4 justify-center pb-3">
          <div className="group flex bg-white border border-blue-500 rounded-md p-2 w-20 h-8 font-semibold text-blue-600 items-center justify-center">
            <button>Ya</button>
          </div>
          <div className="group flex bg-blue-500 rounded-md p-2 w-20 h-8 font-semibold text-white items-center justify-center">
            <button>Tidak</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default deletewarn