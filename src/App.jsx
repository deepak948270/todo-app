import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import EmptyItemsMessage from "./components/EmptyItemsMessage";
import Container from "./components/Container";

function App() {
  let itemsArr = [
    { id: 1, itemName: "buy laptop", date: "2/10/2020" },
    { id: 2, itemName: "buy milk", date: "22/3/2024" },
    { id: 3, itemName: "buy smartphone", date: "2/10/2021" },
    { id: 4, itemName: "buy headphone", date: "8/1/2003" },
    { id: 5, itemName: "buy table", date: "1/8/2010" },
    { id: 6, itemName: "buy enteded-mouse pad", date: "2/1/2024" },
  ];

  const [items, setItems] = useState(itemsArr);

  const newItemsHandler = (todoName, todoDate) => {
    let randomId = Math.random();
    console.log(`todoname:${todoName} dotodate:${todoDate}`);
    const newItemsArr = [
      ...items,
      { id: randomId, itemName: todoName, date: todoDate },
    ];
    setItems(newItemsArr);
  };

  const deleteClickHandler = (todoName) => {
    console.log(`deleted this :${todoName}`);
    let modifiedItemsArr = items.filter((item) => item.itemName != todoName);
    setItems(modifiedItemsArr);
  };

  return (
    <div>
      <Container>

        <AppName />

        <AddTodo newItemsHandler={newItemsHandler} />

        {items.length === 0 && <EmptyItemsMessage />}

        <TodoItems items={items} onDelete={deleteClickHandler} />
        
      </Container>
    </div>
  );
}

export default App;
