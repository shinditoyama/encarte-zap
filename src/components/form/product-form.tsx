"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { productSchema, ProductFormValues } from "@/lib/validators";
import { FormFieldInput } from "./form-field-input";
import { toast } from "sonner";
import { createProduct, updateProduct } from "@/actions/product";

interface ProductFormProps {
  initialData?: IProduct;
  onSuccess?: () => void;
}

export function ProductForm({ initialData, onSuccess }: ProductFormProps) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || { name: "", price: "", imageUrl: "" },
  });

  async function onSubmit(values: ProductFormValues) {
    if (initialData) {
      await updateProduct(initialData?.id, values);
      toast.success("Categoria atualizado");
    } else {
      await createProduct(values);
      toast.success("Categoria criado");
    }

    if (!initialData) form.reset();
    onSuccess?.(); // Fecha o modal ou limpa o form
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FieldGroup>
        <FormFieldInput
          control={form.control}
          name="name"
          label="Nome"
          placeholder="Digite o nome da categoria"
        />
        <FormFieldInput
          control={form.control}
          name="price"
          label="Preço"
          placeholder="Digite o preço do produto"
        />
      </FieldGroup>

      <Button type="submit" className="w-full">
        {initialData ? "Atualizar Produto" : "Criar Produto"}
      </Button>
    </form>
  );
}
