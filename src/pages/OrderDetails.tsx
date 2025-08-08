import { useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrders";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: order, isLoading, isError } = useOrder(id || "");

  if (isLoading) return <p className="p-6">Carregando...</p>;
  if (isError || !order) return <p className="p-6">Erro ao carregar pedido.</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Detalhes do Pedido</h1>
      <div className="space-y-2">
        <p>
          <strong>Cliente:</strong> {order.cliente}
        </p>
        <p>
          <strong>Produto:</strong> {order.produto}
        </p>
        <p>
          <strong>Valor:</strong> R$ {order.valor.toFixed(2)}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Data:</strong> {new Date(order.dataCriacao).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
