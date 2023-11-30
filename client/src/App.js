import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Codeforinterview from "./components/Codeforinterview.jsx";
import Allusers from "./components/Allusers.jsx";
import Addusers from "./components/Adduser.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edituser from "./components/EditUser.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Codeforinterview />} />
        <Route path='/all' element={<Allusers />} />
        <Route path='/add' element={<Addusers />} />
        <Route path='/edit/:id' element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
