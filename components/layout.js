import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>The Log</title>
        <meta name="description" content="A personal log" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
