import { Outlet } from "react-router-dom";
import OrderList from "../pages/OrderList";

export default function OrdersLayout() {
  return (
    <>
      <OrderList />
      <Outlet />
    </>
  );
}
