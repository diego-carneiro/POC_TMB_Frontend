// pages/OrderForm.tsx
import { useState } from "react";
import { useCreateOrder } from "../hooks/useOrders";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const { mutateAsync } = useCreateOrder();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({ cliente, produto, valor: parseFloat(valor) });
    navigate(-1);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-8">Novo Pedido</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Valor em R$"
          type="number"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <div className="flex gap-2 mt-8 justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Criar Pedido
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
