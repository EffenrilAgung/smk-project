import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/login";
import HomePage from './Page/HomePage/homePage'
import SingUp from './Page/SingUp/SingUp'
import Pembayaran from "./Page/Pembayaran/Pembayaran";
import PembayaranFinal from "./Page/PembayaranFinal/PembayaranFinal";

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/singup' element={<SingUp />}/>
          <Route path='/pembayaran' element={<Pembayaran/>}/>
          <Route path='/final' element={<PembayaranFinal/>}/>
        </Routes>
      </Router>
    );
  }

export default App;
