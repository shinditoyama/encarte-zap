"use server";

import { db } from "@/db";
import { categories, products } from "@/db/schema";
import { and, eq } from "drizzle-orm";

/*export const getProducts = async () => {
  const data = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.isPromo, true));
  return data;
};*/

export async function getProductsByCategory(slug: string | undefined) {
  try {
    const query = db
      .select({
        id: products.id,
        name: products.name,
        price: products.price,
        salePrice: products.salePrice,
        imageUrl: products.imageUrl,
        isPromo: products.isPromo,
      })
      .from(products)
      .innerJoin(categories, eq(products.categoryId, categories.id))
      .orderBy(products.name)
      .limit(20);

    // Construímos as condições de filtro
    const conditions = [
      eq(products.isPromo, true),
      eq(products.isActive, true),
    ];

    if (slug) {
      conditions.push(eq(categories.slug, slug));
    }

    // Executamos a query com os filtros aplicados
    const data = await query.where(and(...conditions));
    return data;
  } catch (error) {
    console.error("Erro no Select Action:", error);
    return [];
  }
}

/* 

export async function createProductAction(data: unknown) {
  // 1. Proteção: Verifica se o usuário é admin via Better Auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { error: "Não autorizado. Faça login para continuar." };
  }

  // 2. Validação dos dados com Zod
  const result = productSchema.safeParse(data);

  if (!result.success) {
    return { error: "Dados inválidos. Verifique os campos." };
  }

  try {
    // 3. Inserção no Banco com Drizzle
    await db.insert(products).values({
      name: result.data.name,
      price: result.data.price.toString(),
      salePrice: result.data.salePrice?.toString(),
      imageUrl: result.data.imageUrl,
      categoryId: result.data.categoryId,
      isPromo: result.data.isPromo,
      isActive: result.data.isActive,
    });

    // 4. Revalidação: Força o Next.js a atualizar o encarte digital
    revalidatePath("/"); 
    revalidatePath("/admin/produtos");

    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar produto:", error);
    return { error: "Erro interno ao salvar no banco de dados." };
  }
}

export const addTodo = async (id: number, text: string) => {
  await db.insert(todo).values({
    id: id,
    text: text,
  });
};
export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};
export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};
export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};

*/
