import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan School System",
  description: "Next.js Loan School System",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
