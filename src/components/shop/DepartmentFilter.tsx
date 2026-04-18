"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function DepartmentFilter({ categories }: { categories: ICategory[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleFilter = (term: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Card className="shadow">
      <CardHeader>
        <h3 className="font-semibold flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Filtrar por Departamento
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((dept) => {
            return (
              <Button
                key={dept.id}
                variant={currentCategory === dept.slug ? "default" : "outline"}
                onClick={() => handleFilter(dept.slug || null)}
              >
                <span>{dept.name}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
      {currentCategory && (
        <CardFooter className="-my-4">
          <Button
            variant="link"
            onClick={() => handleFilter(null)}
            className="text-sm text-destructive font-medium"
          >
            ✕ Limpar filtro
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
