import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route
          exact
          path="/disciplina/:disciplinaNombre"
          element={<ItemListContainer />}
        />
        <Route exact path="/clase/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
