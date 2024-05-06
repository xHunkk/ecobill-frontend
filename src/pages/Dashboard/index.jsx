import React from "react";
import Sidebar1 from "../../components/Sidebar";
import Header from "../../components/Header";
import StatisticsComponent from "../../components/StatisticsComponent";
import "../../App.css";
import ListInvoiceComponent from "../../components/ListInvoiceComponent";

const DashboardPage = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F4F4F4",
        padding: "0.625rem",
      }}
    >
      <div className="sidebar" style={{ padding: "10px" }}>
        <Sidebar1 />
      </div>
      <div
        className="rightSide"
        style={{ width: "100%", padding: "25px 70px" }}
      >
        <Header />
        <StatisticsComponent />
        <ListInvoiceComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
