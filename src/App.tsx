import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Exploring from "./pages/Exploring";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BulkUp from "./pages/BulkUp";
import FinTrack from "./pages/FinTrack";
import Foodies from "./pages/Foodies";
import Flashcards from "./pages/Flashcards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/work" element={<Work />} />
      <Route path="/work/bulkup" element={<BulkUp />} />
      <Route path="/work/fintrack" element={<FinTrack />} />
      <Route path="/work/foodies" element={<Foodies />} />
      <Route path="/work/flashcards" element={<Flashcards />} />

      <Route path="/exploring" element={<Exploring />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;