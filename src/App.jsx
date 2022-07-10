import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        {/* clients router and home */}
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
