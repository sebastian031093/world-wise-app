//third Party library
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//components
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuhtContex';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  // console.log(cities);
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />}></Route>
              <Route
                path="cities"
                element={
                  <CityList /* cities={cities} */ /* isLoading={isLoading} */ />
                }
              ></Route>
              <Route path="cities/:id" element={<City />} />
              <Route
                path="countries"
                element={
                  <CountryList /* cities={cities} */ /* isLoading={isLoading} */
                  />
                }
              ></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
