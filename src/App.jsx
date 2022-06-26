import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import ProdutoEspec from "./Components/ProdutoEspec";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<ProdutoEspec />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
