import { useState } from "react";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState({});

  return (
    <div className="App">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <FoodList foodList={foodData.results} />
    </div>
  );
}

export default App;
