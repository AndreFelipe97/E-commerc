import Head from "next/head";
import { ReactNode } from "react";
import { Banner } from "../Benner";
import { Footer } from "../Footer";
import { Header } from "../Header";

type LayoutDefaultProps = {
  title: string;
  children: ReactNode;
};

export function LayoutDefault({ title, children }: LayoutDefaultProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Banner />
      {children}
      <Footer />
    </>
  );
}
