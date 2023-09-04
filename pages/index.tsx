import React, { useState } from "react";
import Head from "next/head";
import Masuk from "./masuk";


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Main Page</title>
      </Head>
      <Masuk />
    </div>
  );
}
