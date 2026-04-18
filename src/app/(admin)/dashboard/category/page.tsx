import { columns } from "@/components/form/category-columns";
import { ListHeader } from "@/components/admin/list-header";
import { CategoryFormDialog } from "@/components/form/category-form-dialog";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import { getProductsCountByCategory } from "@/actions/category";

export default async function Category() {
  const allCategory = await getProductsCountByCategory();

  return (
    <section className="container mx-auto space-y-4">
      <ListHeader
        title="Categoria"
        description="Gerencie os itens do seu encarte"
      >
        <CategoryFormDialog mode="create" />
      </ListHeader>

      <Card className="p-6">
        <DataTable columns={columns} data={allCategory} />
      </Card>
    </section>
  );
}
