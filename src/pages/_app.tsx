import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import "swiper/css";

const MyApp: AppType<{ session: Session | null; title: string }> = ({
  Component,
  pageProps: { session, title, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
