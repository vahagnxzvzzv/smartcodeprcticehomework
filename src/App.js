import logo from './logo.svg';
import './App.css';
import Products from './components/products/products';
import { Route, Routes } from 'react-router-dom';
import Product from './components/product/product';

function App() {
  return (
    <div className="App">
      {/* <Products /> */}
      <Routes>
        <Route />
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
