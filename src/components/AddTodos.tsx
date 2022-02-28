import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { ITodos } from "../interfaces/ITodos";
import { nanoid } from "nanoid";

interface Props {
  addTodo: (todo: ITodos) => void;
}

const AddTodos: FC<Props> = ({ addTodo }) => {
  const toast = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
      //break
    }
    setContent("");

    const todo: ITodos = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
  };

  const [content, setContent] = useState<string>("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          variant="filled"
          placeholder="Enter Todo"
          borderColor="gray.300"
          borderWidth="3px"
        />
        <Button colorScheme="pink" p="5" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodos;
