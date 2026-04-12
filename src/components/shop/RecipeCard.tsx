"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useModal } from "@/store/use-modal";
import { IconChefHat, IconClock, IconUsers } from "@tabler/icons-react";

interface RecipeCardProps {
  recipe: IRecipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { openModal } = useModal();

  return (
    <Card
      className="product-card overflow-hidden cursor-pointer shadow-md hover:shadow-lg p-0 group"
      onClick={() => openModal(recipe)}
    >
      <CardHeader className="p-0 relative">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-2 left-2 text-white font-bold">
            <IconChefHat />
            <span>Receita</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="px-4 -mt-2">
        <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-1">
          {recipe.title}
        </h3>

        <p className="text-xs text-gray-500 mb-3 line-clamp-1">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-600 pb-4">
          <div className="flex items-center gap-1">
            <IconClock className="w-3 h-3" aria-hidden="true" />
            <span>{recipe.prepTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <IconUsers className="w-3 h-3" aria-hidden="true" />
            <span>{/*recipe.servings*/} porções</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
