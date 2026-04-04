import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon } from "@hugeicons/core-free-icons";

export function ProductCard({ product }: any) {
  return (
    <div className="product-card bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer border border-gray-100">
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2">
          <Badge className="bg-red-500 text-white rounded-md">
            -{product.discount}%
          </Badge>
        </div>

        {/* Flash Deal Badge */}
        {product.isFlashDeal && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
            <HugeiconsIcon icon={ZapIcon} strokeWidth={2} />
            RELÂMPAGO
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-bold text-green-600">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-sm text-gray-400 line-through">
            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
          </span>
        </div>

        {/* Add to List Button */}
      </div>
    </div>
  );
}
