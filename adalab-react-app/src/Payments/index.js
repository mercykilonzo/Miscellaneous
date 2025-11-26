import React, { useState, useEffect } from "react";
import useFetchUserPayments from "./hooks/useFetchPayments";
import "./style.css"

const paymentMethods = ["All", "Mpesa", "Card", "Cash"];
const PAGE_SIZE = 8;

const UserPayments = () => {
  const {
    loading,
    error,
    userPayments
  } = useFetchUserPayments();

  const [filterMethod, setFilterMethod] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [editPayment, setEditPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [confirmDeletePayment, setConfirmDeletePayment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    amount_paid: "",
    payment_method: "Mpesa",
    date_paid: "",
    order_id: "",
  });

  const filteredPayments = userPayments
    .filter(
      (p) => filterMethod === "All" || p.payment_method === filterMethod
    )
    .filter((p) =>
  (p.order_id ? String(p.order_id) : "").toLowerCase().includes(searchText.toLowerCase())
);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPayments.length / PAGE_SIZE)
  );

  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 className="errorText">Error: {error}</h1>;

  return (
    <div className="container">
      <h1>Payments</h1>
      <div className="filterContainer">
        <select
          className="selectInput"
          value={filterMethod}
          onChange={(e) => setFilterMethod(e.target.value)}
        >
          {paymentMethods.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by Order ID..."
          className="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredPayments.length === 0 ? (
        <p className="noProductsText">No payments found.</p>
      ) : (
        <>
          <table className="productTable">
            <thead>
              <tr className="tableHeader">
                <th>Order ID</th>
                <th>Amount Paid</th>
                <th>Payment Method</th>
                <th>Date Paid</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="tableRow"
                  tabIndex={0}
                  aria-label={`Payment for Order: ${payment.order_id}`}
                >
                  <td>{payment.order_id}</td>
                  <td>{Number(payment.amount).toFixed(2)}</td>
                  <td>{payment.payment_method}</td>
                  <td>{new Date(payment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'})}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
            </div>
         
      )};
export default UserPayments;