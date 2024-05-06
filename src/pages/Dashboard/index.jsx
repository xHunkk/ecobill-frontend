import React, { useState } from "react";
import Sidebar1 from "../../components/Sidebar";
import Header from "../../components/Header";
import StatisticsComponent from "../../components/StatisticsComponent";
import "../../App.css";
import ListInvoiceComponent from "../../components/ListInvoiceComponent";


const DashboardPage = () => {
  const [fetchedInvoices, setFetchedInvoices] = useState([]);

  const handleApplyAnalytics = (data) => {
    setFetchedInvoices(data);
  };

  console.log("Dashboard", fetchedInvoices)

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F4F4F4",
        padding: "0.625rem",
      }}
    >
      <div className="sidebar" style={{ padding: "10px" }}>
        <Sidebar1 onApplyAnalytics={handleApplyAnalytics} />      </div>
      <div
        className="rightSide"
        style={{ width: "100%", padding: "25px 70px" }}
      >
        <Header />
        <StatisticsComponent />
        <ListInvoiceComponent invoices={fetchedInvoices} />
      </div>
    </div>
  );
};

export default DashboardPage;