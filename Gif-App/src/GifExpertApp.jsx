import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(e) => onAddCategory(e)}
      />
      <button onClick={onAddCategory}>Agregar</button>

      {categories.map((category, index) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
