export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">Boa Compra</span>
            </div>
            <p className="text-gray-400 text-sm">
              Seu supermercado de confiança com as melhores ofertas!
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 (11) 3456-7890</li>
              <li>📧 contato@boacompra.com.br</li>
              <li>📍 Av. Principal, 500 - Centro</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2026 Supermercado Boa Compra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
