import { DepartmentFilter } from "@/components/shop/DepartmentFilter";
import { ProductCatalog } from "@/components/shop/ProductCatalog";
import { RecipeCard } from "@/components/shop/RecipeCard";
import { RecipeModal } from "@/components/shop/RecipeModal";
import { ShoppingList } from "@/components/shop/ShoppingList";
import { recipes } from "@/lib/mock";
import { IconBasket, IconChefHat } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Recipes Section - Cross-selling */}
        <section id="recipes" className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
              <IconChefHat className="w-8 h-8" />
              Receitas do Chef
            </h2>
            <p className="text-gray-500 text-lg">
              Clique em uma receita para adicionar os ingredientes à lista
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

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

          <DepartmentFilter />

          <ProductCatalog />
        </section>
      </main>

      <ShoppingList />
      <RecipeModal />
    </div>
  );
}
