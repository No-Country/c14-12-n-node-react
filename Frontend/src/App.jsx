import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <Router>
        <TopBar/>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/service" exact element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
