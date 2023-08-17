import React from "react";
import Head from "next/head";
import Masuk from "./masuk";
import Coba from "./coba";
import NavSideBar from "./component/sidenavbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
      </Head>
      {/* <Masuk /> */}
      {/* <Coba /> */}
      <NavSideBar />
    </div>
  );
}
