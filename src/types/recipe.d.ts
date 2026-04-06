interface IRecipe {
  id: string;
  name: string;
  description: string;
  image: string;
  servings: number;
  prepTime: number;
  ingredients: IRecipeIngredient[];
}

interface IRecipeIngredient {
  productId: string;
  quantity: number;
}
