import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Hello from "./components/Hello";

function App() {
  // A component has to return a JSX.
  return (
    <div className="App">
      <Header />
      <Paragraph />
      <Hello message="Hi" name="Bob" />
      <Hello message="Hello there" name="General Kenobi" />
    </div>
  );
}

export default App;
