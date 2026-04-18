"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryForm } from "./category-form";
import { IconEdit, IconPlus } from "@tabler/icons-react";

interface CategoryFormDialogProps {
  mode: "create" | "edit";
  data?: ICategory;
}

export function CategoryFormDialog({ mode, data }: CategoryFormDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {mode === "create" ? (
          <Button className="gap-2">
            <IconPlus className="w-4 h-4" /> Nova Categoria
          </Button>
        ) : (
          <Button variant="outline" size="icon">
            <IconEdit className="w-4 h-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode == "create" ? "Criar Categoria" : "Editar Categoria"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CategoryForm initialData={data} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
