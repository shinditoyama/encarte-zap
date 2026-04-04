import { sampleProducts } from "@/lib/mock";
import { ProductCard } from "@/components/shop/ProductCard";
import { DepartmentFilter } from "@/components/shop/DepartmentFilter";
import { ShoppingListSidebar } from "@/components/shop/ShoppingListSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section with Flash Deals */}
        {/*<section id="offers" className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Ofertas da Semana
            </h2>
            <p className="text-gray-500 text-lg">Garanta os melhores preços!</p>
          </div>
        </section> */}

        {/* Digital Catalog */}
        <section id="catalog" className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Encarte Digital
            </h2>
            <p className="text-gray-500 text-lg">
              Clique nos produtos para adicionar à sua lista
            </p>
          </div>

          <DepartmentFilter />

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {sampleProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <ShoppingListSidebar />
    </div>
  );
}
