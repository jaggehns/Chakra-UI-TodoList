import React, { FC } from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { ITodos } from "../interfaces/ITodos";

interface Props {
  todos: ITodos[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth="3px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        //HStack so button and body are on the same line (H)
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            aria-label="delete-icon"
            icon={<FaTrash />}
            isRound={true}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
