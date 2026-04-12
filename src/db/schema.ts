import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  numeric,
  serial,
} from "drizzle-orm/pg-core";

// Categorias (Hortifruti, Açougue, etc.)
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

// Produtos
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  salePrice: numeric("sale_price", { precision: 10, scale: 2 }), // Preço promocional
  imageUrl: text("image_url").notNull(),
  unit: text("unit").default("un"), // 'un', 'kg', 'g', 'l'
  isPromo: boolean("is_promo").default(false),
  isActive: boolean("is_active").default(true),
  categoryId: integer("category_id").references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Receitas
export const recipes = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  prepTime: text("prep_time"), // Ex: "30 min"
});

// Relacionamento Ingredientes <-> Produtos (A chave do cross-selling)
export const recipeIngredients = pgTable("recipe_ingredients", {
  id: serial("id").primaryKey(),
  recipeId: integer("recipe_id").references(() => recipes.id, {
    onDelete: "cascade",
  }),
  productId: integer("product_id").references(() => products.id, {
    onDelete: "cascade",
  }),
  quantityText: text("quantity_text"), // Ex: "1 pacote", "500g"
});

// 4. Definição das Relações (Drizzle Relations)
export const recipesRelations = relations(recipes, ({ many }) => ({
  ingredients: many(recipeIngredients),
}));

export const productsRelations = relations(products, ({ many }) => ({
  usedInRecipes: many(recipeIngredients),
}));

export const recipeIngredientsRelations = relations(
  recipeIngredients,
  ({ one }) => ({
    recipe: one(recipes, {
      fields: [recipeIngredients.recipeId],
      references: [recipes.id],
    }),
    product: one(products, {
      fields: [recipeIngredients.productId],
      references: [products.id],
    }),
  }),
);
