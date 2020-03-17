import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");

  useEffect(() => {
    console.log("i love you");
    const APP_ID = "0a57e8b8";
    const APP_KEY = "a962f4f370e5f0bcd6e8e44e41f58de3";

    const getRecipes = async () => {
      const recipe = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const response = await recipe.json();
      setrecipes(response.hits);
      console.log(response.hits);
    };
    getRecipes();
  }, [query]);

  const finalquery = e => {
    e.preventDefault();
    setquery(search);
  };

  const searchme = e => setsearch(e.target.value);

  return (
    <div className="App">
      <form className="searchForm" onSubmit={finalquery}>
        <input
          placeholder="Enter Recipe"
          value={search}
          onChange={searchme}
          className="searchForme"
        />
        <button className="Searchbutton">Search</button>
      </form>
      <div className='recipe'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
