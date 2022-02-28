import React, { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";
import { FaSun, FaMoon } from "react-icons/fa";
import { ITodos } from "./interfaces/ITodos";

function App() {
  const [todos, setTodos] = useState<ITodos[]>(
    () => JSON.parse(localStorage.getItem("todos") || "[]") || []
  );

  const deleteTodo = (id: string): void => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...newTodos]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: ITodos): void => {
    //spreading to create a new ref + to add new todo
    setTodos([...todos, todo]);
    // localStorage.setItem('todos', )
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    //VStack : dflex, flexD column, alignItems center
    //cannot add margin to child of a Stack, must use !important
    <VStack p={4}>
      <IconButton
        aria-label="mode-icon"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="32px !important"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodos addTodo={addTodo} />
    </VStack>
  );
}

export default App;
