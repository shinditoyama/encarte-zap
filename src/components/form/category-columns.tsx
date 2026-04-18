"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { AlertModal } from "../admin/alert-modal";
import { CategoryFormDialog } from "./category-form-dialog";
import { deleteCategory } from "@/actions/category";
import { toast } from "sonner";

/*export const columnsProd: ColumnDef<IProduct>[] = [
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
          //await deleteProduct(product.id);
          alert("Produto excluído com sucesso!");
          //toast.success("Produto excluído com sucesso!")
        } catch (error) {
          alert("Erro ao excluir produto.");
          //toast.error("Erro ao excluir produto.")
        } finally {
          setIsDeleting(false);
        }
      }

      return (
        <div className="flex justify-end gap-2">
          <FormDialog mode="edit" data={product} />
          <AlertModal
            name={product.name}
            isDeleting={isDeleting}
            onDelete={onDelete}
          />
        </div>
      );
    },
  },
];*/

export const columns: ColumnDef<ICategory>[] = [
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
    accessorKey: "total",
    header: "Total Produtos",
    cell: ({ row }) => <strong>{row.original.total}</strong>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      const [isDeleting, setIsDeleting] = useState(false);

      async function onDelete() {
        try {
          setIsDeleting(true);
          await deleteCategory(category.id);
          toast.success(`Categoria excluído com sucesso!`);
        } catch (error) {
          alert("Erro ao excluir categoria.");
          toast.error("Erro ao excluir categoria.");
        } finally {
          setIsDeleting(false);
        }
      }

      return (
        <div className="flex justify-end gap-2">
          <CategoryFormDialog mode="edit" data={category} />
          <AlertModal
            name={category.name}
            isDeleting={isDeleting}
            onDelete={onDelete}
          />
        </div>
      );
    },
  },
];
