import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "./shared/header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kireikki</title>
        <meta name="description" content="Kireikki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
