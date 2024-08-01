import { useState } from "react";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import FlexContainer from "./components/FlexContainer";
import ColumnContainer from "./components/ColumnContainer";
import FoodDetails from "./components/FoodDetails";

import "./App.css";

function App() {
  const [foodData, setFoodData] = useState({});
  const [foodId, setFoodId] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <FlexContainer>
        <ColumnContainer>
          <FoodList foodList={foodData.results} setFoodId={setFoodId} />
        </ColumnContainer>
        <ColumnContainer>
          <FoodDetails foodId={foodId} />
        </ColumnContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
