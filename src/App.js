import "./styles.css";
import Cereal from "./components/Cereal";

function App() {
  const sabor1 = "Morango";

  const sabor2 = "Chocolate";

  const sabor3 = "Milho";

  const nome = "Snowflakes";

  const nome2 = "Tigre";

  const nome3 = "Fazendinha";

  return (
    <div className="App">
      <h1>Cereais da Labenu</h1>
      <Cereal sabor={sabor1} nome={nome} />
      <Cereal sabor={sabor2} nome={nome2} />
      <Cereal sabor={sabor3} nome={nome3} />
    </div>
  );
}

export default App;
