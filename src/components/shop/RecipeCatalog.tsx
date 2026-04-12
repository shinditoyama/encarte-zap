"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { RecipeCard } from "./RecipeCard";

export function RecipeCatalog({ recipes }: { recipes: IRecipe[] }) {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      //onMouseEnter={plugin.current.stop} // Opcional: para ao passar o mouse
      //onMouseLeave={plugin.current.reset} // Opcional: volta ao tirar o mouse
    >
      <CarouselContent className="-ml-2 md:-ml-4 py-4">
        {recipes.map((recipe) => (
          <CarouselItem
            key={recipe.id}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <RecipeCard recipe={recipe} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
