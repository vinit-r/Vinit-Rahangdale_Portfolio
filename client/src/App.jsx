import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AllMember from "./page/allMember";
import ScrollToTopButton from "./components/ScrollToTop";
import NotFoundPage from "./page/notFoundPage";
// import About from './components/About'
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/allMember" element={<AllMember />} />
          <Route path="/notFound" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
