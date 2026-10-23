import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
            <Route  index element={<Home />}/>
            <Route path="country/:country" element={<Country/>}/>
            <Route path="*" element={<NoPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default App;
