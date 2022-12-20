import "../styles.css";

export default function Cereal(props) {
  return (
    <div className="Cereal">
      <h3>nome:{props.nome}</h3>
      <p>Sabor:{props.sabor}</p>
    </div>
  );
}
