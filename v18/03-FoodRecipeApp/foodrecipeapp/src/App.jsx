import { useState } from "react";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import FlexContainer from "./components/FlexContainer";
import ColumnContainer from "./components/ColumnContainer";
import FoodDetails from "./components/FoodDetails";

import "./App.css";
import DummyFoodList from "./components/DummyFoodList";

function App() {
  const [foodData, setFoodData] = useState({});
  const [foodId, setFoodId] = useState();

  return (
    <div className="App">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <FlexContainer>
        <FoodList foodList={foodData.results} setFoodId={setFoodId} />

        {/* <DummyFoodList /> */}

        {foodId ? (
          <ColumnContainer>
            <FoodDetails foodId={foodId} />
          </ColumnContainer>
        ) : null}
      </FlexContainer>
    </div>
  );
}

export default App;
