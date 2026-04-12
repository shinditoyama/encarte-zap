import "dotenv/config"; // IMPORTANTE: Carrega o .env antes de tudo
import { db } from "./index";
import { categories, products, recipes, recipeIngredients } from "./schema";

async function main() {
  console.log("🌱 Iniciando o seeding...");

  try {
    // 1. Limpar tabelas (opcional, cuidado em produção!)
    await db.delete(recipeIngredients);
    await db.delete(recipes);
    await db.delete(products);
    await db.delete(categories);

    // 2. Inserir Categorias
    const categoryList = await db
      .insert(categories)
      .values([
        { name: "Açougue", slug: "acougue" },
        { name: "Hortifruti", slug: "hortifruti" },
        { name: "Laticínios", slug: "laticinios" },
        { name: "Mercearia", slug: "mercearia" },
        { name: "Padaria", slug: "padaria" },
      ])
      .returning();

    const [carne, horta, leite, mercado, pao] = categoryList;

    // 3. Inserir Produtos
    const productList = await db
      .insert(products)
      .values([
        {
          name: "Arroz Branco 5kg",
          price: "29.90",
          salePrice: "24.90",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        },
        {
          name: "Feijão Carioca 1kg",
          price: "8.50",
          salePrice: "7.50",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1551462147-3a88568b65ee?w=400",
        },
        {
          name: "Macarrão Espaguete 500g",
          price: "4.50",
          salePrice: "3.50",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400",
        },
        {
          name: "Molho de Tomate Sachê",
          price: "2.80",
          salePrice: "2.20",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1601567267023-559c55ea3b49?w=400",
        },
        {
          name: "Carne Moída Patinho 1kg",
          price: "38.90",
          salePrice: "34.90",
          isPromo: true,
          categoryId: carne.id,
          imageUrl:
            "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400",
        },
        {
          name: "Peito de Frango 1kg",
          price: "22.50",
          salePrice: "19.90",
          isPromo: true,
          categoryId: carne.id,
          imageUrl:
            "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
        },
        {
          name: "Batata Inglesa kg",
          price: "5.90",
          salePrice: "4.50",
          isPromo: true,
          categoryId: horta.id,
          imageUrl:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
        },
        {
          name: "Leite Integral 1L",
          price: "5.20",
          salePrice: "4.90",
          isPromo: true,
          categoryId: leite.id,
          imageUrl:
            "https://images.unsplash.com/photo-1550583724-125581cc255b?w=400",
        },
        {
          name: "Manteiga 200g",
          price: "12.90",
          salePrice: "9.90",
          isPromo: true,
          categoryId: leite.id,
          imageUrl:
            "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
        },
        {
          name: "Cebola kg",
          price: "4.20",
          salePrice: "3.90",
          isPromo: true,
          categoryId: horta.id,
          imageUrl:
            "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
        },
        {
          name: "Alho Porção 200g",
          price: "6.00",
          salePrice: "5.00",
          isPromo: true,
          categoryId: horta.id,
          imageUrl:
            "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400",
        },
        {
          name: "Óleo de Soja 900ml",
          price: "7.30",
          salePrice: "5.90",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        },
        {
          name: "Sal Refinado 1kg",
          price: "3.50",
          salePrice: "2.50",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1626197031107-c25237043f94?w=400",
        },
        {
          name: "Açúcar Refinado 1kg",
          price: "4.90",
          salePrice: "3.50",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1581514392419-79883652c710?w=400",
        },
        {
          name: "Ovos Brancos 12un",
          price: "10.90",
          salePrice: "9.50",
          isPromo: true,
          categoryId: mercado.id,
          imageUrl:
            "https://images.unsplash.com/photo-1582722872445-44c507c308f1?w=400",
        },
        {
          name: "Cenoura kg",
          price: "4.80",
          salePrice: "3.90",
          isPromo: true,
          categoryId: horta.id,
          imageUrl:
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
        },
        {
          name: "Tomate Italiano kg",
          price: "7.90",
          salePrice: "6.90",
          isPromo: true,
          categoryId: horta.id,
          imageUrl:
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
        },
        {
          name: "Queijo Muçarela 200g",
          price: "14.50",
          salePrice: "10.90",
          isPromo: true,
          categoryId: leite.id,
          imageUrl:
            "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400",
        },
        {
          name: "Presunto Cozido 200g",
          price: "9.90",
          salePrice: "8.90",
          isPromo: true,
          categoryId: leite.id,
          imageUrl:
            "https://images.unsplash.com/photo-1524438418349-6803c5a0fad0?w=400",
        },
        {
          name: "Pão de Forma 450g",
          price: "7.50",
          salePrice: "6.50",
          isPromo: true,
          categoryId: pao.id,
          imageUrl:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
        },
      ])
      .returning();

    console.log("✅ 20 Produtos inseridos.");

    // 4. Inserir 8 Receitas
    const recipeList = await db
      .insert(recipes)
      .values([
        {
          title: "Macarrão à Bolonhesa",
          description: "Clássico molho de carne moída com tomate.",
          imageUrl:
            "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800",
        },
        {
          title: "Arroz e Feijão Caseiro",
          description: "A base perfeita da refeição brasileira.",
          imageUrl:
            "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=800",
        },
        {
          title: "Frango com Batata Assada",
          description: "Coxa e sobrecoxa suculentas com batatas.",
          imageUrl:
            "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800",
        },
        {
          title: "Omelete de Legumes",
          description: "Refeição rápida e saudável.",
          imageUrl:
            "https://images.unsplash.com/photo-1510627489930-0c1b0ba003e9?w=800",
        },
        {
          title: "Purê de Batata Cremoso",
          description: "Feito com leite e manteiga.",
          imageUrl:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        },
        {
          title: "Sanduíche Misto Quente",
          description: "Lanche rápido com queijo e presunto.",
          imageUrl:
            "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?w=800",
        },
        {
          title: "Sopa de Carne com Legumes",
          description: "Nutritiva para os dias frios.",
          imageUrl:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
        },
        {
          title: "Arroz Carreteiro Simples",
          description: "Aproveitando a carne moída e temperos.",
          imageUrl:
            "https://images.unsplash.com/photo-1512058560366-cd242959b4fe?w=800",
        },
      ])
      .returning();

    // Mapeamos os produtos por nome para facilitar a associação manual aqui no seed
    const p = (name: string) =>
      productList.find((prod) => prod.name === name)?.id!;

    // 5. Conectar Ingredientes (Tabela intermédia)
    await db.insert(recipeIngredients).values([
      // Bolonhesa
      {
        recipeId: recipeList[0].id,
        productId: p("Macarrão Espaguete 500g"),
        quantityText: "500g",
      },
      {
        recipeId: recipeList[0].id,
        productId: p("Carne Moída Patinho 1kg"),
        quantityText: "500g",
      },
      {
        recipeId: recipeList[0].id,
        productId: p("Molho de Tomate Sachê"),
        quantityText: "1 unidade",
      },
      // Arroz e Feijão
      {
        recipeId: recipeList[1].id,
        productId: p("Arroz Branco 5kg"),
        quantityText: "2 xícaras",
      },
      {
        recipeId: recipeList[1].id,
        productId: p("Feijão Carioca 1kg"),
        quantityText: "1 xícara",
      },
      {
        recipeId: recipeList[1].id,
        productId: p("Cebola kg"),
        quantityText: "1 unidade",
      },
      // Frango com Batata
      {
        recipeId: recipeList[2].id,
        productId: p("Peito de Frango 1kg"),
        quantityText: "1kg",
      },
      {
        recipeId: recipeList[2].id,
        productId: p("Batata Inglesa kg"),
        quantityText: "4 unidades",
      },
      {
        recipeId: recipeList[2].id,
        productId: p("Óleo de Soja 900ml"),
        quantityText: "a gosto",
      },
      // Omelete
      {
        recipeId: recipeList[3].id,
        productId: p("Ovos Brancos 12un"),
        quantityText: "3 unidades",
      },
      {
        recipeId: recipeList[3].id,
        productId: p("Tomate Italiano kg"),
        quantityText: "1 unidade",
      },
      {
        recipeId: recipeList[3].id,
        productId: p("Cenoura kg"),
        quantityText: "meia unidade",
      },
      // Purê
      {
        recipeId: recipeList[4].id,
        productId: p("Batata Inglesa kg"),
        quantityText: "1kg",
      },
      {
        recipeId: recipeList[4].id,
        productId: p("Leite Integral 1L"),
        quantityText: "200ml",
      },
      {
        recipeId: recipeList[4].id,
        productId: p("Manteiga 200g"),
        quantityText: "1 colher",
      },
      // Misto Quente
      {
        recipeId: recipeList[5].id,
        productId: p("Pão de Forma 450g"),
        quantityText: "2 fatias",
      },
      {
        recipeId: recipeList[5].id,
        productId: p("Queijo Muçarela 200g"),
        quantityText: "1 fatia",
      },
      {
        recipeId: recipeList[5].id,
        productId: p("Presunto Cozido 200g"),
        quantityText: "1 fatia",
      },
      // Sopa
      {
        recipeId: recipeList[6].id,
        productId: p("Carne Moída Patinho 1kg"),
        quantityText: "300g",
      },
      {
        recipeId: recipeList[6].id,
        productId: p("Cenoura kg"),
        quantityText: "2 unidades",
      },
      {
        recipeId: recipeList[6].id,
        productId: p("Batata Inglesa kg"),
        quantityText: "2 unidades",
      },
      // Arroz Carreteiro
      {
        recipeId: recipeList[7].id,
        productId: p("Arroz Branco 5kg"),
        quantityText: "2 xícaras",
      },
      {
        recipeId: recipeList[7].id,
        productId: p("Carne Moída Patinho 1kg"),
        quantityText: "200g",
      },
      {
        recipeId: recipeList[7].id,
        productId: p("Cebola kg"),
        quantityText: "1 unidade",
      },
    ]);

    console.log("✅ 8 Receitas e Ingredientes conectados.");
    console.log("✅ Seeding finalizado com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    process.exit(1);
  }
}

main();
