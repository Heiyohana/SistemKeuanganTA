import NavSideBar from '@/pages/component/sidenavbar'
import Head from 'next/head'
import React from 'react'

const invoicePesanan = () => {
  return (
    <div className='w-screen h-screen m-0 flex container'>
      <Head>
        <title>Invoice Pesanan</title>
      </Head>
      <NavSideBar/>

      {/* Content */}
      <div className='absolute h-full w-4/5 right-0 justify-end p-5 bg-neutral-100 text-sm'>
        {/* Kop Invoice */}
        <div className='bg-blue-500 w-full h-fit p-3 text-white'>
          <h1 className='title font-bold text-center mb-2 text-2xl'>CV Karya Mandiri Sejahtera</h1>
          <p className='text-center font-semibold'>
            Perusahaan Paving block yang menerima pesanan paving bata, cacing, grass block, hebel, <br />
            uskup, dan lainnya. Menerima jasa pasang dan pengiriman. <br />
            Jalan Sukarame | Info Pemesanan : WA. 0812-3123-4678
          </p>
        </div>

        {/* Isi Invoice */}
        <div className='mt-3'>
          <div className='text-center text-lg font-bold'>INVOICE PESANAN</div>
          
        </div>
      </div>
    </div>
  )
}

export default invoicePesanan