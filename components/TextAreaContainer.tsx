import React from "react";
import { Textarea, Box, Button } from "@chakra-ui/react";

export default function TextAreaContainer() {
  return (
    <Box>
      <Textarea height='50vh' />
      <Button float='right' mt='1rem'>
        Submit
      </Button>
    </Box>
  );
}
