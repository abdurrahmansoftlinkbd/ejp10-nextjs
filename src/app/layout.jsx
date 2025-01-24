import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <nav className="shadow-sm py-1 bg-base-100">
          <Navbar></Navbar>
        </nav>
        <main className="container w-11/12 mx-auto">{children}</main>
      </body>
    </html>
  );
}
