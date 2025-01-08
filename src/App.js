import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
    <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
