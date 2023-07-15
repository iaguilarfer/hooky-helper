import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "../contexts/appContext/AppContext";
import styles from "./page.module.scss";
import "semantic-ui-css/semantic.min.css";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body id="app" className={inter.className}>
          <main className={styles.main}>{children}</main>
        </body>
      </html>
    </AppProvider>
  );
}
