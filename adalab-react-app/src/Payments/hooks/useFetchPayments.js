import { useState, useEffect } from "react";
import { fetchPayments} from "../utils/fetchPayments";


const useFetchUserPayments = () => {
  const [userPayments, setUserPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const payments = await fetchPayments();
      const mappedPayments = payments.map((payment) => ({
        id: payment.id,
        amount: payment.amount_paid,
        payment_method: payment.payment_method,
        date: payment.date_paid,
        order_id: payment.order_id,
      }));

      setUserPayments(mappedPayments);
    } catch (err) {
      setError(err.message || "Error fetching payments");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    userPayments,
    fetchData,
    
  };
};

export default useFetchUserPayments;