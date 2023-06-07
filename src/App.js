import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieDetailPage from "./pages/home/DetailPage";
import MoviesListPage from "./pages/home/MoviesListPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/movies/:type" element={<MoviesListPage />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
