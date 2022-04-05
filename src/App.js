import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Information from "./components/info/Information";
import DataInformation from "./components/data/DataInformation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/dataInformation" element={<DataInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
