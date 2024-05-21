import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path={`${import.meta.env.VITE_PUBLIC_URL}/`}
          element={<Home />}
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
