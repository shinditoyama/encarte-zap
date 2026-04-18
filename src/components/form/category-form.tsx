"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { categorySchema, CategoryFormValues } from "@/lib/validators";
import { FormFieldInput } from "./form-field-input";
import { createCategory, updateCategory } from "@/actions/category";
import { toast } from "sonner";

interface CategoryFormProps {
  initialData?: ICategory;
  onSuccess?: () => void;
}

export function CategoryForm({ initialData, onSuccess }: CategoryFormProps) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData || { name: "", slug: "" },
  });

  async function onSubmit(values: CategoryFormValues) {
    if (initialData) {
      await updateCategory(initialData?.id, values);
      toast.success("Categoria atualizado");
    } else {
      await createCategory(values);
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
          name="slug"
          label="Slug"
          placeholder="Digite o slug da categoria"
        />
      </FieldGroup>

      <Button type="submit" className="w-full">
        {initialData ? "Atualizar Categoria" : "Criar Categoria"}
      </Button>
    </form>
  );
}
