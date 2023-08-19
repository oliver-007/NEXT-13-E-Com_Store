import { ProductType } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const selectedItem_name = data.name;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.success(`"${selectedItem_name}" — already in cart.`);
        }

        set({ items: [...currentItems, data] });
        toast.success(`"${selectedItem_name}" — added to cart.`);
      },
      removeItem: (id) => {
        const currentItems = get().items;
        const selectedItem = currentItems.find((item) => item.id === id);

        set({ items: [...currentItems.filter((item) => item.id !== id)] });
        toast.success(`"${selectedItem?.name}" — removed from cart.`);
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
