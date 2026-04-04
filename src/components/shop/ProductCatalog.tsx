"use client";

import { sampleProducts } from "@/lib/mock";
import { ProductCard } from "./ProductCard";
import { useCart } from "@/store/use-cart";

export function ProductCatalog() {
  const { selectedDepartment } = useCart();

  const filteredProducts = sampleProducts.filter((p) => {
    return selectedDepartment === null
      ? p
      : p.department === selectedDepartment;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedDepartment === null || !selectedDepartment
            ? "Encarte Digital"
            : `Produtos em ${selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1)}`}
        </h2>
        <span className="text-sm text-gray-500">
          {filteredProducts.length} produtos encontrados
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
