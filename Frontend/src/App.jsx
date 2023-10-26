import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { database } from "./db/db";
import { useState } from "react";
import Admin from "./pages/Admin";

function App() {
  const [auth, setAuth] = useState(true);

  const verify = () => {
    const auth = database.setAuth(prop.auth);
  };

  return (
    <>
      <Router>
        <Routes>
       
          {/* Route siguiente hacia Admin. luego de las pruebas pasar nuevamente a Home */}
          <Route path="/" exact element={<Home />} /> 
          <Route path="/service" exact element={<Service />} />

          {auth ? (
            <Route path="/admin" exact element={<Admin />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
       
        </Routes>
      </Router>
    </>
  )
}

export default App;
