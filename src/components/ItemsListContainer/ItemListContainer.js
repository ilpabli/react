import "./style.css";

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="main-mensaje__container">
      <h2 className="main-mensaje__saludo">{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
