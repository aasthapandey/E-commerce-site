import React, { useCallback, useState } from "react";

const Item = React.memo(({ item, isActive, toggleActive }) => {
  console.log(`Rendering: ${item}`);
  return (
    <div
      onClick={() => toggleActive(item)}
      style={{
        background: isActive ? "lightblue" : "transparent",
        cursor: "pointer",
      }}
    >
      {item}
    </div>
  );
});

const ItemList = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = ["Items 1", "Items 2", "Items 3", "Items 4"];

  const toggleActive = useCallback((item) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
  }, []);

  // const toggleActive = (item) => {
  //   setActiveItem((prevItem) => (prevItem === item ? null : item));
  // };

  return (
    <div>
      {items.map((item) => (
        <Item
          key={item}
          item={item}
          isActive={item === activeItem}
          toggleActive={toggleActive}
        />
      ))}
    </div>
  );
};

export default ItemList;
