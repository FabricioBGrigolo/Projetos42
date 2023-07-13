import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio do Fabrício Grigolo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        {children}
        <script
          async
          src="https://kit.fontawesome.com/f99677efee.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
