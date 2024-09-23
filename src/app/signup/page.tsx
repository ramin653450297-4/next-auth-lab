import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { FormEvent } from "react";

export default function page() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};
  return (
    <>
      <Typography variant="h1">This is signup page</Typography>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack
          width={400}
          justifyContent="center"
          alignItems="center"
          margin="auto auto"
          spacing={1}
        >
          <TextField name="email" label="email" />
          <TextField name="password" label="password" />
          <Button type="submit">Submit</Button>{" "}
        </Stack>
      </form>
    </>
  );
}
