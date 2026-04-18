"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { AlertModal } from "../admin/alert-modal";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/utils";
import { deleteProduct } from "@/actions/product";
import { ProductFormDialog } from "./product-form-dialog";

export const columns: ColumnDef<IProduct>[] = [
  {
    id: "ID",
    header: "#",
    cell: ({ row }) => <span>{row.index + 1}</span>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Nome" />;
    },
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => (
      <strong>{formatCurrency(Number(row.original.price))}</strong>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      const [isDeleting, setIsDeleting] = useState(false);

      async function onDelete() {
        try {
          setIsDeleting(true);
          await deleteProduct(product.id);
          alert("Produto excluído com sucesso!");
          toast.success("Produto excluído com sucesso!");
        } catch (error) {
          alert("Erro ao excluir produto.");
          toast.error("Erro ao excluir produto.");
        } finally {
          setIsDeleting(false);
        }
      }

      return (
        <div className="flex justify-end gap-2">
          <ProductFormDialog mode="edit" data={product} />
          <AlertModal
            name={product.name}
            isDeleting={isDeleting}
            onDelete={onDelete}
          />
        </div>
      );
    },
  },
];
