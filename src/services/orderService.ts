import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5004/",
});

export interface Order {
  id: string;
  cliente: string;
  produto: string;
  valor: number;
  status: string;
  dataCriacao: string;
}

export interface CreateOrderDTO {
  cliente: string;
  produto: string;
  valor: number;
}

export const fetchOrders = async (): Promise<Order[]> => {
  const { data } = await api.get("/orders");
  return data;
};

export const fetchOrderById = async (id: string): Promise<Order> => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

export const createOrder = async (order: CreateOrderDTO): Promise<void> => {
  await api.post("/orders", order);
};

export const deleteOrder = async (id: string) => {
  await api.delete(`/orders/${id}`);
};
