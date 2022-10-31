import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido al sistema de reservas de Crossfit Ownage" />
    </>
  );
}

export default App;
