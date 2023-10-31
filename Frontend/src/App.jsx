import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Belleza from "./pages/Belleza";
import ProtectedRoute from "./pages/ProtectedRoute";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
import Login from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import Ofertas from "./pages/Ofertas";
import CuidadoPersonal from "./pages/CuidadoPersonal";
import Perfumeria from "./pages/Perfumeria";
import AllProducts from "./pages/AllProducts";
import OnlyOneProduct from "./pages/OnlyOneProduct";
import Regist_Categoria from "./components/Regist_Categoria";

function App() {
  // const [auth, setAuth] = useState(true);

  //  const verify = (state) => {
  //    setAuth(prop.auth);
  //  };
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/error" exact element={<ErrorPage />} />
            {/* <Route path="/service" exact element={<Service />} /> */}
            <Route path="/all-products" exact element={<AllProducts />} />
            <Route path="/product/:id" exact element={<OnlyOneProduct />} />
            <Route path="/sales" exact element={<Ofertas />} />
            <Route
              path="/category/CuidadoPersonal"
              exact
              element={<CuidadoPersonal />}
            />
            <Route path="/category/Belleza" exact element={<Belleza />} />
            <Route path="/category/Perfumeria" exact element={<Perfumeria />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" exact element={<Profile />} />
              <Route element={<ProtectedRouteAdmin />}>
                <Route path="/admin" exact element={<Admin />} />
                <Route path="/admin/crearCategoria" exact element={<Regist_Categoria />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
