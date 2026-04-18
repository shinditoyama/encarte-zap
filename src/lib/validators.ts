import * as z from "zod";

export const categorySchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  slug: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
});

export const productSchema = z.object({
  name: z.string().min(1, "Nome Obrigatório"),
  price: z.string().min(1, "Preço obrigatório"),
  imageUrl: z.string().url("URL inválida"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
export type ProductFormValues = z.infer<typeof productSchema>;
