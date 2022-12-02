import { useRef } from "react";

import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const form = useRef();

  const submitEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_CONTACT_FORM_ID,
        form.current,
        import.meta.env.VITE_APP_USER_ID
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Stack width={{ xs: "20rem", md: "30rem" }} maxWidth={{ xs: "100%" }}>
      <form
        ref={form}
        onSubmit={handleSubmit(submitEmail)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl sx={{ height: "5rem" }}>
          <InputLabel>Nombre</InputLabel>
          <Input
            type="text"
            name="name"
            {...register("name", {
              required: true,
              minLength: "3",
              maxLength: "15",
            })}
          />
          {errors.name?.type === "required" && (
            <Alert>{"El nombre es requerido!"}</Alert>
          )}
          {errors.name?.type === "minLength" && (
            <Alert>{"El nombre es demasiado corto!"}</Alert>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
            })}
          />
          {errors.email?.type === "required" && (
            <Alert>{"El email es requerido!"}</Alert>
          )}
          {errors.email?.type === "pattern" && (
            <Alert>{"El formato del email es incorrecto!"}</Alert>
          )}
        </FormControl>
        <FormControl>
          <TextField
            name="message"
            id="message"
            placeholder="Mensaje"
            multiline
            rows={5}
            sx={{ marginTop: "40px" }}
            {...register("message", {
              required: true,
            })}
          ></TextField>
          {errors.message?.type === "required" && (
            <Alert>{"El mensaje es requerido!"}</Alert>
          )}
        </FormControl>
        <Button
          sx={{
            marginTop: "20px",
            border: "1px solid #0e577e",
            "&:hover": {
              color: "white",
              backgroundColor: "#0e577e",
            },
          }}
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </Stack>
  );
};

export default Form;
