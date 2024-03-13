import { Inter } from "next/font/google";
import Link from 'next/link';
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav class="main-nav">
        <ul>
      <li>
        <Link href="/">MCAG</Link>
      </li>
      <li>
        <Link href="/terminology">Terminology</Link>
      </li>
      <li>
        <Link href="/formulas">Formulas</Link>
      </li>
    </ul>
        </nav>
        {children}</body>
    </html>
  );
}
