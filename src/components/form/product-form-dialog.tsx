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
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { ProductForm } from "./product-form";

interface ProductFormDialogProps {
  mode: "create" | "edit";
  data?: IProduct;
}

export function ProductFormDialog({ mode, data }: ProductFormDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {mode === "create" ? (
          <Button className="gap-2">
            <IconPlus className="w-4 h-4" /> Nova Produto
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
            {mode == "create" ? "Criar Produto" : "Editar Produto"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ProductForm initialData={data} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
