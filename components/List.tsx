import React from "react";
import { Box } from "@chakra-ui/react";

export default function List({ list }: any) {
  return (
    <div>
      {list.map((item: any, index: number) => {
        return (
          <Box
            marginBottom='0.5rem'
            padding='0.5rem'
            border='1px solid grey'
            key={index}>
            {item.data}
          </Box>
        );
      })}
    </div>
  );
}
