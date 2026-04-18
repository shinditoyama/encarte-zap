import { Footer } from "@/components/shop/Footer";
import { Header } from "@/components/shop/Header";
import { ScrollToTop } from "@/components/shop/ScrollToTop";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow bg-secondary">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
