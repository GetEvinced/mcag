import { Inter } from "next/font/google";
import "./styles/globals.css";
import MainNav from "./components/mainNav";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}</body>
    </html>
  );
}
