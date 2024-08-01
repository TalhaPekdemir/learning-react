import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Hello from "./components/Hello";
import Player from "./components/Player";
import Basket from "./components/Basket";
import LogInOutButton from "./components/LogInOutButton";
import Products from "./components/Products";
import BasicEventHandling from "./components/BasicEventHandling";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import InlineStyledComponent from "./components/InlineStyledComponent";
import StyleSheetComponent from "./components/StyleSheetComponent";
import StyleSheetComponentTwo from "./components/StyleSheetComponentTwo";
import StructuralComponent from "./components/StructuralComponent";

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
      {/* <Basket /> */}
      {/* <LogInOutButton /> */}
      {/* <Products /> */}
      {/* <BasicEventHandling /> */}
      {/* <Counter /> */}
      {/* <LoginForm /> */}
      {/* <InlineStyledComponent />
      <StyleSheetComponent />
      <StyleSheetComponentTwo /> */}
      <StructuralComponent>
        <Header/>
      </StructuralComponent>
    </div>
  );
}

export default App;
