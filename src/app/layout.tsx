import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./components/header"

export const metadata: Metadata = {
  title: "AirdropApp",
};

export default function RootLayout(props: { children: ReactNode })
{
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
