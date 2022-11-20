import React from "react";
import Head from "next/head";
import { Rubik } from "@next/font/google";
import cx from "classnames";
import Header from "./header";
import Sidebar from "./sidebar";

const rubik = Rubik({
  subsets: ["latin"],
});

const Layout: React.FC<React.PropsWithChildren & { title: string }> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title} - Kireikku</title>
        <meta name="description" content="Kireikku Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx("container", rubik.className)}>
        <Header />
        <div className="flex flex-col-reverse md:flex-row">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
