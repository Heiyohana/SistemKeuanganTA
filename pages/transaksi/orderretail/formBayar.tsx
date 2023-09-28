import React from 'react';

const formBayar = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="w-[25%] flex flex-col mb-2 bg-neutral-50 p-5 rounded-md relative">
        <div>
          {/* ikon X pada form pesanan */}
          <button className="text-black cursor-pointer text-2xl absolute top-2 right-4">
            &times;
          </button>

          <div className="mb-3">
            <p>Sub Total Pesanan Anda: </p>
            <p>Nominal</p>
            <span>Pilih Metode Pembayaran Anda!</span>
            <div>
              <input type="radio" id="dp1" name="pembayaran" value={""} />
              <label htmlFor="">DP 1 (30%)</label>
              <br />
              <input type="radio" id="dp1" name="pembayaran" value={""} />
              <label htmlFor="">DP 2 (40%)</label>
              <br />
              <input type="radio" id="dp1" name="pembayaran" value={""} />
              <label htmlFor="">Pelunasan</label>
              <br />
            </div>

            <span>Pilih Jenis Pembayaran Anda!</span>
            <div>
              <input type="radio" id="dp1" name="pembayaran" value={""} />
              <label htmlFor="">Cash</label>
              <br />
              <input type="radio" id="dp1" name="pembayaran" value={""} />
              <label htmlFor="">TF</label>
              <br />
            </div>

            <div>
              <span>Diskon</span>
              <input type="radio" id="dp1" name="pembayaran" />
            </div>

            <div>
              <span>Total Biaya</span>
              <p>Nominal</p>
            </div>

            <span>Masukan uang pembayaran:</span>
            {/* <input type="radio" id="dp1" name="pembayaran" value={""} /> */}

            <span>Masukan uang pembayaran:</span>
            {/* Choose FIle  - Tidak ada File yang Terpilih */}
          </div>
        </div>
        
        <button type="submit">Lanjut</button>
      </form>
    </div>
  );
}

export default formBayar