import React, { useEffect, useState } from "react";
import { listInvoices } from "../services/InvoiceService";
import { useNavigate } from "react-router-dom";

const ListInvoiceComponent = ({ invoices: propInvoices }) => {
  const [invoices, setInvoices] = useState([]);

  console.log("listInvoice", propInvoices)

  const navigator = useNavigate();

  useEffect(() => {
    if (propInvoices && propInvoices.length > 0) {
      setInvoices(propInvoices);
    } else {
      listInvoices()
        .then((response) => {
          setInvoices(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [propInvoices]);

  useEffect(() => {
    setInvoices(propInvoices);
  }, [propInvoices]);

  function seeInvoiceDetails(qrCode) {
    navigator(`/invoice-details/${qrCode}`);
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">List of Invoices</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Organization</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Invoice Items</th>
          </tr>
        </thead>
        <tbody>
          {invoices && invoices.map((invoice) => (
            <tr key={invoice.qrCode} className="border-t border-gray-300">
              <td className="px-4 py-2">
                <div>
                  <img src={invoice.epr.logo} alt="EPR Logo" className="ml-2" />
                </div>
                <div>
                  <h2>{invoice.epr.name}</h2>
                  {invoice.epr.fullName}
                </div>
              </td>
              <td className="px-4 py-2">{invoice.totalAmount}</td>
              <td className="px-4 py-2">{invoice.creationDate}</td>
              <td className="px-4 py-2">{invoice.epr.category}</td>
              <td className="px-4 py-2">
                <button onClick={() => seeInvoiceDetails(invoice.qrCode)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListInvoiceComponent;

