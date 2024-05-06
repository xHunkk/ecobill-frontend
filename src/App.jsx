import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceComponent from "./components/InvoiceComponent";

// Saad 3mk Codes
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/invoice-details" element={<InvoiceComponent />}></Route>

          {/* saad 3mk Codes */}
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
