"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { sampleProducts } from "@/lib/mock";
import { formatCurrency } from "@/lib/utils";
import { useModal } from "@/store/use-modal";
import {
  IconCheck,
  IconClock,
  IconPlus,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export function RecipeModal() {
  const { isOpen, recipe, closeModal } = useModal();

  if (!recipe) return null;

  const getProduct = (productId: string) =>
    sampleProducts.find((p) => p.id === productId);
  // const isInList = (productId: string) => shoppingList.some(item => item.id === productId);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 overflow-hidden border-none bg-transparent sm:max-w-xl max-h-[80vh]">
        <Card className="border-none overflow-hidden p-0">
          <div className="relative h-52 sm:h-60">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={240}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
          <ScrollArea className="-mt-6 max-h-[50vh] overflow-y-hidden">
            <CardContent className="py-6 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold leading-none">
                  {recipe.name}
                </DialogTitle>
                <DialogDescription>{recipe.description}</DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <IconClock className="w-4 h-4" />
                  <span>{recipe.prepTime} min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <IconUsers className="w-4 h-4" />
                  <span>{recipe.servings} porções</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <IconShoppingCart className="w-5 h-5" />
                  Ingredientes necessários
                </h3>
                <div className="space-y-2">
                  {recipe.ingredients.map((ing) => {
                    const product = getProduct(ing.productId);
                    if (!product) return null;

                    // const inList = isInList(ing.productId);

                    return (
                      <div
                        key={ing.productId}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {product.name}
                            </p>
                            <p className="text-xs text-green-600 font-semibold">
                              {formatCurrency(product.price)}
                            </p>
                          </div>
                        </div>

                        {/* <button
                        // onClick={() => handleAddSingleIngredient(ing.productId)}
                        disabled={inList}
                        className={`p-2 rounded-lg transition-all ${
                          inList
                            ? 'bg-green-100 text-green-600'
                            : 'bg-emerald-500 text-white hover:bg-emerald-600'
                        }`}
                        aria-label={inList ? 'Já na lista' : 'Adicionar à lista'}
                      >
                        {inList ? (
                          <IconCheck className="w-5 h-5" />
                        ) : (
                          <IconPlus className="w-5 h-5" />
                        )}
                      </button> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </ScrollArea>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

{
  /*
  
  <Card className="border-none shadow-2xl">
          <div className="relative aspect-square w-full bg-muted">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="object-cover w-full h-full"
            />
          </div>

          <CardContent className="p-6">
            <DialogHeader className="text-left">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                recipe.category
              </p>
              <DialogTitle className="text-2xl font-black leading-none">
                {recipe.name}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-black text-green-600">
                R$ recipe.price.toFixed(2)
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Adicione este item à sua lista de compras e apresente no caixa ou
              envie via WhatsApp para delivery.
            </p>
          </CardContent>

          <CardFooter className="p-6 pt-0 flex gap-3">
            <Button variant="outline" onClick={closeModal} className="flex-1">
              Fechar
            </Button>
            <Button
             
              className="flex-[2] bg-green-600 hover:bg-green-700 gap-2 h-11"
            >
              <IconShoppingCart className="w-4 h-4" />
              Adicionar à Lista
            </Button>
          </CardFooter>
        </Card>
  
  */
}
