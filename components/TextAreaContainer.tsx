import React from "react";
import { Textarea, Box, Button } from "@chakra-ui/react";

export default function TextAreaContainer({
  onChange,
  onSubmit,
  textContent,
}: any) {
  return (
    <Box>
      <Textarea value={textContent} onChange={onChange} height='50vh' />
      <Button onClick={onSubmit} float='right' mt='1rem'>
        Submit
      </Button>
    </Box>
  );
}
