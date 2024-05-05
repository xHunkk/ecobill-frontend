import React, { useEffect, useState } from 'react'
import { listInvoices } from '../services/InvoiceService'
import { useNavigate } from 'react-router-dom'

const ListInvoiceComponent = () => {

  const [invoices, setInvoices] = useState([])


  const navigator = useNavigate();

  useEffect(() => {
    listInvoices().then((response) => {
      setInvoices(response.data)
    }).catch(error => {
      console.error(error);
    })
  }, [])


  function seeInvoiceDetails(qrCode) {
    navigator(`/invoice-details/${qrCode}`)
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-xl font-bold mb-4'>List of Invoices</h2>
      <table className='table-auto w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='px-4 py-2'>Organization</th>
            <th className='px-4 py-2'>Amount</th>
            <th className='px-4 py-2'>Date</th>
            <th className='px-4 py-2'>Category
            </th>
            <th className='px-4 py-2'>Invoice Items</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.qrCode} className='border-t border-gray-300'>
              <td className='px-4 py-2'>
                <div>
                  <img src={invoice.epr.logo} alt="EPR Logo" className="ml-2" />
                </div>
                <div>
                  <h2>{invoice.epr.name}</h2>
                  {invoice.epr.fullName}

                </div>
              </td>
              <td className='px-4 py-2'>{invoice.totalAmount}</td>
              <td className='px-4 py-2'>{invoice.creationDate}</td>
              <td className='px-4 py-2'>{invoice.epr.category}</td>
              <td className='px-4 py-2'>
                <button onClick={() => seeInvoiceDetails(invoice.qrCode)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  //   <div className='container'>
  //     <h2 className='text-center'>List of Invoices</h2>
  //     <table className='table table-striped table-bordered'>
  //       <thead>
  //         <tr>
  //           <th>Invoice QR Code</th>
  //           <th>Invoice Creation Date</th>
  //           <th>Invoice Total Amount</th>
  //           <th>Invoice Items</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           invoices.map(invoice => <tr key={invoice.qrCode}>
  //             <td>{invoice.qrCode}</td>
  //             <td>{invoice.creationDate}</td>
  //             <td>{invoice.totalAmount}</td>
  //             <td>            <button className='btn btn-primary mb-2' onClick={seeInvoiceDetails}>Details</button></td>

  //           </tr>)
  //         }

  //       </tbody>
  //     </table>
  //   </div>
  // )
}

export default ListInvoiceComponent