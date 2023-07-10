import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import Product from './pages/Product';
import PracingPages from './pages/PracingPages';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="pricing" element={<PracingPages />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
