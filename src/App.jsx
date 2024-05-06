import "./App.css";
import ListInvoiceComponent from "./components/ListInvoiceComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceComponent from "./components/InvoiceComponent";
import StatisticsComponent from "./components/StatisticsComponent";

// Saad 3mk Codes
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/invoices" element={<ListInvoiceComponent />}></Route>
          <Route path="/invoice-details" element={<InvoiceComponent />}></Route>
          <Route
            path="/StatisticsComponent"
            element={<StatisticsComponent />}
          ></Route>

          {/* saad 3mk Codes */}
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
