import { ListHeader } from "@/components/admin/list-header";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import { getAllProducts } from "@/actions/product";
import { columns } from "@/components/form/product-columns";

export default async function Product() {
  const allProducts = await getAllProducts();

  return (
    <section className="container mx-auto space-y-4">
      <ListHeader
        title="Produto"
        description="Gerencie os itens do seu encarte"
      >
        {/* <ProductFormDialog mode="create" /> */}
      </ListHeader>

      <Card className="p-6">
        <DataTable columns={columns} data={allProducts} />
      </Card>
    </section>
  );
}
