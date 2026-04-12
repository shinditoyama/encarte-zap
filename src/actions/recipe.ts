"use server";

import { db } from "@/db";
import { recipes, recipeIngredients, products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getRecipes() {
  /*const data = await db
    .select({
      id: recipes.id,
      title: recipes.title,
      description: recipes.description,
      imageUrl: recipes.imageUrl,
      product: {
        id: products.id,
        name: products.name,
        price: products.price,
        imageUrl: products.imageUrl,
      },
    })
    .from(recipes)
    .innerJoin(recipeIngredients, eq(recipes.id, recipeIngredients.recipeId))
    .innerJoin(products, eq(recipeIngredients.productId, products.id));*/

  const data = await db.query.recipes.findMany({
    with: {
      ingredients: {
        with: {
          product: {
            columns: {
              id: true,
              name: true,
              price: true,
              salePrice: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });

  return data;
}
