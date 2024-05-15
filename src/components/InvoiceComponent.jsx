import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import stcImage from "../assets/STC_2-400x400.png";
import { useLocation } from "react-router-dom";
import "../invoice.css";

const InvoiceComponent = () => {
  const [invoiceItemsList, setInvoiceItems] = useState([]);

  const { qrCode } = useParams();

  const location = useLocation();

  const customerId = location.state && location.state.id;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8383/invoices/items?id=${customerId}&qr_code=${qrCode}`,
        {
          headers: {
            EcoBillKey: "EcoBillValue",
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
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <img
          src={stcImage}
          alt="Circular"
          className="w-24 h-24 mx-auto rounded-full"
        />
      </div>

      <div>
        {invoiceItemsList.length > 0 && (
          <div
            key={invoiceItemsList[0].invoice.id}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              {invoiceItemsList[0].invoice.epr.name}
            </h2>
            <p className="text-gray-600">
              {invoiceItemsList[0].invoice.creationDate}
            </p>
            <p className="text-gray-600">
              Tax Number: {invoiceItemsList[0].invoice.epr.taxNumber}
            </p>
            <p className="text-gray-600">
              Qr Code: {invoiceItemsList[0].invoice.qrCode}
            </p>
          </div>
        )}
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-2">Qty</th>
            <th className="text-left px-4 py-2">Item Name</th>
            <th className="text-right px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItemsList.map((invoiceItems) => (
            <tr key={invoiceItems.invoice.qrCode}>
              <td className="border-t px-4 py-2">{invoiceItems.quantity}</td>
              <td className="border-t px-4 py-2">{invoiceItems.name}</td>
              <td className="border-t px-4 py-2 text-right">
                {invoiceItems.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between py-2">
          <span className="text-gray-700">Total Price</span>
          <span className="text-gray-700">75 SAR</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-700">VAT (15%)</span>
          <span className="text-gray-700">11.25 SAR</span>
        </div>
        <div className="flex justify-between py-2 font-bold">
          <span className="text-gray-900">Total with VAT</span>
          <span className="text-gray-900">86.25 SAR</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-700">Payment Method</span>
          <span className="text-gray-700">Apple Pay</span>
        </div>
      </div>
      <div className="text-center mt-8">
        <img
          src="../images/barcode.png"
          alt="Barcode"
          className="mx-auto mb-4"
        />{" "}
        <p className="text-gray-600">5027455377612</p>
        <canvas id="qr-code" className="mx-auto mt-4"></canvas>
      </div>
    </div>
  );
};

export default InvoiceComponent;
