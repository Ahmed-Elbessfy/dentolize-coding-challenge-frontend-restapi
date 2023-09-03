// helpers
import { FC, useEffect } from "react";
import { useOrdersContext } from "../../utils/Hooks";
import { OrderInterface } from "../../utils/Interface";
import { Link, useParams } from "react-router-dom";

// Nested Components
import SingleOrder from "./SingleOrder";

const OrdersList: FC = () => {
  // get current customer orders list & setCustomerOrders from context
  const { customerOrdersList, setCustomerOrders } = useOrdersContext();
  // get current user id
  const { current_customer_id } = useParams();

  useEffect(() => {
    // check incase no current customer id before setting current customer orders at the store
    if (current_customer_id) setCustomerOrders(parseInt(current_customer_id));
  }, [current_customer_id, setCustomerOrders]);
  return (
    <section>
      <Link to="/">Go Back</Link>
      {customerOrdersList.map((order: OrderInterface) => {
        return <SingleOrder key={order.id} orderData={order} />;
      })}
    </section>
  );
};

export default OrdersList;