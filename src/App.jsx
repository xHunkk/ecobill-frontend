
import './App.css'
import HelloWorld from './HelloWorld'
import ListInvoiceComponent from './components/ListInvoiceComponent'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InvoiceComponent from './components/InvoiceComponent'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<SideBar />}></Route>
          <Route path='/invoices' element={<ListInvoiceComponent />}></Route>
          <Route path="/invoice-details/:qrCode" element={<InvoiceComponent />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
