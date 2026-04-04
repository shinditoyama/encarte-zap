import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  // Shopping list
  items: CartItem[];
  addItem: (product: IProduct) => void;
  removeFromList: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearList: () => void;
  getTotal: () => number;

  // Department filter
  selectedDepartment: string | null;
  setSelectedDepartment: (department: string | null) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id,
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          });
        } else {
          set({
            items: [
              ...currentItems,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromList: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromList(productId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
        });
      },

      clearList: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
      },

      selectedDepartment: null,

      setSelectedDepartment: (department) =>
        set({ selectedDepartment: department }),
    }),
    { name: "shopping-cart-storage" }, // Isso salva a lista no LocalStorage automaticamente!
  ),
);
