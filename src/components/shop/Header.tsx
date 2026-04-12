"use client";

import { useState } from "react";
import { useCart } from "@/store/use-cart";
import { IconMenu, IconShoppingCart, IconX } from "@tabler/icons-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center"
              role="img"
              aria-label="Logo Boa Compra"
            >
              <span className="text-white font-bold text-xl" aria-hidden="true">
                B
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Boa Compra</h1>
              <p className="text-xs text-gray-500">Supermercados</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            role="navigation"
            aria-label="Navegação principal"
          >
            <a
              href="#offers"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Ofertas
            </a>
            <a
              href="#catalog"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Encarte
            </a>
            <a
              href="#locations"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Lojas
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Shopping List Badge */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                aria-label={`Lista de compras, ${items.length} itens`}
              >
                <IconShoppingCart
                  className="w-5 h-5 text-green-600"
                  aria-hidden="true"
                />
                <span className="hidden sm:inline text-sm font-medium text-green-700">
                  Lista
                </span>
                {items.length > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {items.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <IconX className="w-6 h-6 text-gray-700" />
              ) : (
                <IconMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#offers"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ofertas da Semana
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Encarte Digital
              </a>
              <a
                href="#locations"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nossas Lojas
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
