
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./Paginas/HomePage";
import Gasto from "./Paginas/Gasto";
import ContaCorrente from "./Paginas/ContaCorrente";
import {Cadastro} from "./Paginas/Cadastro";
import Login from "./Paginas/Login";
import Cofrinho from "./Paginas/Cofrinho";
import Cabecalho from "./Cabecalho_Rodape/Cabecalho";
import Rodape from "./Cabecalho_Rodape/Rodape";

function App() {
  return (
    <Router>
      <div>
        <Cabecalho/>
      </div>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Gastos" element={<Gasto />} exact />
          <Route path="/ContaCorrente" element={<ContaCorrente  />} exact />
          <Route path="/Login" element={<Login />} exact />
          <Route path="/Cadastro" element={<Cadastro />} exact />
          <Route path="/Cofrinho" element={<Cofrinho />} exact />
      </Routes>
      <div>
        <Rodape/>
      </div>
    </Router>
  );
}

export default App;