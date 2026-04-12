interface IRecipe {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  prepTime: string | null;
  ingredients: IRecipeIngredient[];
}

interface IRecipeIngredient {
  id: number;
  recipeId: number | null;
  productId: number | null;
  quantityText: string | null;
  product: {
    id: number;
    name: string;
    price: string;
    salePrice: string | null;
    imageUrl: string;
  } | null;
}
