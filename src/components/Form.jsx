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
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_APP_SERVICE_ID,
  //       import.meta.env.VITE_APP_TEMPLATE_CONTACT_FORM_ID,
  //       e.values,
  //       import.meta.env.VITE_APP_USER_ID
  //     )
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // };

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
      <form ref={form} onSubmit={handleSubmit(submitEmail)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: true,
              minLength: "3",
              maxLength: "15",
            })}
          />
          {errors.name?.type === "required" && <p>El nombre es requerido</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              pattern:
                /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El email tiene un formato incorrecto</p>
          )}
        </div>
        <div>
          <label>Mensaje</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            {...register("message", {
              required: true,
            })}
          ></textarea>
        </div>
        <input type="submit" value="Enviar Formulario" />

        {/* <FormControl sx={{ height: "5rem" }}>
          <InputLabel htmlFor="">Nombre</InputLabel>
          <Input id="name" name="name" type="name" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Email</InputLabel>
          <Input id="email" name="email" type="email" />
        </FormControl>
        <FormControl>
          <TextField
            sx={{ marginTop: "40px", height: "5rem" }}
            placeholder="Mensaje"
            type="text-area"
            name="message"
          />
          <Button variant="contained" sx={{ marginTop: "20px" }}>
            Enviar Mensaje
          </Button>
        </FormControl> */}
      </form>
    </Stack>
  );
};

export default Form;
