"use server";

import { db } from "@/db";
import { categories, products } from "@/db/schema";
import { CategoryFormValues, categorySchema } from "@/lib/validators";
import { eq, count } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getAllCategories() {
  const data = await db.select().from(categories);
  return data;
}

export async function getProductsCountByCategory() {
  const result = await db
    .select({
      id: categories.id,
      name: categories.name,
      total: count(products.id),
    })
    .from(categories)
    .leftJoin(products, eq(categories.id, products.categoryId))
    .groupBy(categories.id, categories.name);

  return result;
}

// CREATE
export async function createCategory(data: CategoryFormValues) {
  const result = categorySchema.safeParse(data);

  if (!result.success) return { error: "Dados inválidos" };

  try {
    await db.insert(categories).values(result.data);
    // revalidatePath("/dashboard/product");
    return { success: true };
  } catch (error) {
    return { error: "Erro ao salvar no banco de dados" };
  }
}

// UPDATE
export async function updateCategory(id: number, data: CategoryFormValues) {
  await db.update(categories).set(data).where(eq(categories.id, id));
  // revalidatePath("/dashboard/product");
}

// DELETE
export async function deleteCategory(id: number) {
  try {
    await db.delete(categories).where(eq(categories.id, id));
    // revalidatePath("/dashboard/product", "page");
    return { success: true };
  } catch (error) {
    return { error: "Erro ao deletar" };
  }
}
