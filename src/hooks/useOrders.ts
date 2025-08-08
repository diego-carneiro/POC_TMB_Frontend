import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchOrders,
  fetchOrderById,
  createOrder,
  deleteOrder,
  type CreateOrderDTO,
} from "../services/orderService";

export const useOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 2500,
  });

export const useOrder = (id: string) =>
  useQuery({ queryKey: ["order", id], queryFn: () => fetchOrderById(id) });

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, CreateOrderDTO>({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: deleteOrder,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  });
};
