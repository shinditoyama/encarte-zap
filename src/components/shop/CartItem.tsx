import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { useCart } from "@/store/use-cart";

interface CartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromList, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 p-4 border-b">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{item.name}</h4>
        <p className="text-primary text-sm font-bold">
          {formatCurrency(item.price * item.quantity)}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            size="icon-xs"
            variant="outline"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="rounded"
          >
            <IconMinus />
          </Button>
          <span className="text-sm font-medium w-8 text-center">
            {item.quantity}
          </span>
          <Button
            size="icon-xs"
            variant="outline"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="rounded"
          >
            <IconPlus className="w-3 h-3" />
          </Button>
          <Button
            size="icon-sm"
            variant="destructive"
            onClick={() => removeFromList(item.id)}
            className="ml-auto rounded-md"
          >
            <IconTrash className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
