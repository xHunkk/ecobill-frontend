import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import stcImage from "../assets/STC_2-400x400.png";

const InvoiceComponent = () => {
  const [invoiceItemsList, setInvoiceItems] = useState([]);

  const { qrCode } = useParams();


  useEffect(() => {
    axios
      .get(
        `http://localhost:8383/invoices/items?qr_code=${qrCode}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            EcoBillKey: "EcoBillValue"
          },
        }
      )
      .then((response) => {
        setInvoiceItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoice items:", error);
      });
  }, [qrCode]);

  return (
    <div>
      <div className="flex justify-center ">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src={stcImage}
            alt="Circular"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container">
        <div>
          {invoiceItemsList.length > 0 && (
            <div key={invoiceItemsList[0].invoice.id}>
              <h2 className="text-center text-xl font-bold mb-4">
                {invoiceItemsList[0].invoice.epr.name}
              </h2>
              <h3 className="text-center text-xl font-bold mb-4">
                {invoiceItemsList[0].invoice.creationDate}
              </h3>
              <h3 className="text-center text-xl font-bold mb-4">
                Tax Number: {invoiceItemsList[0].invoice.epr.taxNumber}
              </h3>
              <h3 className="text-center text-xl font-bold mb-4">
                Qr Code: {invoiceItemsList[0].invoice.qrCode}
              </h3>
            </div>
          )}
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItemsList.map((invoiceItems) => (
              <tr key={invoiceItems.invoice.qrCode}>
                <td>{invoiceItems.name}</td>
                <td>{invoiceItems.quantity}</td>
                <td>{invoiceItems.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceComponent;
