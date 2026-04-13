"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  IconBrandWhatsapp,
  IconSend,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/store/use-cart";
import { CartItem } from "./CartItem";

export function ShoppingList() {
  const { items, clearList, getTotal } = useCart();

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
        <Button variant="default" size="lg" className="rounded-md">
          <IconShoppingCart className="size-5" />
          <span className="hidden sm:inline">Lista</span>
          {items.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 w-5 h-5 text-white text-xs font-bold"
            >
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-[90%] sm:w-[450px]">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="font-bold">Minha Lista</SheetTitle>
          <SheetDescription>{items.length} itens</SheetDescription>
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
            <>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t py-4">
            <div className="space-y-2 text-center">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>{formatCurrency(getTotal())}</span>
              </div>
              <div className="flex justify-between gap-2">
                <Button
                  variant="outline"
                  // onClick={handleSendWhatsApp}
                  className="flex-1 h-14 text-lg gap-2 rounded-md"
                >
                  <IconSend className="size-5" /> Compartilhar
                </Button>
                <Button
                  variant="default"
                  onClick={handleSendWhatsApp}
                  className="flex-1 h-14 text-lg gap-2 rounded-md"
                >
                  <IconBrandWhatsapp className="size-5" /> WhatsApp
                </Button>
              </div>
              <Button
                variant="link"
                onClick={clearList}
                className="text-destructive"
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
