import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
