"use server";

import { db } from "@/db";
import { categories } from "@/db/schema";

export async function getCategories() {
  const data = await db.select().from(categories);
  return data;
}
