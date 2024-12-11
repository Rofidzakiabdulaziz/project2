import Navbar from "../components/Navbar";
import { EdgeStoreProvider } from '@/app/lib/edgestore';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        {/* <main className="p-4">{children}</main> */}
      </body>
    </html>
  );
}
