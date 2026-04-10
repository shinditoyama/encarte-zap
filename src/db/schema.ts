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
export const categoriesTable = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

// Produtos
export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  salePrice: numeric("sale_price", { precision: 10, scale: 2 }), // Preço promocional
  imageUrl: text("image_url").notNull(),
  unit: text("unit").default("un"), // 'un', 'kg', 'g', 'l'
  isPromo: boolean("is_promo").default(false),
  isActive: boolean("is_active").default(true),
  categoryId: integer("category_id").references(() => categoriesTable.id),
  createdAt: timestamp("created_at").defaultNow(),
});
