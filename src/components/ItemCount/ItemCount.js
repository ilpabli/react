import Button from "react-bootstrap/Button";

const ItemCount = ({ setCount }) => {
  const addItem = () => {
    setCount((currentValue) => {
      if (currentValue <= 2) {
        return currentValue + 1;
      } else {
        console.log("No puedes cargas mas creditos!");
        return currentValue;
      }
    });
  };
  const removeItem = () => {
    setCount((currentValue) => {
      if (currentValue > 1) {
        return currentValue - 1;
      } else {
        return currentValue;
      }
    });
  };
  return (
    <div>
      <Button className="mx-1" variant="success" onClick={addItem}>
        + Credito
      </Button>
      <Button className="mx-1" variant="danger" onClick={removeItem}>
        - Credito
      </Button>
    </div>
  );
};

export default ItemCount;
