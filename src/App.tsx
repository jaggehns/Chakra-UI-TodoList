import React from "react";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";
import { FaSun, FaMoon } from "react-icons/fa";
import { ITodoList } from "./interfaces/ITodos";

function App() {
  const todoList: ITodoList = {
    todos: [
      {
        id: 1,
        body: "buy eggs",
      },
      {
        id: 2,
        body: "buy milk",
      },
    ],
  };

  return (
    //VStack : dflex, flexD column, alignItems center
    //cannot add margin to child of a Stack, must use !important
    <VStack p={4}>
      <IconButton
        aria-label="mode-icon"
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
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
      <TodoList {...todoList} />
      <AddTodos />
    </VStack>
  );
}

export default App;
