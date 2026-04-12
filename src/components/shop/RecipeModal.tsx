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

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 rounded-lg overflow-hidden border-none bg-transparent sm:max-w-xl max-h-[80vh]">
        <Card className="p-0 rounded-lg border-none">
          <div className="relative max-h-[30vh]">
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={240}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
          <ScrollArea className="-mt-6 max-h-[50vh]">
            <CardContent className="py-6 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold leading-none">
                  {recipe.title}
                </DialogTitle>
                <DialogDescription>{recipe.description}</DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <IconClock className="w-4 h-4" />
                  <span>{/*recipe.prepTime*/} min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <IconUsers className="w-4 h-4" />
                  <span>{/*recipe.servings*/} porções</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <IconShoppingCart className="w-5 h-5" />
                  Ingredientes necessários
                </h3>
                <div className="space-y-2">
                  {recipe.ingredients.map((item) => {
                    return (
                      <div
                        key={item.product?.id}
                        className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product?.imageUrl}
                            alt={item.product?.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {item.product?.name}
                            </p>
                            <p className="text-xs text-primary font-semibold">
                              {formatCurrency(
                                Number(
                                  item.product?.salePrice ??
                                    item.product?.price,
                                ),
                              )}
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
