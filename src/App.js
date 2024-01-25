import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer, Dashboard, Sidebar } from "./components";


function App() {
  return (
    <div className="overflow-hidden max-w-1400px grid w-[96%] mx-auto gap-[1.8rem] grid-cols-[14rem,auto,23rem] ">
      <BrowserRouter>
     <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
