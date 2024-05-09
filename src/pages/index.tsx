import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p>
        <Link href="/info/csr">CSR</Link>
      </p>
      <p>
        <Link href="/info/ssr">SSR</Link>
      </p>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink text-center bg-orange-200">
        Home header
      </header>
      <main className="grow">{page}</main>
      <footer className="flex-shrink text-center bg-orange-200">
        Home footer
      </footer>
    </div>
  );
};
