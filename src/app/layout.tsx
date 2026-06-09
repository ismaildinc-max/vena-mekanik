import VMFloatingActions from "@/components/VMFloatingActions";
import type { Metadata } from "next";
import VMHeader from "@/components/VMHeader";
import VMFooter from "@/components/VMFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vena Mekanik | Mekanik Tesisat ve Taahhüt Hizmetleri",
  description:
    "Vena Mekanik; endüstriyel ve ticari projelerde mekanik tesisat, mühendislik, projelendirme ve anahtar teslim taahhüt hizmetleri sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <div className="vm-site-scroll">
          <VMHeader />
          {children}
          <VMFooter />
          <VMFloatingActions />
        </div>
      </body>
    </html>
  );
}