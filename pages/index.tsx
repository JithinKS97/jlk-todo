import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import TextAreaContainer from "../components/TextAreaContainer";
import List from "../components/List";

export default function index() {
  return (
    <div>
      <Flex flexDirection={"row"}>
        <Box padding='1rem' flex='1'>
          <TextAreaContainer />
        </Box>
        <Box padding='1rem' flex='1'>
          <List />
        </Box>
      </Flex>
    </div>
  );
}
