import type { Order } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder } from "../services/orderService";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

interface Props {
  orders: Order[];
}

export default function OrderTable({ orders }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: removeOrder } = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.error("Erro ao excluir pedido:", error);
    },
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<Order | null>(null);

  const openConfirmModal = (e: React.MouseEvent, order: Order) => {
    e.stopPropagation();
    setOrderToDelete(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOrderToDelete(null);
  };

  const confirmDelete = async () => {
    if (!orderToDelete) return;

    try {
      await removeOrder(orderToDelete.id);
      closeModal();
    } catch {
      // Erro já tratado
    }
  };

  return (
    <>
      <div className="max-h-[60vh] overflow-y-auto">
        <table className="w-full text-sm border-separate border-spacing-0 table-fixed">
          <thead className="bg-gray-100 sticky top-0 z-10 text-lg rounded">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Cliente
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Produto
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Valor
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 w-40">
                Status
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">
                Data
              </th>
              <th className="px-6 py-4 text-center font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/orders-pannel/${order.id}`)}
              >
                <td className="px-6 py-4">{order.cliente}</td>
                <td className="px-6 py-4">{order.produto}</td>
                <td className="px-6 py-4">R$ {order.valor.toFixed(2)}</td>
                <td className="px-6 py-4 w-40">{order.status}</td>
                <td className="px-6 py-4">
                  {new Date(order.dataCriacao).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={(e) => openConfirmModal(e, order)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Excluir pedido de ${order.cliente}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <Modal>
          <h2 className="text-lg font-bold mb-4">Confirmar exclusão</h2>
          <p className="mb-6">Tem certeza que deseja excluir este pedido?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Excluir
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
