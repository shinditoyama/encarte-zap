"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { departments } from "@/lib/mock";
import { useCart } from "@/store/use-cart";

export function DepartmentFilter() {
  const { selectedDepartment, setSelectedDepartment } = useCart();

  return (
    <Card className="shadow">
      <CardHeader>
        <h3 className="font-semibold flex items-center gap-2">
          <span className="w-1 h-6 bg-green-600 rounded-full" />
          Filtrar por Departamento
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {departments.map((dept) => {
            const isSelected = selectedDepartment === dept.id;

            return (
              <Button
                key={dept.id}
                variant={isSelected ? "default" : "outline"}
                onClick={() =>
                  setSelectedDepartment(
                    dept.id === selectedDepartment ? null : dept.id,
                  )
                }
              >
                <span>{dept.name}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
      {selectedDepartment && (
        <CardFooter className="-my-4">
          <Button
            variant="link"
            onClick={() => setSelectedDepartment(null)}
            className="text-sm text-red-500 hover:text-red-700 font-medium"
          >
            ✕ Limpar filtro
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
