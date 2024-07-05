import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Hello from "./components/Hello";
import Player from "./components/Player";
import Basket from "./components/Basket";

function App() {
  // A component has to return a JSX.

  const player = {
    nickname: "Bob the Destructor",
    level: 38,
    class: "Dragonslayer",
    activeEffects: ["Strength II", "Healing I"],
  };
  return (
    <div className="App">
      {/* <Player player={player} /> */}
      <Basket />
    </div>
  );
}

export default App;
