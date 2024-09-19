import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Nav/NavBar'
import Home from './Componentes/Home/home'
import Blog from './Componentes/Blog/blog'
import Projeto from './Componentes/Projeto/projeto'
import FaleConosco from './Componentes/FaleConosco/faleConosco'
import Footer from './Componentes/Footer/footer'

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
