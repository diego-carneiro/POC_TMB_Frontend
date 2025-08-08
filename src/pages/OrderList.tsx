import { useOrders } from "../hooks/useOrders";
import OrderTable from "../components/OrderTable";
import { useNavigate } from "react-router-dom";

export default function OrderList() {
  const { data, isLoading, isError } = useOrders();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full flex justify-between items-center bg-white shadow-md px-6 py-4 mb-6 rounded-lg">
        <h1 className="text-xl font-semibold text-gray-700">
          Painel de Pedidos
        </h1>
        <button
          onClick={() => navigate("/orders-pannel/new-order")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Novo Pedido
        </button>
      </header>

      {/* Conteúdo da tabela abaixo do header */}
      <main className="flex-grow max-w-5xl mx-auto w-full mt-8">
        {isLoading ? (
          <p className="text-center py-6 text-gray-400">
            Carregando pedidos...
          </p>
        ) : isError ? (
          <p className="text-center py-6 text-red-500">Erro ao carregar.</p>
        ) : (
          <div className="overflow-x-auto max-h-[70vh] overflow-y-auto bg-white rounded-lg p-4 shadow-md">
            <OrderTable orders={data || []} />
          </div>
        )}
      </main>
    </div>
  );
}
