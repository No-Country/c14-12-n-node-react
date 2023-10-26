import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Service from "./pages/Service";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Belleza from "./pages/Belleza";
// import { database } from "./db/db";
import { useState } from "react";
import Admin from "./pages/Admin";

function App() {
  const [auth, setAuth] = useState(true);

  // const verify = (state) => {
  //    setAuth(prop.auth);
  //  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/service" exact element={<Service />} /> */}
          { auth ? 
            <Route path="/admin" exact element={<Admin />} />
           : <></>}
          <Route path="/belleza" exact element={<Belleza />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
