import Navbar from "@/components/Navbar";
import "./globals.css";
import { QueryProvider } from "./QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <nav className="shadow-sm py-1 bg-base-100">
          <Navbar></Navbar>
        </nav>
        <main className="container w-11/12 mx-auto">
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
