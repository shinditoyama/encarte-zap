"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  IconMinus,
  IconPlus,
  IconSend,
  IconShoppingBag,
  IconShoppingCart,
  IconTrash,
} from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/store/use-cart";

export function ShoppingList() {
  const { items, removeFromList, updateQuantity, clearList, getTotal } =
    useCart();

  const handleSendWhatsApp = () => {
    let numeroLoja = "5514997777600";
    let mensagem = "*MINHA LISTA DE COMPRAS*\n\n";

    items.forEach((item) => {
      mensagem += `• ${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}\n`;
    });

    mensagem += `\n*Total Estimado: ${formatCurrency(getTotal())}*`;

    const encoded = encodeURIComponent(mensagem);

    window.open(`https://wa.me/${numeroLoja}?text=${encoded}`, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl gap-2"
        >
          <IconShoppingCart className="size-5" /> Minha Lista ({items.length})
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-[90%] sm:w-[450px]">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="flex items-center">
            <div>
              <h2 className="font-bold text-gray-900">Minha Lista</h2>
              <p className="text-sm text-gray-500">{items.length} itens</p>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">Sua lista está vazia</p>
              <p className="text-sm text-gray-400 mt-1">
                Clique nos produtos para adicionar
              </p>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b">
                  {/*<img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />*/}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-green-600 font-bold text-sm">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="icon-xs"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
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
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded"
                      >
                        <IconPlus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="icon-sm"
                        variant="ghost"
                        onClick={() => removeFromList(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 rounded-md"
                      >
                        <IconTrash className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t">
            <div className="space-y-4 text-center">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>{formatCurrency(getTotal())}</span>
              </div>
              <Button
                onClick={handleSendWhatsApp}
                className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg gap-2"
              >
                <IconSend className="size-5" /> Enviar para WhatsApp
              </Button>
              <Button
                variant="link"
                onClick={clearList}
                className="text-red-500 hover:text-red-700"
              >
                Limpar lista
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
