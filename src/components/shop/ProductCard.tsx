"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCart } from "@/store/use-cart";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, removeFromList, updateQuantity, items } = useCart();

  const inList = items.find((item) => item.id === product.id);
  const quantity = inList?.quantity || 0;

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromList(product.id);
    }
  };

  return (
    <Card className="overflow-hidden shadow hover:shadow-lg p-0 group">
      <CardHeader className="p-0 relative">
        <Badge
          variant="default"
          className="absolute top-2 left-2 z-10 bg-red-500 text-white border-red-600"
        >
          -{product.discount}%
        </Badge>
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="px-4">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-bold text-lg leading-tight min-h-14 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-2xl font-black text-primary">
            {formatCurrency(product.price)}
          </span>
          <span className="text-sm line-through text-muted-foreground">
            {formatCurrency(product.originalPrice)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 -mt-2">
        {quantity > 0 ? (
          <div className="flex items-center bg-green-50 rounded-lg p-1 w-full">
            <Button onClick={handleRemoveClick} className="rounded-md">
              <IconMinus />
            </Button>
            <span className="flex-1 text-center font-medium text-green-700">
              {quantity} na lista
            </span>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                addItem(product);
              }}
              className="rounded-md"
            >
              <IconPlus />
            </Button>
          </div>
        ) : (
          <Button
            size="lg"
            onClick={() => {
              addItem(product);
            }}
            className="rounded-md w-full font-bold uppercase tracking-wider"
          >
            Adicionar à lista
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
