import type { Metadata } from "next";
import Providers from "./providers";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: "Cattle Management System",
  description: "Fermada chorvani boshqarish tizimi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body style={{ margin: 0 }}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}