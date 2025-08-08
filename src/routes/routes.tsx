import { createBrowserRouter, redirect } from "react-router-dom";
import OrdersLayout from "../layouts/OrdersLayout";
import OrderForm from "../pages/OrderForm";
import OrderDetails from "../pages/OrderDetails";
import Modal from "../components/Modal";

export const router = createBrowserRouter([
  {
    path: "/orders-pannel",
    element: <OrdersLayout />,
    children: [
      {
        path: "new-order",
        element: (
          <Modal>
            <OrderForm />
          </Modal>
        ),
      },
      {
        path: ":id",
        element: (
          <Modal>
            <OrderDetails />
          </Modal>
        ),
      },
    ],
  },
  {
    path: "/",
    loader: () => redirect("/orders-pannel"),
  },
  {
    path: "*",
    loader: () => redirect("/orders-pannel"),
  },
]);
