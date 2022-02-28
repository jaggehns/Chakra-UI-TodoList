import { Button, HStack, Input } from "@chakra-ui/react";
import React, { FC } from "react";

const AddTodos: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter Todo"
          borderColor="gray.300"
          borderWidth="3px"
        />
        <Button colorScheme="pink" p="5">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodos;
