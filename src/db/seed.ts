import "dotenv/config"; // IMPORTANTE: Carrega o .env antes de tudo
import { db } from "./index";
import { categoriesTable, productsTable } from "./schema";

async function main() {
  console.log("🌱 Iniciando o seeding...");

  try {
    // 1. Limpar tabelas (opcional, cuidado em produção!)
    // await db.delete(recipeIngredientsTable);
    // await db.delete(recipesTable);
    // await db.delete(productsTable);
    // await db.delete(categoriesTable);

    // 2. Criar Categorias
    const [catAcog, catBeb, catFrut, catHort, catLat, catPad] = await db
      .insert(categoriesTable)
      .values([
        { name: "Açougue", slug: "acougue" },
        { name: "Bebidas", slug: "bebidas" },
        { name: "Frutas", slug: "frutas" },
        { name: "Hortifruti", slug: "hortifruti" },
        { name: "Laticínios", slug: "laticinios" },
        { name: "Padaria", slug: "padaria" },
      ])
      .returning();

    // 3. Criar Produtos
    await db
      .insert(productsTable)
      .values([
        {
          name: "Frango Inteiro Congelado",
          price: "19.90",
          salePrice: "12.90",
          imageUrl:
            "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
          unit: "kg",
          isPromo: true,
          categoryId: catAcog.id,
        },
        {
          name: "Pão Francês",
          price: "8.90",
          salePrice: "5.90",
          imageUrl:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
          unit: "kg",
          isPromo: true,
          categoryId: catPad.id,
        },
        {
          name: "Leite Integral 1L",
          price: "5.90",
          imageUrl:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
          unit: "un",
          categoryId: catLat.id,
        },
        {
          name: "Suco de Laranja 1L",
          price: "9.90",
          salePrice: "6.90",
          imageUrl:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
          unit: "un",
          isPromo: true,
          categoryId: catBeb.id,
        },
        {
          name: "Maçã Fuji kg",
          price: "6.90",
          imageUrl:
            "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
          unit: "kg",
          categoryId: catFrut.id,
        },
        {
          name: "Carne Moída kg",
          price: "34.90",
          salePrice: "24.90",
          imageUrl:
            "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400",
          unit: "kg",
          isPromo: true,
          categoryId: catAcog.id,
        },
      ])
      .returning();

    console.log("✅ Seeding finalizado com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    process.exit(1);
  }
}

main();
