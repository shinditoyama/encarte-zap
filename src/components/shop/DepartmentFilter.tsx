import { departments } from "@/lib/mock";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon } from "@hugeicons/core-free-icons";

export function DepartmentFilter() {
  // const { selectedDepartment, setSelectedDepartment } = useAppStore();

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-green-600 rounded-full"></span>
        Filtrar por Departamento
      </h3>

      <div className="flex flex-wrap gap-2">
        {departments.map((dept) => {
          //const IconComponent = iconMap[dept.icon];
          //const isSelected = selectedDepartment === dept.id;

          return (
            <button
              key={dept.id}
              // onClick={() => setSelectedDepartment(dept.id === selectedDepartment ? null : dept.id)}
              className={`category-pill flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all `}
            >
              {/* <HugeiconsIcon icon={ZapIcon} strokeWidth={2} /> */}
              <span className="text-sm">{dept.name}</span>
            </button>
          );
        })}
      </div>

      {/*selectedDepartment && (
        <button
          onClick={() => setSelectedDepartment(null)}
          className="mt-3 text-sm text-red-500 hover:text-red-700 font-medium"
        >
          ✕ Limpar filtro
        </button>
      )*/}
    </div>
  );
}
