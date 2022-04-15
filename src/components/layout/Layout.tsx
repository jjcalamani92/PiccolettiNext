import Head from "next/head";
import { FC } from "react";
import { Header, Footer } from "../ui";
import { Sidenav } from "../ui/sidenav";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: any
}

export const Layout: FC<Props> = ({ title, children,  pageDescription, imageFullUrl}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }
      </Head>
      <Header/>
      <Sidenav/>



      <main
      >
        { children }
      </main>

      <Footer/>
    </>
  )
}
