import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import TextAreaContainer from "../components/TextAreaContainer";
import List from "../components/List";
import { add, get } from "../api";

export default function Index() {
  const [textContent, setTextContent] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e: any) => {
    setTextContent(e.target.value);
  };

  const handleSubmit = () => {
    add(textContent).then(() => {
      setTextContent("");
      get().then((res: any) => {
        setList(res.data.todo_list);
      });
    });
  };

  useEffect(() => {
    get().then((res) => {
      setList(res.data.todo_list);
    });
  }, []);

  return (
    <div>
      <Flex flexDirection={"row"}>
        <Box padding='1rem' flex='1'>
          <TextAreaContainer
            textContent={textContent}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </Box>
        <Box padding='1rem' flex='1'>
          <List list={list} />
        </Box>
      </Flex>
    </div>
  );
}
