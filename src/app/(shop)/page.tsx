import { getAllCategories } from "@/actions/category";
import { getProductsByCategory } from "@/actions/product";
import { getAllRecipes } from "@/actions/recipe";
import { DepartmentFilter } from "@/components/shop/DepartmentFilter";
import { ProductCard } from "@/components/shop/ProductCard";
import { RecipeCatalog } from "@/components/shop/RecipeCatalog";
import { RecipeModal } from "@/components/shop/RecipeModal";
import { IconBasket, IconChefHat } from "@tabler/icons-react";

type SearchParams = Promise<{ category?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allCategories = await getAllCategories();
  // const allRecipes = await getAllRecipes();

  const { category } = await searchParams;
  const filteredProducts = await getProductsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Recipes Section - Cross-selling */}
      {/* <section id="recipes" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <IconChefHat className="w-8 h-8" />
            Receitas do Chef
          </h2>
          <p className="text-gray-500 text-lg">
            Clique em uma receita para adicionar os ingredientes à lista
          </p>
        </div>

        <RecipeCatalog recipes={allRecipes} />
      </section> */}

      {/* Digital Catalog */}
      <section id="catalog" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <IconBasket className="w-8 h-8" />
            Encarte Digital
          </h2>
          <p className="text-gray-500 text-lg">
            Clique nos produtos para adicionar à sua lista
          </p>
        </div>

        <DepartmentFilter categories={allCategories} />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {!category
                ? "Todos os produtos"
                : `Produtos em ${category.charAt(0).toUpperCase() + category.slice(1)}`}
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
          {filteredProducts?.length === 0 && (
            <h2 className="text-2xl font-bold">Produto não encontrado.</h2>
          )}
        </div>
      </section>
      <RecipeModal />
    </div>
  );
}
